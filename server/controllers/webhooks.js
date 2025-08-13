import { Webhook } from "svix";
import User from "../models/User.js";

//API Controller function to manage clerk user with database

export const clerkWebhooks = async (req, res)=>{
    try {
        //create a svix instance with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        //verifity error

        await whook.verify(JSON.stringify(req.body),{
            "svix-id": req.headers['svix-id'],
            "svix-timestamp": req.headers['svix-timestamp'],
            "svix-signature": req.headers['svix-signature']
        })
        // getting data from request body

        const { data, type} = req.body

        //switch cases for diffrent events
        switch (type) {
            case "user.created":{
                const userData = {
                    _id:data.id,
                    email:data.email_address[0].email_address,
                    name:data.first_name + " " + data.last_name,
                    image:data.image_url,
                    resume: ''
                }
                await User.create(userData)
                res.json({})
                break;
            }
            case "user.updated":{
                const userData = {
                    email:data.email_address[0].email_address,
                    name:data.first_name + " " + data.last_name,
                    image:data.image_url,
                }
                await User.findByIdAndUpdate(data.id, userData)
                res.json({})
                break;
            }
            case "user.deleted":{
                await User.findByIdAndDelete(data.id)
                res.json({})
                break;
            }
            default:
                // handle unknown event
                break;
        }
    } catch (error) {
        console.log(error.message);
        res.json({success:false, message: "Webhooks"})

    }
}