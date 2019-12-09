// Sends all available posts

const router = require('express').Router();
const verify = require('../verifyToken');
const User = require("../models/User");

router.get('/', verify ,(req,res)=>{
    console.log(res.locals.user);
    res.send('All posts will be sent here');
})

router.post('/test', (req,res)=>{
    console.log(req.body);
    res.redirect('http://localhost:3000/home')
})

router.post('/update', async (req,res)=>{
    const user = await User.findOne({ username: req.body.username });
    const save = await user.updateOne({username: 'jhaisem'})
    res.status(200).send('Success')
})
module.exports = router;