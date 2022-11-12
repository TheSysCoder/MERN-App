// Entry point of node js REST api
// import all required modules here

import express, { json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
// configure dotenv
dotenv.config({
    path: "./config.env"
})

// import routes
import workoutsRoutes from './routes/workouts.routes.js'

// create express app
const app = express()
const PORT = process.env.PORT || 3001

// setup morgan dev
app.use(morgan('dev'))
// use json middleware
app.use(json())
// add CORS
app.use(cors({
    origin: "*",
    methods: ["GET", "DELETE", "PUT", "POST", "PATCH"]
}))

// call routes
app.use("/api/workouts", workoutsRoutes)

// listen app
app.listen(PORT, (err) => {
    if (err) {
        console.error("Opps!! something is wrong, server is not starting");
        process.exit()
    } else {
        console.log(`Awesome! our express app is started on http://localhost:${PORT}`);
    }
})