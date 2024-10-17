const Express = require('express');
const app = Express();
const dotenv = require("dotenv").config();
app.set('view engine','ejs');
app.use(Express.json());






app.listen(process.env.Port, function(){
    console.log(`Server is running On Port: ${process.env.Port}`)
})