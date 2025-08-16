import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import './config/instrument.js'
import * as Sentry from "@sentry/node"
import { clerkWebhooks } from './controllers/webhooks.js'
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js'

//Initialize express 
const app = express()

//Connect to database
await connectDB()
await connectCloudinary()

//Middleware
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req, res) => res.send("API Working"))
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
})

app.post("/webhooks", clerkWebhooks)
app.use('/api/company', companyRoutes)


//Port
const PORT = process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);

// Wrap database connection and server start in async function
const startServer = async () => {
    try {
        //connect to database
        console.log('Attempting to connect to database...')
        await connectDB()
        console.log('Database connected successfully!')

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
            console.log(`API endpoint: http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error('Database connection failed:', error.message)
        console.log('Starting server without database connection for testing...')

        // Start server anyway for testing API endpoints
        app.listen(PORT, () => {
            console.log(`⚠️  Server is running on port ${PORT} WITHOUT database connection`)
            console.log(`API endpoint: http://localhost:${PORT}`)
            console.log('Please fix MongoDB Atlas IP whitelist to enable database features')
        })
    }
}

startServer()
// 