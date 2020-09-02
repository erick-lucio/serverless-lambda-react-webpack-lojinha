import React,{useEffect,useState,useReducer,useContext} from 'react';

import { Container ,Text,ItensDiv,Button} from './styles';
import dressImg from '../../assets/imgs/pink-dress.jpg'
import removeIcon from '../../assets/icons/icons8-remove-64.png'
import {context1} from '../../Context'

const Cart = () => {
  const {stateCounter,dispatchCounter}=useContext(context1)
  const {stateProducts, dispatchProducts}=useContext(context1)
  const {stateCart, dispatchCart}=useContext(context1)
  useEffect(()=>{


  },[])
  useEffect(()=>{


  },[stateCart])
  const removeProduct = (productName) =>{
    dispatchCounter({type: 'decrement'})
    dispatchCart({type: 'CartRemove',product_name:productName})
    alert(productName+" Removido do carrinho")
  }
  return (
    <Container>
      
      <Text fontsize={4}>Produtos no Carrinho</Text>
      {stateCart.cart_products.map((cart_obj,key)=>{
        return(
          <ItensDiv key={key}>
            <img src={dressImg} style={{height: 120,width: "auto"}}></img>
            <Text fontsize={2}>{cart_obj.name}</Text>
            <img src={removeIcon} style={{height: 50,width: "auto",cursor:"pointer"}} onClick={()=>removeProduct(cart_obj.name)}></img>

          </ItensDiv>
        )
      })}
      <Button onClick={()=>alert("Compra Finalizada")}>
        <Text fontsize={2}>Finalizar Compra</Text>
      </Button>
    </Container>
  );
};

export default Cart;
