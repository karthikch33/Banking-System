import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        default:'',
        // required:true
    },
    lastname:{
        type:String,
        default:'',
        // required:true
    },
    email:{
        type:String,
        default:'',
        // required:true
    },
    phone:{
        type:Array,
        default:'',
        // required:true
    },
    username:{
        type:String,
        // required:true,
        default:''
    },
    accountno:{
        type:Number,
        // required:true,
        default:''
    },
    password:{
        type:String,
        // required:true,
        default:''
    },
    tokenxchange:{
        type:String,
        default:""
    },
    balance:{
        type:Number,
        default:0,
    },
    fixedDeposits:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"FDS"
        }
    ],
    ifscCode:{
        type:String,
        default:"ADI1698212004"
    },
    accountBlocked:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:"Customer"
    },
    aadharNo:{
        type:String,
        default:"XXXXXXXXXX",
    },
    panNo:{
        type:String,
        default:"XXXXXXXX"
    },
    address:[
        {
            country:{
                type:String,
                default:"India"
            },
            state:{
                type:String,
                default:"Andhra Pradesh"
            },
            city:{
                type:String,
                default:"Tenali"
            },
            pincode:{
                type:Number,
                default:522306
            },
            street:{
                type:String,
                default:"Market Road"
            },
            houseNo:{
                type:String,
                default:"6-90"
            }
        }
    ],
    branch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Branch",
        default:""
    },

    passwordChangedDate:Date,
    passwordResetToken:String,
    passwordResetExpires:Date
},{timestamps:true})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){next()}

    const saltRounds = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password,saltRounds)
}) 

userSchema.methods.isPasswordsMatched = async function(enteredpassword){
    return await bcrypt.compare(enteredpassword,this.password)
}

userSchema.methods.generateOTP = async function(){
    const randomsix = Math.random()
}

const User = mongoose.model('User',userSchema)

export default User