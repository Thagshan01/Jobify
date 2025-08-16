import Compnay from "../models/Company.js";
import bcrypt from 'bcrypt';
import { v2 as cloudinary} from 'cloudinary';
import generateToken from "../utils/generateToken.js";

// register a new company 

export const registerCompany = async(req,res)=>{

    const {name, email, password} = req.body;

    const imageFile = req.file.path; // Assuming multer is configured to handle file uploads

    if (!name || !email || !password || !imageFile) {
        return res.json({ success:false, message: "Missing Details" });
    }

    try {
        const companyExists = await Company.findOne({email})

        if (companyExists) {
            return res.json({success:false, message: 'Company already registered'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const imageUpload = await cloudinary.uploader.upload(imageFile.path)

        const company = await Company.create({
            name,
            email,
            password: hashPassword,
            image: imageUpload.secure_url
        })

        res.json({
            success: true,
            company: {
                id: company._id,
                name: company.name,
                email: company.email,
                image: company.image
            },
            token: generateToken(company._id)
        })

        return res.json({ success: true, message: 'Company registered successfully', company })

    } catch (error) {
        res.json({success:false, message: error.message})
    }
}

//company login

export const loginCompany = async(req,res)=>{

}

//company data

export const getCompanyData  = async(req,res)=>{

}

//post a new job
export const postJob = async(req,res)=>{

}
// get company jobs applications
export const getCompanyJobApplications = async(req,res)=>{
}

//get company posted jobs
export const getCompanyPostedJobs = async(req,res)=>{

}

//change job application status
export const changeJobApplicationStatus = async(req,res)=>{

}
//change job visibility
export const changeJobVisibility = async(req,res)=>{

}
