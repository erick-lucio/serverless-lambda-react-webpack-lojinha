import React, { useEffect, useContext } from "react";

import { Container, Text, ItensDiv, Button, ImgPlace } from "./styles";
import removeIcon from "../../assets/icons/icons8-remove-64.png";
import { context1 } from "../../Context";
import { useHistory } from "react-router-dom";
const Cart = () => {
  const {
    stateCounter,
    dispatchCounter,
    stateCart,
    dispatchCart,
    stateProducts,
    dispatchProducts,
  } = useContext(context1);
  let history = useHistory();
  useEffect(() => {}, []);
  useEffect(() => {}, [stateCart]);
  const removeProduct = (ref_id) => {
    //P evitar bug no filter usar um id q n se repete
    dispatchCounter({ type: "decrement" });
    dispatchCart({ type: "CartRemove", id: ref_id });
    // console.log(productName+" Removido do carrinho")
  };
  const completePurchase = (cartArray) => {
    cartArray.forEach((element) => {
      element.date = Date.now();
      fetch("/.netlify/functions/insert-new-purchase", {
        body: JSON.stringify(element),
        method: "POST",
      }).then((response) => {
        return response.json().then((json) => {
          return json;
        });
      });
    });

    dispatchCounter({ type: "set", count: 0 });
    dispatchCart({ type: "Clear" });
    alert("Parabens Compra finalizada com sucesso");
    history.push("/");
  };
  return (
    <Container>
      {stateCart.cart_products.length == 0 ? (
        <Text fontsize={4}>Carrinho Vazio</Text>
      ) : (
        <>
          <Text fontsize={4}>Produtos no Carrinho</Text>
          {stateCart.cart_products.map((cart_obj, key) => {
            return (
              <ItensDiv key={key}>
                <ImgPlace
                  src={cart_obj.img_path}
                  height={120}
                  borderRadius={"5px"}
                ></ImgPlace>
                <Text fontsize={2}>{cart_obj.name}</Text>
                <ImgPlace
                  src={removeIcon}
                  height={50}
                  width={"auto"}
                  cursor={"pointer"}
                  onClick={() => removeProduct(cart_obj.ref_id)}
                ></ImgPlace>
              </ItensDiv>
            );
          })}
          <Button onClick={() => completePurchase(stateCart.cart_products)}>
            <Text fontsize={2}>Finalizar Compra</Text>
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
