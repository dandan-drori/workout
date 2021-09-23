const workoutService = require('./workout.service')

module.exports = {
	getCurrentWorkout,
	getNextWorkout,
	moveToNextWorkout,
	getAllWorkouts,
	getWorkoutById,
	saveWorkout,
}

async function getCurrentWorkout(req, res) {
	try {
		const currWorkout = await workoutService.getCurrent()
		res.send(currWorkout)
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}

function getNextWorkout(req, res) {
	res.send(workoutService.getNext())
}

async function moveToNextWorkout(req, res) {
	try {
		await workoutService.moveToNext()
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
		if (_id) {
			await workoutService.update(req.body)
		} else {
			await workoutService.add(req.body)
		}
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}
