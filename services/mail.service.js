const nodemailer = require('nodemailer')
const cron = require('node-cron')
const { formatWorkout, getCurrentWorkout } = require('./workout.service')
const { getCurrent } = require('../api/workout/workout.service')

module.exports = {
	setMailInterval,
}

const gTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
})

async function setMailInterval() {
	try {
		const currWorkout = await getCurrent()
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_USER,
			subject: "Today's Workout",
			html: formatWorkout(currWorkout),
		}

		// (s - optional) m h DoM M DoW
		cron.schedule('0 10 * * *', () => {
			gTransporter.sendMail(mailOptions, function (err, info) {
				if (err) {
					console.log(err)
				} else {
					console.log('Email sent: ' + info.response)
				}
			})
		})
	} catch (err) {
		console.log(err)
	}
}
