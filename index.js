// 1. Bring in 'dotenv'
require('dotenv').config();

const PORT = process.env.PORT;
 
// constGithubStrategy = require('passport-github').Strategy;

const express = require('express');
const app = express();

//09:52:18
app.get('/', (req, res) => {
    res.send(`<h1> Hello there </h1>`);
});
//09:50:50
app.listen(3000, () => {
    console.log(`You're running on port ${PORT}`);
})
