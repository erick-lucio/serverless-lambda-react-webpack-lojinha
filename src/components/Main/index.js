import React from 'react';

import { Container,ProductDiv,Text,Button } from './styles';
import dressImg from '../../assets/imgs/pink-dress.jpg'
const Main = () => {
  const array = [{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},
  {name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"},{name:"goudglas",cep:"mateuzim"}];
  return (
    <Container>
      {array.map((obj)=>{
        return (  
          <ProductDiv>
            <img src={dressImg} style={{height: 150,width: 120,cursor:"pointer"}}></img>
            <Text fontsize={2}>
               Vestido{obj.name}
            </Text>
            <Text fontsize={1.5}>
              R$:63,69
            </Text>
            <Button onClick={()=>alert("Produto Adicionado ao carrinho")}>
              <Text fontsize={1.5}>
                Adicionar ao Carrinho
              </Text>
            </Button>
        </ProductDiv>)
      })}

    </Container>
  );
};

export default Main;
