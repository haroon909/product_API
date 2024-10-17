//@method Get
//http://localhost:5000/
const Get_Product_view = (req, res) => {
  return res.render("Products");
};
//@method Post
//http://localhost:5000/
const Post_Product_view = (req, res) => {
  return res.render("Products");
};

module.exports = { Get_Product_view, Post_Product_view };
