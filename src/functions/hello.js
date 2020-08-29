exports.handler = async event => {
  require("../database");
  const Products = require("../models/Products");
  const fs = require("fs");
  const path = require("path")
  const subject = event.queryStringParameters.name || 'World'
  const imgName = await Products.findAll({})
  var image = fs.readFileSync(path.resolve(__dirname, "..", "imgs", "img1.jpg"));
  return {
    statusCode: 200,  
    headers: 
    {
      "Content-Type": "image/jpg"
    },
      body: image.toString("base64"),
      isBase64Encoded: true
    };
}

