const router = require('express').Router()
const { getUsers, getUser, saveUser, removeUser } = require('./user.controller')
const { requireAdmin } = require('../../middlewares/requireAuth.middleware')

// router.use(requireAdmin)

router.get('/', getUsers)
router.get('/:id', getUser)

router.put('/', requireAdmin, saveUser)
router.delete('/:id', requireAdmin, removeUser)

module.exports = router
