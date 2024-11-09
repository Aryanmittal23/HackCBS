import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"30d"
    })
    res.cookie("jwt_hackcbs",token,{  
        httpOnly:true,
        secure:true,
        sameSite:"none",
        maxAge:30*24*60*60*1000
    })
    return token
}

export default generateTokenAndSetCookie