import mongoose from "mongoose"

const ATLAS_USER = process.env.ATLAS_USER
const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD
const ATLAS_DATABASE_NAME = process.env.ATLAS_DATABASE_NAME

// Url to mongodb server, as generated from connections on mongodb Atlas
const url = `mongodb+srv://${
    ATLAS_USER
}:${
    ATLAS_PASSWORD
}@default-lk5ad.mongodb.net/${
    ATLAS_DATABASE_NAME
}?retryWrites=true&w=majority`

// Connect to server using mongoose
mongoose.connect(url,{ useNewUrlParser: true })
mongoose.connection.once("open", () => {
    console.log(`Connected to mongo database at ${url}`)
})