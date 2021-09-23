require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(helmet())
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, 'public')))
} else {
	const corsOptions = {
		origin: [
			'http://127.0.0.1:8080',
			'http://localhost:8080',
			'http://127.0.0.1:3000',
			'http://localhost:3000',
		],
		credentials: true,
	}
	app.use(cors(corsOptions))
}

const workoutRoutes = require('./api/workout/workout.routes')
app.use('/api/workout', workoutRoutes)

const { setMailInterval } = require('./services/mail.service')
setMailInterval()

app.get('/**', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 3030
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
