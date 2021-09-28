const dbService = require('../../services/db.service')
const userService = require('../user/user.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
	getCurrent,
	getAll,
	getById,
	moveToNext,
	remove,
	update,
	add,
}

async function getCurrent(userId) {
	try {
		const { workouts, currWorkoutIdx } = await userService.getById(userId)
		if (!workouts.length) return { name: 'No Workout', exercises: [] }
		return workouts[currWorkoutIdx]
	} catch (err) {
		console.log(err)
		throw err
	}
}

async function getAll() {
	try {
		const collection = await dbService.getCollection('workout')
		const workouts = collection.find({}).toArray()
		if (!workouts.length) return [{ name: 'No workouts', exercises: [] }]
		return workouts
	} catch (err) {
		console.log(err)
		throw err
	}
}

async function moveToNext(userId) {
	try {
		const user = await userService.getById(userId)
		const { workouts, currWorkoutIdx } = user
		user.currWorkoutIdx = currWorkoutIdx === workouts.length - 1 ? 0 : currWorkoutIdx + 1
		await userService.update(user)
	} catch (err) {
		console.log(err)
		throw err
	}
}

async function getById(id) {
	try {
		const collection = await dbService.getCollection('workout')
		const workout = await collection.findOne({ _id: ObjectId(id) })
		return workout
	} catch (err) {
		console.log(err)
		throw err
	}
}

async function remove(id) {
	try {
		// remove workout from user
		const user = userService.getByWorkoutId(id)
		user.workouts = user.workouts.filter(({ _id }) => _id !== id)
		await userService.update(user)

		// remove workout from workout collection
		const collection = await dbService.getCollection('workout')
		await collection.deleteOne({ _id: ObjectId(id) })
	} catch (err) {
		console.log(err)
		throw err
	}
}

async function update(workout) {
	try {
		const workoutToSave = {
			_id: ObjectId(workout._id),
			name: workout.name,
			exercises: workout.exercises,
			userId: workout.userId,
		}
		// update workout in user
		const user = await userService.getById(workoutToSave.userId)
		user.workouts = user.workouts.map(workout =>
			workout._id === workoutToSave._id ? workoutToSave : workout
		)
		await userService.update(user)

		// update workout in workout collection
		const collection = await dbService.getCollection('workout')
		await collection.updateOne({ _id: workoutToSave._id }, { $set: workoutToSave })
		return workoutToSave
	} catch (err) {
		console.log(err)
		throw err
	}
}
async function add(workout) {
	try {
		const workoutToAdd = {
			name: workout.name,
			exercises: workout.exercises || [],
			userId: ObjectId(workout.userId),
		}
		// add workout to user's workouts
		const user = await userService.getById(workoutToAdd.userId)
		user.workouts.push(workoutToAdd)
		await userService.update(user)

		// add workout to workout collection
		const collection = await dbService.getCollection('workout')
		await collection.insertOne(workout)
		return workoutToAdd
	} catch (err) {
		console.log(err)
		throw err
	}
}
