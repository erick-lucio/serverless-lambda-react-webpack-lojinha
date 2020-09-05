import React,{useEffect,useState,useReducer,useContext} from 'react';

import { Container,Text ,StyledLink} from './styles';
import StoreImgIcon from '../../assets/icons/icons8-shop-96.png';
import MarketBox from '../../assets/icons/icons8-market-square-80.png';
import {Link} from 'react-router-dom'
import {context1} from '../../Context'
const Header = () => {
  const {stateCounter,dispatchCounter}=useContext(context1)
  const {stateCart, dispatchCart}=useContext(context1)   
  const [stateProducts, dispatchProducts]=useContext(context1) 
  useEffect(()=>{
    //Da um get  e pega o id de produtos e o joga pro reducer


  },[])
  return (
    <Container>   
      
      <Link to="">
         <img style={{height: 130,width: "auto",marginLeft:"10px",cursor:"pointer"}} src={StoreImgIcon}></img>
      </Link>
      
      <Text fontsize={3.5} onClick={()=>console.log("stateProducts.objects_products")}>Erick Web Store</Text>
      <StyledLink to="/cart">
          <Text fontsize={2}>{stateCounter.count}</Text>
          <img style={{height: 70,width: "auto",cursor:"pointer"}} src={MarketBox}></img>
          
      </StyledLink>

     
    </Container>
  );
};

export default Header;
