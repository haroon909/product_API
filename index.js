const Express = require("express");
const app = Express();
const dotenv = require("dotenv").config();
app.set("view engine", "ejs");
app.use(Express.json());

const {
  Get_Product_view,
  Post_Product_view,
  Get_All_Products,
} = require("./Controllers/Products");
app.route("/").get(Get_Product_view).post(Post_Product_view);
app.route("/all_products").get(Get_All_Products);

app.listen(process.env.Port, function () {
  console.log(`Server is running On Port: ${process.env.Port}`);
});
