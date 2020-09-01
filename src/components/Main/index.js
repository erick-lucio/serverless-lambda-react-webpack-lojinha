import React,{useEffect,useState,useReducer,useContext} from 'react';

import { Container,ProductDiv,Text,Button } from './styles';
import dressImg from '../../assets/imgs/pink-dress.jpg'
import shopCart from '../../assets/icons/icons8-add-shopping-cart-64.png'

import {context1} from '../../Context'


const Main = () => {
  const array = [{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},
  {name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"}];
  useEffect(()=>{
    //Da um get  e pega o id de produtos e o joga pro reducer

    array.forEach(element => {
      dispatch({type: 'ProductAdd',product_name:element.name,product_price:34545,img_path:"dfdf"})  
    });
  },[])
  const {state,dispatch}=useContext(context1)
  
  return (
    <Container>
      
      {array.map((obj,key)=>{
        return (  
          <ProductDiv key={key}>
            <img src={dressImg} style={{height: 150,width: 120}}></img>
            <Text fontsize={2} style={{marginTop:10}}>
               Vestido{obj.name}
            </Text>
            <Text fontsize={1.5} style={{marginTop:10}}>
              R$:63,69
            </Text>
            <Button onClick={()=>dispatch({type: 'increment'})}>
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
