import mongoose from "mongoose";

const fdSchema = mongoose.Schema({
    fdname:{
        type:String,
        default:"",
        required:true
    },
    fdStart:{
        type:Date,
        default: new Date(),
    },
    fdEnd:{
        type:Date,
        default: new Date()
    },
    interest:{
        type:Number,
        default:4
    },
    money:{
        type:Number,
        default:0
    },
    balanceAfterClose:{
        type:Number,
        default:0
    }
})

const FDS = mongoose.model('FDS',fdSchema)

export default FDS