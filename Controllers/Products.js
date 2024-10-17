//@method Get
//http://localhost:5000/
const Get_Product_view = (req, res) => {
    return res.render("Products");
  };
  //@method Post
  //http://localhost:5000/
  const Post_Product_view = (req, res) => {
    if (!Array.isArray(req.body) || req.body.length === 0) {
        return res.status(400).send("Request body must be a non-empty array.");
      }
    const { Product_Name, Product_Desc, Product_Price, Product_Cata } = req.body;
    const Validator_name = /^(?=.{3,})[A-Za-z]+(_[A-Za-z]+)*$/;
    const Validator_desc =
      /^(?=.{3,})(?=.*[A-Za-z])([A-Za-z0-9\s\W]{1,})(?<=\b(?:\S+\b\s*){0,100})$/;
    const Validator_price = /^(?=.{1,})\$[0-9]{1,6}$/;
    const Validator_cata = /^(?=.{1,})[A-Za-z]+(_[A-Za-z]+)*$/;
  
    const Validated_name = Validator_name.test(Product_Name);
    const Validated_decs = Validator_desc.test(Product_Desc);
    const Validated_price = Validator_price.test(Product_Price);
    const Validated_cata = Validator_cata.test(Product_Cata);
  
    if (Validated_name == true) {
      if (Validated_decs == true) {
        if (Validated_price == true) {
          if (Validated_cata == true) {
            const New_Product = {
              Product_Name: Product_Name,
              Product_Desc: Product_Desc,
              Product_Price: Product_Price,
              Product_Cata: Product_Cata,
            };
            console.log(New_Product);
          } else {
            return res.send(
             ` Product category cannot be null or empty. Product category must contain only letters and underscores ('_') only for spacing, with no numbers or special characters, and must be at least 3 characters long.`
            );
          }
        } else {
          return res.send(
            `Product price cannot be null or empty. Product price must start with '$' and be a whole number between 1 and 6 digits, without spaces or special characters.`
          );
        }
      } else {
        return res.send(
          `Product description cannot be null or empty, product description must contain at least 3 letters, can include numbers and special characters, and cannot exceed 100 words.`
        );
      }
    } else {
      return res.send(
        `Product name cannot be null or empty, product name must contain only letters and underscores ('_') only for spacing, with no numbers or special characters, and must be at least 3 characters long.`
      );
    }
  
    return res.render("Products");
  };
  
  module.exports = { Get_Product_view, Post_Product_view };