const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(cookieParser());
app.use(cors());


dotenv.config({ path: './.env' });
require('./db/conn');

app.use(express.json());

// Link the router file to make route easy
app.use(require('./router/auth'));


const PORT = process.env.PORT || 3001;

//Heroku

if(process.env.Node_ENV = "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(3001, () => {
    console.log(`Server is runing at port ${PORT}`);
});
