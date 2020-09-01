import React,{useEffect,useState,useReducer} from 'react';

import { Container ,Text,ItensDiv,Button} from './styles';
import dressImg from '../../assets/imgs/pink-dress.jpg'
import removeIcon from '../../assets/icons/icons8-remove-64.png'

const Cart = () => {
  
  const array = [{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},
  {name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"}];
  return (
    <Container>
      <Text fontsize={4}>Produtos no Carrinho</Text>
      {array.map((cart_obj,key)=>{
        return(
          <ItensDiv key={key}>
            <img src={dressImg} style={{height: 120,width: "auto"}}></img>
            <Text fontsize={2}>{cart_obj.name}</Text>
            <img src={removeIcon} style={{height: 50,width: "auto",cursor:"pointer"}}></img>

          </ItensDiv>
        )
      })}
      <Button onClick={()=>alert("Compra Finalizada")}>
        <Text fontsize={2}>Finalizar Compra</Text>
      </Button>
    </Container>
  );
};

export default Cart;
