
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import './config/instrument.js'

//Initialize express 
const app = express()

//Middleware
app.use(cors())
app.use(express.json())

//Routes
app.get('/',(req,res)=> res.send("API Working"))

//Port
const PORT = process.env.PORT || 5000

// Wrap database connection and server start in async function
const startServer = async () => {
    try {
        //connect to database
        await connectDB()
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.error('Failed to start server:', error)
        process.exit(1)
    }
}

startServer()
// 