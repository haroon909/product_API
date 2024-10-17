//@method Get
//http://localhost:5000/
const Get_Product_view = (req, res) => {
  return res.render("Products");
};
//@method Post
//http://localhost:5000/
const Post_Product_view = (req, res) => {
  const { Product_Name, Product_Desc, Product_Price, Product_Cata } = req.body;
  const Validator_name = /^(?=.{1,})[A-Za-z]+(_[A-Za-z]+)*$/;
  const Validator_desc =
    /^(?=.{1,})(?=.*[A-Za-z]{3,})([A-Za-z0-9\s\W]{1,})(?<=\b(?:\S+\b\s*){0,100})$/;
  const Validator_price = /^(?=.{1,})\$[0-9]{1,6}$/;
  const Validator_cata = /^(?=.{1,})[A-Za-z]+(_[A-Za-z]+)*$/;

  const Validated_name = Validator_name.test(Product_Name);
  const Validated_decs = Validator_desc.test(Product_Desc);
  const Validated_price = Validator_price.test(Product_Price);
  const Validated_cata = Validator_cata.test(Product_Cata);

  if(Validated_name == true){

  }else{
    
  }
  
  return res.render("Products");
};

module.exports = { Get_Product_view, Post_Product_view };
