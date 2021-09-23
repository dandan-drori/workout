const gWorkouts = [
	{
		name: 'Back and Biceps',
		exercises: [
			{ name: 'Pullups', weight: 0 },
			{ name: 'Bent Over Dumbbell Rows', weight: 20 },
			{ name: 'Cable Lat Pullover', weight: 25 },
			{ name: 'Cable Curls', weight: 27.5 },
			{ name: 'Concentration Curls', weight: 14 },
		],
	},
	{
		name: 'Chest and Triceps',
		exercises: [
			{ name: 'Bench Press', weight: 75 },
			{ name: 'Incline Dumbbell Press', weight: 24 },
			{ name: 'Cable Flies', weight: 10 },
			{ name: 'Skull Crushers', weight: 20 },
			{ name: 'Cable Tricep Extensions', weight: 25 },
		],
	},
	{
		name: 'Legs and Shoulders',
		exercises: [
			{ name: 'Squats', weight: 75 },
			{ name: 'Leg Press + Calves', weight: 120 },
			{ name: 'Leg Extensions', weight: 60 },
			{ name: 'Seated Shoulder Press', weight: 20 },
			{ name: 'Cable Front and Lateral Delts', weight: 7.5 },
		],
	},
]

const gWorkoutIdx = 0

module.exports = {
	getAllWorkouts,
	getWorkoutByName,
	getWorkoutByExercise,
	getCurrentWorkout,
	getNextWorkout,
	moveToNextWorkout,
	formatWorkout,
}

function getAllWorkouts() {
	return gWorkouts
}

function getWorkoutByName(workoutName) {
	return gWorkouts.find(({ name }) => name === workoutName)
}

function getWorkoutByExercise(exercise) {
	return gWorkouts.find(
		({ exercises }) => exercises.findIdx(({ name }) => name === exercise) !== -1
	)
}

function getCurrentWorkout() {
	return gWorkouts[gWorkoutIdx]
}

function moveToNextWorkout() {
	if (gWorkoutIdx === 2) {
		gWorkoutIdx = 0
		return
	}
	gWorkoutIdx++
}

function getNextWorkout() {
	if (gWorkoutIdx === 2) return gWorkouts[0]
	return gWorkouts[gWorkoutIdx + 1]
}

function formatWorkout(workout) {
	const head = `<h2>${workout.name}</h2><ul>`
	let body = ''
	workout.exercises.forEach(({ name, weight }) => {
		body += `<li>${name}, ${weight}kg</li>`
	})
	const tail = `</ul>`
	return head + body + tail
}
