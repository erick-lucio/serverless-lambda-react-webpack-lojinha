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
`;
export const ProductDiv = styled.div`
  min-width: 100%;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;

  padding-bottom: 20px;
  padding-top: 40px;
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

export const Text = styled.span`
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 576px) {
    font-size: ${(props) => props.fontsize * 0.6}rem;
  }
  @media (min-width: 577px) {
    font-size: ${(props) => props.fontsize * 0.7}rem;
  }
  @media (min-width: 768px) {
    font-size: ${(props) => props.fontsize * 0.8}rem;
  }
  @media (min-width: 992px) {
    font-size: ${(props) => props.fontsize * 0.9}rem;
  }
  @media (min-width: 1200px) {
    font-size: ${(props) => props.fontsize}rem;
  }
  &:hover {
    color: ${(props) =>
      props.overcolor ? "rgba(155, 55, 255, 1)" : "rgba(0, 0, 0, 1)"};
  }
`;
export const Button = styled.button`
  border: none;

  align-self: flex-start;
  margin-left: 15px;
  background-color: inherit;
  justify-content: flex-end;
`;
export const Image = styled.img`
  margin-top: 30px;
  src: ${(props) => props.src};
  border: 4px double rgb(0, 0, 0);
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
export const TextDiv = styled.div`
  margin-right: auto;
  margin-left: auto;
  background-color: rgba(155, 155, 255, 0.6);
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (max-width: 576px) {
    padding-right: 5px;
    padding-left: 5px;
    padding-top: 10px;
    padding-bottom: 30px;
    border-radius: 10px;
    margin-top:40px;
  }
  @media (min-width: 577px) {
    padding-right: 5px;
    padding-left: 5px;
    padding-top: 10px;
    padding-bottom: 30px;
    border-radius: 10px;
    margin-top:40px;
  }
  @media (min-width: 768px) {
    padding-right: 80px;
    padding-left: 80px;
    padding-top: 50px;
    padding-bottom: 50px;
    border-radius: 10px;
  }
`;
export const Button2 = styled.button`

  align-self: center;
  align-items: center;
  display: flex;
  margin-top: 30px;
  padding: 0;
  border: 2px dashed rgba(155, 55, 255, 1);
  background-color: rgba(155, 55, 255, 1);
  border-radius: 5px;
  background: none;
  cursor: pointer;
  @media (max-width: 576px) {
    width: 85%;
  }
  @media (min-width: 577px) {
    width: 85%;
  }
  @media (min-width: 768px) {
    width: 85%;
  }
`;
export const Image2 = styled.img`
  src: ${(props) => props.src};
  @media (max-width: 576px) {
    width:50px;
  }
  @media (min-width: 577px) {
    width:50px;
  }
  @media (min-width: 768px) {
    width:80px;
  }
`;
