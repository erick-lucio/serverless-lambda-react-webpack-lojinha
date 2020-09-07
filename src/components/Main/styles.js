import styled from "styled-components";

export const Container = styled.div`
  font-size: 25px;
  min-height: 80%;
  background-image: linear-gradient(
    to bottom,
    rgba(150, 151, 255, 0.5),
    rgba(255, 255, 255, 0.8)
  );
  display: flex;
  flex-wrap: wrap;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 100px;
  @media (max-width: 576px) {
   
    flex-direction: column;
  }
  @media (min-width: 577px) {
  
    flex-direction: column;
  }
  @media (min-width: 768px) {
   
    flex-direction: row;
  }
`;
export const ProductDiv = styled.div`
  @media (max-width: 576px) {
    max-width:80%;
    flex-direction: column;
  }
  @media (min-width: 577px) {
    max-width:80%;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    max-width:23%;
    flex-direction: column;
  }
  flex-direction: column;
  margin-top: 50px;
  flex: 1 1 200px;
  display: flex;

  border: 0.5px solid rgba(1, 2, 3, 0.5);
  border-radius: 25px;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
  background-image: linear-gradient(
    to top,
    rgba(255, 165, 0, 0.1),
    rgba(255, 255, 0, 0.1)
  );
  padding-bottom: 20px;
  padding-top: 40px;
`;

export const Text = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${(props) => props.fontsize}rem;
  overflow-wrap: ${(props) => props.overflowWrap};
  text-align: ${(props) => props.textAlign};
  margin-top: ${(props) => props.marginTop};
  align-self: ${(props) => props.alignSelf};
  padding-left: ${(props) => props.paddingLeft};
  color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  cursor: ${(props) => props.cursor};
`;
export const Button = styled.button`
  border: none;

  align-self: flex-start;
  margin-left: 15px;
  background-color: inherit;
  justify-content: flex-end;
  margin-bottom: ${(props) => props.marginButtom};
  height: ${(props) => props.height};
`;
export const Image = styled.img`
  height: 50%;
  width: 65%;
  src: ${(props) => props.src};
  border: 3px double rgb(0, 0, 0);
  cursor: pointer;
  @media (max-width: 576px) {
    height: 50%;
   
  }
  @media (min-width: 577px) {
    height: 40%;
   
  }
  @media (min-width: 768px) {
    height: 45%;
    
  }
  @media (min-width: 992px) {
    height: 50%;
    
  }
  @media (min-width: 1200px) {
    height: 50%;
    
  }
`;
export const ImgPlace = styled.img`
  cursor: ${(props) => props.cursor};
  border-radius: ${(props) => props.borderRadius};
  src: ${(props) => props.src};
  @media (max-width: 576px) {
    width: ${(props) => props.width * 0.8}px;
    height: ${(props) => props.height * 0.8}px;
  }
  @media (min-width: 577px) {
    width: ${(props) => props.width * 0.9}px;
    height: ${(props) => props.height * 0.9}px;
  }
  @media (min-width: 768px) {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  }
  @media (min-width: 992px) {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  }
  @media (min-width: 1200px) {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  }
`;
