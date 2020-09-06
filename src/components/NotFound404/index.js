import React, { useContext, useState, useEffect } from "react";
import { Container, ProductDiv, TextDiv, Text } from "./styles";
import { useHistory } from "react-router-dom";
const NotFound = (props) => {
  let history = useHistory();
  return (
    <Container>
      <ProductDiv>
        <TextDiv>
          <Text fontsize={4}>Pagina Não Encontrada</Text>
          <Text fontsize={3} onClick={()=>history.push("/")}>Voltar ao menu principal</Text>
        </TextDiv>
      </ProductDiv>
    </Container>
  );
};

export default NotFound;
