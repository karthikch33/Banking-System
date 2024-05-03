import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import User from '../models/UserModel.js'

export const userCreation = asyncHandler(async(req,res)=>{
    try {
        console.log(req.body);
        const {firstname,lastname,username,email,phone1,phone2,aadharNo,panNo,country1,country2,state1,state2,city1,city2,pincode1,pincode2,street1,street2,houseNo1,houseNo2} = req.body
        const saltsRounds = await bcrypt.genSaltSync(10)
        const secureaadharNo = await bcrypt.hash(aadharNo,saltsRounds)
        const securepanNo = await bcrypt.hash(panNo,saltsRounds)
        const phonecombo = []
        phonecombo.push(phone1)
        phonecombo.push(phone2)

        const userModifiedDetails = {}
        const userDetails = await User.create(userModifiedDetails)
        if(userDetails){
            res.status(201).json({
                message:"User Created",
                status:201
            })
        }
        else{
            res.status(500).json({
                message:"User Creation Failed",
                status:500
            })
        }
    } catch (error) {
        console.log(error);
    }
})