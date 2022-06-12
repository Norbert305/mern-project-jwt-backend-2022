const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userSchema')

//@desc register new user
//@route post /api/users
//@access public
const registerUser = asyncHandler (async(req,res) => {

        const {name, email, password } = req.body

        if (!name || !email || !password) {
            res.status(400)
            throw new Error('Please add all fields')
        }

        //Check if user exists
        const userExists = await User.findOne({email})

        if(userExists) {
            res.status(400)
            throw new Error('User already exists')
        }

        //Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //Create user
        const user = await User.create({
            name,
            email,
            password : hashedPassword
        })

        if(user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email
            })
        }
        else {
            res.status(400)
            throw new Error('Invalid user data')
        }
})

//@desc authenticate a user
//@route post /api/users/login
//@access public
const loginUser =  asyncHandler (async(req,res) => {
    res.json({message: 'login user'})
})

//@desc get user data
//@route post /api/users/me
//@access public
const getUser =  asyncHandler (async(req,res) => {
    res.json({message: 'user display data'})
})


module.exports = {
    registerUser,
    loginUser,
    getUser

}