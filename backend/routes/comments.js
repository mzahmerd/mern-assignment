const router=require('express').Router()

const {getComments,addComment,getComment,updateComment,deleteComment}=require('../controllers/comments')

router.route('/')
    .get(getComments)
    .post(addComment)
router.route('/:id')
    .get(getComment)
    .put(updateComment)
    .delete(deleteComment)

module.exports=router