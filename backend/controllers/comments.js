const asyncHandler=require('../middlewares/async')
const Comment=require('../models/Comment')
const ErrorResponse=require('../utils/errorResponse')

// @desc Get all comments
// @route GET /comments
// @access private
exports.getComments=asyncHandler(async (req,res,next) => {
    const {postId} = req.params

    const comments = await Comment.find({post:postId}).populate("author")
    
    res.status(200).send({
        success:true,
        data: comments
    })
})

// @desc Get a comment
// @route GET /comments/:id
// @access private
exports.getComment=asyncHandler(async (req,res,next) => {
    const comment=await Comment.findById(req.params.id).populate("author")
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
    const {postId} = req.params
console.log(postId)
    // attach post ID
    req.body.post = postId
    // attach author from currently logged in user id
    req.body.author = req.user._id
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
    let comment=await Comment.findById(req.params.id).populate("author")
    if(!comment) {
        return next(new ErrorResponse('Comment not found!',404))
    }
    
    comment =  await Comment.findByIdAndUpdate(req.params.id, req.body,{new:true})
    

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