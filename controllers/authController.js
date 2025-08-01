const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const authController =
{
    register: async (req, res) => {               
        try {
            const { name, email, password } = req.body;

            const existingUser = User.find({ email });

            if (existingUser.length > 0) {
                return res.status(400).json({ message: 'user already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new User({
                name,
                email,
                password: hashedPassword
            });

            await user.save();

            res.status(201).json({ message: 'user registered successfully' });
        }
        catch (err) {
            res.status(500).json({ message: err.message })
        }

    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: 'user not found' });
            }
            const isPasswordValid = await bcrypt.compare(password, user.password)
            if(!isPasswordValid){
                return res.status(400).json({message:'invalid credentials'});
            }
            // res.status(200).json({message:'login successful'});

            const token =  jwt.sign({id:user._id},JWT_SECRET ,{expiresIn:'2h'});

            res.status(200).json({message:'user logged in successfully',token:token})
        }
        catch (err) {

            res.status(500).json({ message: err.message })
        }
    },
    me: async(req ,res)=>{
        try{
            const userId = req.userId;
            const user = await User.findById(userId);
            
            if(!user){
                return res.status(404).json({message:'User Not Found'})
            }

            res.status(200).json({
                user:{
                    id:user._id,
                    name:user.name,
                    email:user.email
                }
            })


        }catch(err){
            res.status(500).json({message:'Internal Server Error'})
        }

    }

}

module.exports = authController;