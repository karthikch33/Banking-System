import express from 'express'
import cors from 'cors'
import connection from './database/dbConnect.js'
import morgan from 'morgan'
import userrouter from './routes/UserRouter.js'
import {notfound, error} from './middlewares/errorHandlers.js'

const app = express()
const PORT = 1698

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/welcome',(req,res)=>{
    console.log("Welcome");
})


app.use('/api/user',userrouter)


app.use(notfound)
app.use(error)

connection()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is Running on ${PORT}`);
    })
    console.log("DB Connection Successfull")
})
.catch(e=>console.log("DB Connection Lost"))