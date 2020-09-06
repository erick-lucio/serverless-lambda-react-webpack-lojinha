import React, { useContext ,useState} from "react";
import {
  Container,
  ProductDiv,
  TextDiv,
  Text,
  Button,
  Image,
  Button2,
  Image2,
} from "./styles";
import { useParams } from "react-router";
import addCart from "../../assets/icons/icons8-add-shopping-cart-64.png";
import { context1 } from "../../Context";
const Product = (props) => {
  const { stateCounter, dispatchCounter, stateCart, dispatchCart } = useContext(
    context1
  );
  const {product ,setProduct}=useState()
  function genId() {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 35);
  }
  function getProduct() {
    let {id} = useParams()    
    return fetch("/.netlify/functions/read-product?id="+id).then((response) => {
      return response.json().then((json) => {
        return json;
      });
    });
  }
  
  const addToCart = () => {
    dispatchCounter({ type: "increment" });
    dispatchCart({
      type: "CartAdd",
      product_name: props.location.state.name,
      product_price: props.location.state.price,
      img_path: props.location.state.imgPath,
      id: genId(),
    });
  };
  
  if(props.location.state.name){
    return (
      <Container>
        <ProductDiv>
          <Image src={props.location.state.imgPath}></Image>
          <TextDiv>
            <Text fontsize={3}>{props.location.state.name}</Text>
            <Text fontsize={2.5} margintop={30}>
              Por apenas {props.location.state.price} reais
            </Text>
            <Text fontsize={2.5} margintop={50}>
              Perfeito para todas as ocasiões
            </Text>
            <Button2 onClick={() => addToCart()}>
              <Image2 src={addCart}></Image2>
              <Text fontsize={1.5}>Adicione ja ao Carrinho</Text>
            </Button2>
          </TextDiv>
        </ProductDiv>
      </Container>
    );
  }else{
    getProduct()
      .then((response)=>{
        import("../../assets/imgs/" + response.data.img_name)
          .then((img)=>{
            setProduct({
              name:response.data.name,
              price:response.data.price,      
              img_path:img.default
            })
          })

        console.log(response)
      })
    return (
      <Container>
        <ProductDiv>
          <Image src={product.img_path}></Image>
          <TextDiv>
            <Text fontsize={3}>{product.name}</Text>
            <Text fontsize={2.5} margintop={30}>
              Por apenas  {product.price} reais
            </Text>
            <Text fontsize={2.5} margintop={50}>
              Perfeito para todas as ocasiões
            </Text>
            <Button2 onClick={() => addToCart()}>
              <Image2 src={addCart}></Image2>
              <Text fontsize={1.5}>Adicione ja ao Carrinho</Text>
            </Button2>
          </TextDiv>
        </ProductDiv>
      </Container>
    );
  }

};

export default Product;
