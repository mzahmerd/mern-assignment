const router=require('express').Router()

const {getUsers,addUser,getUser,updateUser,deleteUser}=require('../controllers/users')

const {protect} = require("../middlewares/auth")

// Protect routes from unauthorized access
router.use(protect)

router.route('/')
    .get(getUsers)
    .post(addUser)
router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports=router