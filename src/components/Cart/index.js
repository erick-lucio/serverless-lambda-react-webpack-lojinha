import React, { useEffect, useState, useReducer, useContext } from "react";

import { Container, Text, ItensDiv, Button } from "./styles";
import dressImg from "../../assets/imgs/img_dress.jpeg";
import removeIcon from "../../assets/icons/icons8-remove-64.png";
import { context1 } from "../../Context";

const Cart = () => {
  const { stateCounter, dispatchCounter } = useContext(context1);
  const { stateProducts, dispatchProducts } = useContext(context1);
  const { stateCart, dispatchCart } = useContext(context1);
  useEffect(() => {}, []);
  useEffect(() => {}, [stateCart]);
  const removeProduct = (ref_id) => {
    //P evitar bug no filter usar um id q n se repete
    dispatchCounter({ type: "decrement" });
    dispatchCart({ type: "CartRemove", id: ref_id });
    // console.log(productName+" Removido do carrinho")
  };
  const completePurchase = (cartArray) => {
    console.log(cartArray);
    fetch("/.netlify/functions/insert-new-purchase", {
      body: JSON.stringify(cartArray),
      method: "POST",
    }).then((response) => {
      return response.json().then((json) => {
        return json;
      });
    });
    dispatchCart({ type: "Clear" });
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
                <img
                  src={cart_obj.img_path}
                  style={{ height: 120, width: "auto" }}
                ></img>
                <Text fontsize={2}>
                  {cart_obj.name}
                  {cart_obj.ref_id}
                </Text>
                <img
                  src={removeIcon}
                  style={{ height: 50, width: "auto", cursor: "pointer" }}
                  onClick={() => removeProduct(cart_obj.ref_id)}
                ></img>
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
