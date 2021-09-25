const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
	getCurrent,
	getAll,
	getById,
	moveToNext,
	remove,
	update,
	add,
	getNext,
}

async function getCurrent() {
	try {
		const currWorkoutCollection = await dbService.getCollection('currWorkout')
		const { currWorkoutIdx } = await currWorkoutCollection.findOne({})
		const collection = await dbService.getCollection('workout')
		const workouts = await collection.find({}).toArray()
		if (!workouts.length) Promise.reject({ name: 'No workouts', exercises: [] })
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
		if (!workouts.length) Promise.reject({ name: 'No workouts', exercises: [] })
		return workouts
	} catch (err) {
		console.log(err)
		throw err
	}
}

async function getNext() {}

async function moveToNext() {
	try {
		const collection = await dbService.getCollection('currWorkout')
		const { _id, currWorkoutIdx } = await collection.findOne({})
		const newCurrWorkoutIdx =
			currWorkoutIdx === 2
				? { _id: ObjectId(_id), currWorkoutIdx: 0 }
				: { _id: ObjectId(_id), currWorkoutIdx: currWorkoutIdx + 1 }
		await collection.updateOne({ _id: ObjectId(_id) }, { $set: newCurrWorkoutIdx })
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
		}
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
		}
		const collection = await dbService.getCollection('workout')
		await collection.insertOne(workout)
		return workoutToAdd
	} catch (err) {
		console.log(err)
		throw err
	}
}
