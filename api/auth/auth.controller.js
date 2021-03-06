const authService = require('./auth.service')

async function login(req, res) {
	const { username, password } = req.body
	try {
		const user = await authService.login(username, password)
		req.session.user = user
		res.json(user)
	} catch (err) {
		console.log(err)
		res.status(401).send({ err: 'Failed to Login' })
	}
}

async function signup(req, res) {
	try {
		const { username, password, fullname } = req.body
		const account = await authService.signup(username, password, fullname)
		console.log('new account created:', JSON.stringify(account))
		const user = await authService.login(username, password)
		req.session.user = user
		res.json(user)
	} catch (err) {
		console.log(err)
		res.status(500).send({ err: 'Failed to signup' })
	}
}

async function logout(req, res) {
	try {
		req.session.destroy()
		res.send({ msg: 'Logged out successfully' })
	} catch (err) {
		console.log(err)
		res.status(500).send({ err: 'Failed to logout' })
	}
}

module.exports = {
	login,
	signup,
	logout,
}
