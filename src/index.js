import connect from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})

connect()