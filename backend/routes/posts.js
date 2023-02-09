const router=require('express').Router()

const {getPosts,addPost,getPost,updatePost,deletePost}=require('../controllers/posts')

const {protect} = require("../middlewares/auth")

// Protect routes from unauthorized access
router.use(protect)

router.route('/')
    .get(getPosts)
    .post(addPost)
router.route('/:id')
    .get(getPost)
    .put(updatePost)
    .delete(deletePost)

// external route for comments
const comment = require('./comments')

// re-route comments request
router.use('/:postId/comments', comment)

module.exports=router