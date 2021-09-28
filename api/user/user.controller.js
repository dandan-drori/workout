const userService = require('./user.service')

async function getUsers(req, res) {
	try {
		const users = await userService.query()
		res.send(users)
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}
async function getUser(req, res) {
	try {
		const user = await userService.getById(req.params.id)
		res.send(user)
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}
async function saveUser(req, res) {
	try {
		const savedUser = await userService.update(req.body)
		res.send(savedUser)
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}

async function removeUser(req, res) {
	try {
		await userService.remove(req.params.id)
		res.send('User deleted successfully')
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}

module.exports = {
	getUsers,
	getUser,
	saveUser,
	removeUser,
}
