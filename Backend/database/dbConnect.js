import mongoose from "mongoose";

const mongourl = 'mongodb+srv://Aditya:Karthik@cluster0.9dikzni.mongodb.net/BankingSystem?retryWrites=true&w=majority'

const connection= async()=>{
    try {
       const connect = await mongoose.connect(mongourl)
       return connect
    } catch (error) {
        return res.json({
            status:500,
            message:"Database Connection Failed"
        })
    }
}

export default connection