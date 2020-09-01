import React,{useEffect,useState,useReducer,useContext} from 'react';

import { Container,Text ,StyledLink} from './styles';
import StoreImgIcon from '../../assets/icons/icons8-shop-96.png';
import MarketBox from '../../assets/icons/icons8-market-square-80.png';
import {Link} from 'react-router-dom'
import {estadoInicial} from '../../Redux'
import {reducer} from '../../Redux'
import {context1} from '../../Context'
const Header = () => {
  const {state,dispatch}=useContext(context1)
  return (
    <Container>      
      <Link to="">
         <img style={{height: 130,width: "auto",marginLeft:"10px",cursor:"pointer"}} src={StoreImgIcon}></img>
      </Link>
      
      <Text fontsize={3.5} onClick={()=>console.log(state)}>Erick Web Store</Text>
      <StyledLink to="/cart">
          <Text fontsize={2}>{state.count}</Text>
          <img style={{height: 70,width: "auto",cursor:"pointer"}} src={MarketBox}></img>
          
      </StyledLink>

     
    </Container>
  );
};

export default Header;
