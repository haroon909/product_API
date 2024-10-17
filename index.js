const Express = require('express');
const app = Express();
const dotenv = require("dotenv").config();
app.set('view engine','ejs');
app.use(Express.json());
const {Product_view}=require('./Controllers/Products');
app.route("/").get(GetUser_Reg).post(PostUser_Reg);





app.listen(process.env.Port, function(){
    console.log(`Server is running On Port: ${process.env.Port}`)
})