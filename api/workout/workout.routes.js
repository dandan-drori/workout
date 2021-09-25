const router = require('express').Router()

const {
	getCurrentWorkout,
	getNextWorkout,
	moveToNextWorkout,
	getAllWorkouts,
	getWorkoutById,
	saveWorkout,
} = require('./workout.controller')

router.get('/', getCurrentWorkout)
router.get('/next', getNextWorkout)
router.get('/move', moveToNextWorkout)
router.get('/all', getAllWorkouts)
router.get('/:id', getWorkoutById)
router.put('/', saveWorkout)
router.post('/', saveWorkout)

module.exports = router
