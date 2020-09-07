import React, { useEffect, useContext } from "react";

import { Container, Text, StyledLink, ImgPlace } from "./styles";
import StoreImgIcon from "../../assets/icons/icons8-shop-96.png";
import MarketBox from "../../assets/icons/icons8-market-square-80.png";
import { Link } from "react-router-dom";
import { context1 } from "../../Context";
const Header = () => {
  const { stateCounter, dispatchCounter } = useContext(context1);
  const { stateCart, dispatchCart } = useContext(context1);
  function getAllPurchases() {
    return fetch("/.netlify/functions/read-all-purchases").then((response) => {
      return response.json().then((json) => {
        console.log("Lista de compras efetudas no site");
        json.forEach((element) => {
          console.log("###############");
          console.log("Produto :" + element.data.name);
          console.log("Preço :" + element.data.price + "Reais");
          element.data.date
            ? console.log(Date(element.data.date))
            : console.log("Esta compra n possui data");
          console.log("Id compra: ", element.ref["@ref"].id);
          console.log("###############");
        });
      });
    });
  }

  useEffect(() => {}, []);
  return (
    <Container>
      <Link to="">
        <ImgPlace height={120} width={120} src={StoreImgIcon}></ImgPlace>
      </Link>

      <Text fontsize={3.5} onClick={() => getAllPurchases()}>
        Erick Web Store
      </Text>
      <StyledLink to="/cart">
        <Text fontsize={2}>{stateCounter.count}</Text>
        <ImgPlace height={70} width={80} src={MarketBox}></ImgPlace>
      </StyledLink>
    </Container>
  );
};

export default Header;
