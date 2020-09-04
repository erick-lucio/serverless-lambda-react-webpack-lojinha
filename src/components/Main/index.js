import React,{useEffect,useState,useReducer,useContext} from 'react';
import { Container,ProductDiv,Text,Button } from './styles';
import dressImg from '../../assets/imgs/pink-dress.jpg'
import shopCart from '../../assets/icons/icons8-add-shopping-cart-64.png'
import {context1} from '../../Context'
import fetchFunctions from '../../utils/api'

const Main = () => {
  const {stateCounter,dispatchCounter}=useContext(context1)
  const {stateProducts, dispatchProducts}=useContext(context1)
  const {stateCart, dispatchCart}=useContext(context1)

  function readAllProducts(){
    return new Promise(resolve =>{
      resolve(fetch('/.netlify/functions/read-all-products'))
    }) 
  }
  
  const array = [{name:"erick",cep:"mateuzim"},{name:"marcao",cep:"mateuzim"},{name:"lucqaas",cep:"mateuzim"},{name:"cavalo",cep:"mateuzim"},{name:"alan",cep:"mateuzim"},{name:"adam",cep:"mateuzim"},{name:"camaluto",cep:"mateuzim"},
  {name:"elsnru",cep:"mateuzim"},{name:"oipaeu",cep:"mateuzim"},{name:"paganois",cep:"mateuzim"},{name:"pagaeuno",cep:"mateuzim"},{name:"taquasela",cep:"mateuzim"},{name:"opafalacomigmeu",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"}];
  useEffect(()=>{
    //Da um get  e pega o id de produtos e o joga pro reducer
    console.log(readAllProducts())
    
    dispatchProducts({type:'Clear'})
    array.forEach(element => {
      
      dispatchProducts({type: 'ProductSet',product_name:element.name,product_price:34545,img_path:"dfdf"})  
    });
    },[])

  const addToCart = (name,imgPath,price) =>{
    dispatchCounter({type: 'increment'})
    dispatchCart({type: 'CartAdd',product_name:name,product_price:price,img_path:imgPath})
  }
  
  return (
    <Container>
      
      {stateProducts.objects_products.map((obj,key)=>{
        return (  
          <ProductDiv key={key}>
            <img src={dressImg} style={{height: "40%",width: 120}}></img>
            <Text fontsize={2} style={{marginTop:10,overflowWrap:"anywhere",textAlign:"center",height:"40%"}}>
               Vestido {obj.name}
            </Text>
            <Text fontsize={1.5} style={{marginTop:10,alignSelf:"flex-start",paddingLeft:"20px",color:"#373040",height:"10%"}}>
              R$:63,69
            </Text>
            <Button onClick={()=>addToCart(obj.name,"imgPath",53) } style={{marginButtom:"0",height:"auto"}}>
              <Text fontsize={1.5}>
                <img src={shopCart} style={{height: 60,width: "auto",cursor:"pointer"}}></img>
              </Text>
            </Button>
        </ProductDiv>)
      })}

    </Container>
  );
};

export default Main;
