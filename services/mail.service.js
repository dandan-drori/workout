const nodemailer = require('nodemailer')
const cron = require('node-cron')
const { getCurrentWorkout, formatWorkout } = require('./workout.service')

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

function setMailInterval() {
	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_USER,
		subject: "Today's Workout",
		html: formatWorkout(getCurrentWorkout()),
	}

	// m h DoM M DoW
	cron.schedule('0 10 * * *', () => {
		gTransporter.sendMail(mailOptions, function (err, info) {
			if (err) {
				console.log(err)
			} else {
				console.log('Email sent: ' + info.response)
			}
		})
	})
}
