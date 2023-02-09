const asyncHandler=require('../middlewares/async')
const Comment=require('../models/Comment')
const ErrorResponse=require('../utils/errorResponse')

// @desc Get all comments
// @route GET /comments
// @access private
exports.getComments=asyncHandler(async (req,res,next) => {
    const comments = await Comment.find()
    
    res.status(200).send({
        success:true,
        data: comments
    })
})

// @desc Get a comment
// @route GET /comments/:id
// @access private
exports.getComment=asyncHandler(async (req,res,next) => {
    const comment=await Comment.findById(req.params.id)
    if(!comment) {
        return next(new ErrorResponse('Comment not found!',404))
    }
    res.status(200).send({
        success: true,
        data: comment
    })
})

// @desc Add a comment
// @route POST /comments
// @access private
exports.addComment=asyncHandler(async (req,res,next) => {

    const comment=await Comment.create(req.body)

    res.status(201).send({
        success: true,
        data: comment
    })
})

// @desc Update a comment
// @route PUT /comments/:id
// @access private
exports.updateComment=asyncHandler(async (req,res,next) => {
    let comment=await Comment.findById(req.params.id)
    if(!comment) {
        return next(new ErrorResponse('Comment not found!',404))
    }
    await comment.updateOne(req.body)

    res.status(200).send({
        success: true,
        data: comment
    })
})

// @desc Delete a comment
// @route DELETE /comments/:id
// @access private
exports.deleteComment=asyncHandler(async (req,res,next) => {
    let comment=await Comment.findById(req.params.id)
    
    if(!comment) {
        return next(new ErrorResponse('Comment not found!',404))
    }
    
    await Comment.findByIdAndRemove(req.params.id)

    res.status(200).send({
        success: true,
        data: {}
    })
})