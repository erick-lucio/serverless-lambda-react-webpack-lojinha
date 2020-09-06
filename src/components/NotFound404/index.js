import React, { useContext ,useState,useEffect} from "react";
import {
  Container,
  ProductDiv,
  TextDiv,
  Text,
} from "./styles";

const NotFound = (props) => {

  return (
    <Container>
      <ProductDiv>           
        <TextDiv>
          <Text fontsize={4}>Pagina Não Encontrada</Text>


        </TextDiv>
      </ProductDiv>
    </Container>
  );
};

export default NotFound;
