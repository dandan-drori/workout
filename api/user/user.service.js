const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

async function query() {
	try {
		const collection = await dbService.getCollection('user')
		var users = await collection.find({}).toArray()
		return users.map(user => {
			delete user.password
			user.createdAt = ObjectId(user._id).getTimestamp()
			return user
		})
	} catch (err) {
		console.log(err)
		throw err
	}
}
async function getById(userId) {
	try {
		const collection = await dbService.getCollection('user')
		const user = await collection.findOne({ _id: ObjectId(userId) })
		delete user.password
		return user
	} catch (err) {
		console.log(err)
		throw err
	}
}
async function getByUsername(username) {
	try {
		const collection = await dbService.getCollection('user')
		return await collection.findOne({ username })
	} catch (err) {
		console.log(err)
		throw err
	}
}
async function getByWorkoutId(workoutId) {
	try {
		const collection = await dbService.getCollection('user')
		return await collection.find({ workouts: { _id: ObjectId(workoutId) } })
	} catch (err) {
		console.log(err)
		throw err
	}
}
async function add(user) {
	try {
		const userToAdd = {
			username: user.username,
			password: user.password,
			fullname: user.fullname,
			workouts: user.workouts || [],
			currWorkoutIdx: user.currentWorkoutIdx || 0,
			imgUrl:
				user.imgUrl ||
				'http://res.cloudinary.com/dandan-img-cloud/image/upload/v1626521972/johtdlkck2tptcawkglt.png',
		}
		const collection = await dbService.getCollection('user')
		await collection.insertOne(userToAdd)
		return userToAdd
	} catch (err) {
		console.log(err)
		throw err
	}
}
async function update(user) {
	try {
		const userToSave = {
			_id: ObjectId(user._id),
			username: user.username,
			fullname: user.fullname,
			currWorkoutIdx: user.currWorkoutIdx,
			workouts: user.workouts,
			imgUrl: user.imgUrl,
		}
		const collection = await dbService.getCollection('user')
		await collection.updateOne({ _id: userToSave._id }, { $set: userToSave })
		return userToSave
	} catch (err) {
		console.log(err)
		throw err
	}
}

async function remove(userId) {
	try {
		const collection = await dbService.getCollection('user')
		await collection.deleteOne({ _id: ObjectId(userId) })
	} catch (err) {
		console.log(err)
		throw err
	}
}

module.exports = {
	query,
	getById,
	getByUsername,
	getByWorkoutId,
	add,
	update,
	remove,
}
