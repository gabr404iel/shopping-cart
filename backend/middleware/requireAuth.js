const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const requireAuth = async (req, res, next) => {

    //get the authorization from header
    const { authorization } = req.headers

    if (!authorization){
        return res.status(401).json({error: "You must be logged in"})
    }

    //get token, since token wil be like "Bearer asdfl;jk"
    const token = authorization.split(" ")[1]

    try{
        //verify token
        const { _id } = jwt.verify(token, process.env.SECRET_KEY)

        //find user, select is used to not return password
        req.user = await User.findOne({ _id }).select('_id')
        next()

    }catch(error){
        console.log(error)
        return res.status(401).json({error: "Request not authorized"})
    }
}

module.exports = requireAuth