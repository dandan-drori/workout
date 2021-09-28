require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const expressSession = require('express-session')

const app = express()

const session = expressSession({
	secret: 'workouts are amazing',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false, maxAge: 1000 * 60 * 60 * 3 },
	expires: new Date(Date.now() + 30 * 86400 * 1000),
})
app.use(session)
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
			'http://0.0.0.0:8080',
		],
		credentials: true,
	}
	app.use(cors(corsOptions))
}

const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware')
app.all('*', setupAsyncLocalStorage)

const workoutRoutes = require('./api/workout/workout.routes')
const authRoutes = require('./api/auth/auth.routes')
const userRoutes = require('./api/user/user.routes')
app.use('/api/workout', workoutRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

const { setMailInterval } = require('./services/mail.service')
setMailInterval()

app.get('/**', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 3030
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
