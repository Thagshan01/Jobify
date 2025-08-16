import jwt from 'jsonwebtoken'
import Company from '../models/Company.js'

export const protectCompany = async (req,res,next) => {

    const token = req.headers.token

    if (!token) {
        return res.json({ success:false, message:'NoT authorized, Login Again' })
    }

    try {

        const decoded = jwt.verify(token, process.env,JWT_SECRET)

        req.company = await Company.findById(decoded.id).select('-password')
    } catch (error ) {
        res.json({ success:false, message: error.message})
    }
}