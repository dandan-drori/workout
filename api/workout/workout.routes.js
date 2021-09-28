const router = require('express').Router()

const {
	getCurrentWorkout,
	moveToNextWorkout,
	getAllWorkouts,
	getWorkoutById,
	saveWorkout,
	removeWorkout,
} = require('./workout.controller')

router.get('/', getCurrentWorkout)
router.get('/move', moveToNextWorkout)
router.get('/all', getAllWorkouts)
router.get('/:id', getWorkoutById)
router.put('/', saveWorkout)
router.post('/', saveWorkout)
router.delete('/:id', removeWorkout)

module.exports = router
