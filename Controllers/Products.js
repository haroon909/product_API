//@method Get
//http://localhost:5000/
const Get_Product_view = (req, res) => {
    return res.render("Products");
  };
  
  //@method Post
  //http://localhost:5000/
  const Post_Product_view = (req, res) => {
    const { Product_Name, Product_Desc, Product_Price, Product_Cata } = req.body;
  
    const Validator_name = /^(?=.{3,})[A-Za-z]+(_[A-Za-z]+)*$/; 
    const Validator_desc = /^(?=.{3,})(?=.*[A-Za-z])([A-Za-z0-9\s\W]{3,100})$/; 
    const Validator_price = /^\$[0-9]{1,6}$/;  // Corrected regex
    const Validator_cata = /^(?=.{3,})[A-Za-z]+(_[A-Za-z]+)*$/; 
  
    const Validated_name = Validator_name.test(Product_Name);
    const Validated_desc = Validator_desc.test(Product_Desc);
    const Validated_price = Validator_price.test(Product_Price);
    const Validated_cata = Validator_cata.test(Product_Cata);
  
    // Debugging logs
    console.log(`Validated Name: ${Validated_name}`);
    console.log(`Validated Desc: ${Validated_desc}`);
    console.log(`Validated Price: ${Validated_price}`);
    console.log(`Validated Cata: ${Validated_cata}`);
  
    if (Validated_name == false) {
      return res.status(400).send(
        "Product name cannot be null or empty. It must contain only letters and underscores ('_') for spacing, with no numbers or special characters, and must be at least 3 characters long."
      );
    }
  
    if (Validated_desc == false) {
      return res.status(400).send(
        "Product description cannot be null or empty. It must contain at least 3 letters, can include numbers and special characters, and cannot exceed 100 words."
      );
    }
  
    if (Validated_price == false) {
      return res.status(400).send(
        "Product price cannot be null or empty. It must start with '$' and be a whole number between 1 and 6 digits, without spaces or special characters."
      );
    }
  
    if (Validated_cata == false) {
      return res.status(400).send(
        "Product category cannot be null or empty. It must contain only letters and underscores ('_') for spacing, with no numbers or special characters, and must be at least 3 characters long."
      );
    }
  
    const New_Product = {
      Product_Name,
      Product_Desc,
      Product_Price,
      Product_Cata,
    };
  
    console.log(New_Product);
    return res.render("Products");
  };
  
  module.exports = { Get_Product_view, Post_Product_view };
  