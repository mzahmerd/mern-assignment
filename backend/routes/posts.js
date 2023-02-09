const router=require('express').Router()

const {getPosts,addPost,getPost,updatePost,deletePost}=require('../controllers/posts')

router.route('/')
    .get(getPosts)
    .post(addPost)
router.route('/:id')
    .get(getPost)
    .put(updatePost)
    .delete(deletePost)

module.exports=router