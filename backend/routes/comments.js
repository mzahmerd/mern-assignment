const router=require('express').Router({mergeParams:true})

const {getComments,addComment,getComment,updateComment,deleteComment}=require('../controllers/comments')

const {protect} = require("../middlewares/auth")

// Protect routes from unauthorized access
router.use(protect)

router.route('/')
    .get(getComments)
    .post(addComment)
router.route('/:id')
    .get(getComment)
    .put(updateComment)
    .delete(deleteComment)

module.exports=router