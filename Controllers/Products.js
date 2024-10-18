//@method Get

const { json } = require("express");

//http://localhost:5000/
const Get_Product_view = (req, res) => {
    return res.render("Products");
  };
  //@method Post
  //http://localhost:5000/
  async function Post_Product_view  (req, res)  {
  
    const { Product_Name, Product_Desc, Product_Price, Product_Cata } = req.body;
    const Validator_name = /^(?=.{3,})[A-Za-z]+(_[A-Za-z]+)*$/;
    const Validator_desc = /^(?=.{3,100}$)(?=.*[A-Za-z])[A-Za-z0-9\s\W]*$/; 
    const Validator_price = /^(?=.{1,})\$[0-9]{1,6}$/;
    const Validator_cata = /^(?=.{1,})[A-Za-z]+(_[A-Za-z]+)*$/;
  
    const Validated_name = Validator_name.test(Product_Name);
    const Validated_desc = Validator_desc.test(Product_Desc);
    const Validated_price = Validator_price.test(Product_Price);
    const Validated_cata = Validator_cata.test(Product_Cata);
  
    if (Validated_name == true) {
      if (Validated_desc == true) {
        if (Validated_price == true) {
          if (Validated_cata == true) {
            const New_Product = {
              Product_Name: Product_Name,
              Product_Desc: Product_Desc,
              Product_Price: Product_Price,
              Product_Cata: Product_Cata,
            };
            const response = await fetch(
                "https://66f1178a41537919154f7ad2.mockapi.io/React_test/products",
                {
                  headers: { "Content-Type": "application/json" },
                  method: "POST",
                  body: JSON.stringify(New_Product),
                }
              );
              return res.status(200).send(`Product Added Successfully: ${JSON.stringify(New_Product)}`)

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
          `Product description cannot be null or empty. It must contain at least 3 characters, including at least one letter, and can include numbers and special characters. The total length cannot exceed 100 characters.`
        );
      }
    } else {
      return res.send(
        `Product name cannot be null or empty, product name must contain only letters and underscores ('_') only for spacing, with no numbers or special characters, and must be at least 3 characters long.`
      );
    }
  
   
  };
  
  module.exports = { Get_Product_view, Post_Product_view };