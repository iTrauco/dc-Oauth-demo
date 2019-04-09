// 1. Bring in 'dotenv'
require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const session = require('express-session');

//10:43:35
const setupAuth = require('./auth');


//10:34:00; approx
const FileStore = require('session-file-store')(session);

// const S3KRET = require('./config');

// tell express to use the session modules
app.use(session({
    store: new FileStore(),  // no options for now
    secret: process.env.SESSION_SECRET
}));
//10:44:26 Only after we have sessions setup with express is it okay to attach the passport authentification
setupAuth(app);

//09:52:18
app.get('/', (req, res) => {
    res.send(`<h1> Hello there </h1>`);
});
//09:50:50
app.listen(3000, () => {
    console.log(`You're running on port ${PORT}`);
})
