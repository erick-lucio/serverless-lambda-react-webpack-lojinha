import React,{useEffect,useState,useReducer,useContext} from 'react';

import { Container,ProductDiv,Text,Button } from './styles';
import dressImg from '../../assets/imgs/pink-dress.jpg'
import shopCart from '../../assets/icons/icons8-add-shopping-cart-64.png'
import {context1} from '../../Context'


const Main = () => {
  const {stateCounter,dispatchCounter}=useContext(context1)
  const {stateProducts, dispatchProducts}=useContext(context1)
  console.log(stateProducts)
  
  const array = [{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},
  {name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"}];
  useEffect(()=>{
    //Da um get  e pega o id de produtos e o joga pro reducer
    dispatchProducts({type:'Clear'})
    array.forEach(element => {
      
      dispatchProducts({type: 'ProductSet',product_name:element.name,product_price:34545,img_path:"dfdf"})  
    });
    },[])

  const addToCart = (name,imgPath) =>{
    dispatchCounter({type: 'increment'})
  }
  
  return (
    <Container>
      
      {stateProducts.objects_products.map((obj,key)=>{
        return (  
          <ProductDiv key={key}>
            <img src={dressImg} style={{height: 150,width: 120}}></img>
            <Text fontsize={2} style={{marginTop:10}}>
               Vestido{obj.name}
            </Text>
            <Text fontsize={1.5} style={{marginTop:10}}>
              R$:63,69
            </Text>
            <Button onClick={()=>addToCart("alo","opa")}>
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
