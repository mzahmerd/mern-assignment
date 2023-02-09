const asyncHandler=require('../middlewares/async')
const User=require('../models/User')
const ErrorResponse=require('../utils/errorResponse')

// @desc Get all users
// @route GET /users
// @access private
exports.getUsers=asyncHandler(async (req,res,next) => {
    const users = await User.find()
    
    res.status(200).send({
        success:true,
        data: users
    })
})

// @desc Get a user
// @route GET /users/:id
// @access private
exports.getUser=asyncHandler(async (req,res,next) => {
    const user=await User.findById(req.params.id)
    if(!user) {
        return next(new ErrorResponse('User not found!',404))
    }
    res.status(200).send({
        success: true,
        data: user
    })
})

// @desc Add a user
// @route POST /users
// @access private
exports.addUser=asyncHandler(async (req,res,next) => {

    const user=await User.create(req.body)

    res.status(201).send({
        success: true,
        data: user
    })
})

// @desc Update a user
// @route PUT /users/:id
// @access private
exports.updateUser=asyncHandler(async (req,res,next) => {
    let user=await User.findById(req.params.id)
    if(!user) {
        return next(new ErrorResponse('User not found!',404))
    }
    await user.updateOne(req.body)

    res.status(200).send({
        success: true,
        data: user
    })
}
)
// @desc Delete a user
// @route DELETE /users/:id
// @access private
exports.deleteUser=asyncHandler(async (req,res,next) => {
    let user=await User.findById(req.params.id)
    
    if(!user) {
        return next(new ErrorResponse('User not found!',404))
    }
    
    await User.findByIdAndRemove(req.params.id)

    res.status(200).send({
        success: true,
        data: {}
    })
})