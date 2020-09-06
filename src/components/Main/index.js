import React, { useEffect, useState, useReducer, useContext } from "react";
import { Container, ProductDiv, Text, Button ,Image} from "./styles";
import {useHistory } from "react-router-dom"
import shopCart from "../../assets/icons/icons8-add-shopping-cart-64.png";
import { context1 } from "../../Context";

const Main = () => {
  const { productImg, setProductImg } = useState([]);
  const { stateCounter, dispatchCounter } = useContext(context1);
  const { stateProducts, dispatchProducts } = useContext(context1);
  const { stateCart, dispatchCart } = useContext(context1);
  let history = useHistory();
  function getAllProducts() {
    return fetch("/.netlify/functions/read-all-products").then((response) => {
      return response.json().then((json) => {
        return json;
      });
    });
  }
  function getAllPurchases() {
    return fetch("/.netlify/functions/read-all-purchases").then((response) => {
      return response.json().then((json) => {
        return json;
      });
    });
  }


  useEffect(() => {
    //Da um get  e pega o id de produtos e o joga pro reducer
    dispatchProducts({ type: "Clear" });
    getAllProducts().then((response) => {
      response.forEach((element) => {
        import("../../assets/imgs/" + element.data.img_name).then(
          (importResponse) => {
            dispatchProducts({
              type: "ProductSet",
              product_name: element.data.product_name,
              product_price: element.data.price,
              img_path: importResponse.default,
              id: element.ref["@ref"].id,
            });
          }
        );
      });
    });

    getAllPurchases().then((response) => {
      //console.log(response)
    });
  }, []);

  const addToCart = (name, imgPath, price, refId) => {
    dispatchCounter({ type: "increment" });
    dispatchCart({
      type: "CartAdd",
      product_name: name,
      product_price: price,
      img_path: imgPath,
      id: refId,
    });
  };
  function genId(){
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 35)
  }
  function redirect(){
    history.push({pathname:'/cart',state:{detail:"opa meu vei"}})
  }
  return (
    <Container>  
     
      {stateProducts.objects_products.map((obj, key) => {
        return (
          <ProductDiv key={key} onClick={()=>redirect()}>
            <Image src={obj.img_path} ></Image>
            <Text
              fontsize={2}
              style={{
                marginTop: 10,
                overflowWrap: "anywhere",
                textAlign: "center",
                height: "40%",
              }}
            >
              {obj.name}
            </Text>
            <Text
              fontsize={1.5}
              style={{
                marginTop: 10,
                alignSelf: "flex-start",
                paddingLeft: "20px",
                color: "#373040",
                height: "10%",
              }}
            >
              R$:{obj.price}
            </Text>
            <Button
              onClick={() =>
                addToCart(obj.name, obj.img_path, obj.price,genId())
              }
              style={{ marginButtom: "0", height: "auto" }}
            >
              <Text fontsize={1.5}>
                <img
                  src={shopCart}
                  style={{ height: 60, width: "auto", cursor: "pointer" }}
                ></img>
              </Text>
            </Button>
          </ProductDiv>
        );
      })}
    </Container>
  );
};

export default Main;
