const nodemailer = require('nodemailer')
const cron = require('node-cron')
const { formatWorkout, getCurrentWorkout } = require('./workout.service')
const { getCurrent } = require('../api/workout/workout.service')
const { query } = require('../api/user/user.service')

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
		const users = query()
		if (!users.length) return
		users.forEach(async user => {
			const currWorkout = await getCurrent(user._id)
			const mailOptions = {
				from: process.env.EMAIL_USER,
				to: process.env.EMAIL_USER,
				subject: "Today's Workout",
				html: formatWorkout(currWorkout),
			}

			// (s - optional) m h DoM M DoW
			// use user's preferences to schedule emails
			cron.schedule('0 10 * * *', () => {
				gTransporter.sendMail(mailOptions, function (err, info) {
					if (err) {
						console.log(err)
					} else {
						console.log('Email sent: ' + info.response)
					}
				})
			})
		})
	} catch (err) {
		console.log(err)
	}
}
