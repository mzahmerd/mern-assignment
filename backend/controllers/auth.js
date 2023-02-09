const asyncHandler=require("../middlewares/async");
const User=require("../models/User");
const ErrorResponse=require("../utils/errorResponse")

// @desc    login user
// @route   POST /api/auth/login
// @access  public
exports.login=asyncHandler(async (req,res,next) => {
    const {email,password}=req.body
    // validate email and passsword
    if(!email||!password) {
        return next(new ErrorResponse('Please provide both email and password',400))
    }
    // Check for user
    const user=await User.findOne({email: email}).select('+password')
    if(!user) {
        return next(new ErrorResponse(`Invalid credentials`,401))
    }
    // Check if the password is correct
    const isMatched=await user.matchPassword(password)
    if(!isMatched) {
        return next(new ErrorResponse(`Invalid credentials`,401))
    }
    // send token response
    sendTokenResponse(user,200,res)

});

// @desc    login user
// @route   POST /api/auth/login
// @access  public
exports.register=asyncHandler(async (req,res,next) => {
   
    // Create the user
    const user=await User.create(req.body)
 
    // send token response
    sendTokenResponse(user,200,res)

});

// get token from model and send message
const sendTokenResponse=(user,statusCode,res) => {
    // get the token 
    const token=user.getSignedJwtToken()
    res
        .status(statusCode)
        .send({success: true,token, user});
}
