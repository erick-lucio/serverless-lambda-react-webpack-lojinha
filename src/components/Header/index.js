import React from 'react';

import { Container,Text } from './styles';
import StoreImgIcon from '../../assets/icons/icons8-shop-96.png';
import MarketBox from '../../assets/icons/icons8-market-square-80.png';
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <Container>      
      <Link to="">
         <img style={{height: 130,width: "auto",marginLeft:"10px",cursor:"pointer"}} src={StoreImgIcon}></img>

      </Link>
     
      <Text fontsize={3.5} >Erick Web Store</Text>
      <Link to="/cart">
          <img style={{height: 70,width: "auto",marginRight:"35px",cursor:"pointer"}} src={MarketBox}></img>
      </Link>

     
    </Container>
  );
};

export default Header;
