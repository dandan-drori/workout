const bcrypt = require('bcrypt')
const userService = require('../user/user.service')

async function login(username, password) {
	console.log('new login with username:', username)

	const user = await userService.getByUsername(username)
	if (!user) return Promise.reject('Invalid username or password')
	const match = await bcrypt.compare(password, user.password)
	if (!match) return Promise.reject('Invalid username or password')

	delete user.password
	return user
}

async function signup(username, password, fullname) {
	const saltRounds = 10
	console.log('signup with username:', username)

	if (!username || !password || !fullname)
		return Promise.reject('fullname, username and password are required!')

	// const user = await userService.getByUsername(username)
	// if (user) return Promise.reject('This email address is already taken!')

	const hash = await bcrypt.hash(password, saltRounds)
	return userService.add({ username, password: hash, fullname })
}

module.exports = {
	signup,
	login,
}
