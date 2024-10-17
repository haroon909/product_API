//@method Get
//http://localhost:5000/
const Get_Product_view = (req, res) => {
  return res.render("Products");
};
//@method Post
//http://localhost:5000/
const Post_Product_view = (req, res) => {
    const {Product_Name, Product_Desc, Product_Price, Product_Cat} = req.body;
    const Validator_Name = /^[A-Za-z]{3,}$/;
    const Validator_desc = /^(?=.*[A-Za-z]{3,})([A-Za-z0-9\s\W]{1,})(?<=\b(?:\S+\b\s*){0,100})$/;
const Validator_price = // ;
  return res.render("Products");
};

module.exports = { Get_Product_view, Post_Product_view };
