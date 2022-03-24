// Configure environment variables from .env file ahead of any function
import dotenv from "dotenv"
dotenv.config({ path: "./config/.env" })

// express
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

// square
import { Client, Environment } from "square"

// square client configuration
const client = new Client({
    environment: Environment.Sandbox,
    accessToken: process.env.SQUARE_ACCESS_TOKEN
})

// express server configuration
const app = express()
app.use(cors())

app.post("/", bodyParser.json(), (req, res) => {
    console.log(req.body)
    res.send("Hello World!")
})

const PORT = 3000
app.listen({ port: PORT }, () => {
    console.log(`Server listening on port ${PORT}`)
})