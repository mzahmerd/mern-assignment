const asyncHandler=require('../middlewares/async')
const Post=require('../models/Post')
const ErrorResponse=require('../utils/errorResponse')

// @desc Get all posts
// @route GET /posts
// @access private
exports.getPosts=asyncHandler(async (req,res,next) => {
    const posts = await Post.find()
    
    res.status(200).send({
        success:true,
        data: posts
    })
})

// @desc Get a post
// @route GET /posts/:id
// @access private
exports.getPost=asyncHandler(async (req,res,next) => {
    const post=await Post.findById(req.params.id)
    
    if(!post) {
        return next(new ErrorResponse('Post not found!',404))
    }
    res.status(200).send({
        success: true,
        data: post
    })
})

// @desc Add a post
// @route POST /posts
// @access private
exports.addPost=asyncHandler(async (req,res,next) => {

    const post=await Post.create(req.body)

    res.status(201).send({
        success: true,
        data: post
    })
})

// @desc Update a post
// @route PUT /posts/:id
// @access private
exports.updatePost=asyncHandler(async (req,res,next) => {
    let post=await Post.findById(req.params.id)
    if(!post) {
        return next(new ErrorResponse('Post not found!',404))
    }
    await post.updateOne(req.body)

    res.status(200).send({
        success: true,
        data: post
    })
}
)
// @desc Delete a post
// @route DELETE /posts/:id
// @access private
exports.deletePost=asyncHandler(async (req,res,next) => {
    let post=await Post.findById(req.params.id)
    
    if(!post) {
        return next(new ErrorResponse('Post not found!',404))
    }
    
    await Post.findByIdAndRemove(req.params.id)

    res.status(200).send({
        success: true,
        data: {}
    })
})