const workoutService = require('./workout.service')

module.exports = {
	getCurrentWorkout,
	moveToNextWorkout,
	getAllWorkouts,
	getWorkoutById,
	saveWorkout,
	removeWorkout,
}

async function getCurrentWorkout(req, res) {
	try {
		const { user } = req.session
		const currWorkout = await workoutService.getCurrent(user._id)
		res.send(currWorkout)
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}

async function moveToNextWorkout(req, res) {
	try {
		await workoutService.moveToNext(req.body)
		res.send('moved to next workout')
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}

async function getAllWorkouts(req, res) {
	try {
		const workouts = await workoutService.getAll()
		res.send(workouts)
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}

async function getWorkoutById(req, res) {
	try {
		const { id } = req.params
		const workout = await workoutService.getById(id)
		res.send(workout)
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}

async function saveWorkout(req, res) {
	try {
		const { _id } = req.body
		let workout
		if (_id) {
			workout = await workoutService.update(req.body)
		} else {
			workout = await workoutService.add(req.body)
		}
		res.send(workout)
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}

async function removeWorkout(req, res) {
	try {
		await workoutService.remove(req.params.id)
		res.send('workout delete successfully')
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}
