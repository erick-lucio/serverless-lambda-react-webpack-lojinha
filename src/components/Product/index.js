import React, { useContext } from "react";

import {Container, ProductDiv,TextDiv, Text, Button ,Image ,Button2,Image2} from './styles';
import imf from '../../assets/imgs/img_product (1).jpeg'
import addCart from '../../assets/icons/icons8-add-shopping-cart-64.png'
import { context1 } from "../../Context";
const Product = (props) => {
  const { stateCounter, dispatchCounter } = useContext(context1);
  const { stateCart, dispatchCart } = useContext(context1);
  
  const addToCart = () => {
    dispatchCounter({ type: "increment" });
    dispatchCart({
      type: "CartAdd",
      product_name: props.location.state.name,
      product_price: props.location.state.price,
      img_path: props.location.state.imgPath,
      id: props.location.state.refId,
    });
  };
  return (
    <Container>
      <ProductDiv>
        <Image src={props.location.state.imgPath}></Image>
        <TextDiv>
          <Text fontsize={3} >{props.location.state.name}</Text>
          <Text fontsize={2.5}margintop={30}>Por apenas {props.location.state.price} reais</Text>          
          <Text fontsize={2.5}margintop={50}>Perfeito para todas as ocasiões</Text>
          <Button2 onClick={()=>addToCart()}><Image2 src={addCart} ></Image2><Text fontsize={1.5}>Adicione ja ao Carrinho</Text></Button2>
          
        </TextDiv>

      </ProductDiv>
      

    </Container>
  );
};

export default Product;
