const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate"); 

require('../db/conn');
const User = require('../model/userSchema');


router.post('/userprofile', async (req, res) => {

    const { name, email, password, cpassword } = req.body;

    if( !name || !email || !password || !cpassword ) {
        return res.status(422).json( { error : "Please filled all required fields." });
    }

    try {
    const userExist = await User.findOne({ email: email });

    if(userExist) {
        return res.status(422).json({ error: "Email already Exists." });
        }  
        
        const user = new User({ name, email, password, cpassword });
        await user.save();
        res.status(201).json({ message: "User registered successfully."});  
    } catch(err) {
        console.log(err);
    }
});


//Signin

router.post('/signin', async (req, res) => {

    try{

    const { email, password } = req.body;

    if( !email || !password ) {
        res.status(400).json({ error: "Please enter all requied fields." });
        }
        
        const userLogin = await User.findOne({ email : email });

        if(userLogin) {
            
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);
            
            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 2589000000 ),
                httpOnly:true
            });

            if(!isMatch) {
                res.status(400).json({ error: "Invalid credentials pass" });
            }else{
                res.json({ message: "User Signin successfully." });
         }
    
     }else {

        res.status(400).json({ error: "Invalid credentials" });
     }

        
    } catch (err) {
        console.log(err);
    }
});

//UserProfile ka page

 router.get('/userProfile', authenticate, (req, res) => {
     res.send(req.rootUser);
 });

 //Logout ka page

 router.get('/logout',  (req, res) => {
     res.clearCookie('jwtoken', { path: '/'});
    res.status(200).send("User Logout");
});



module.exports = router;