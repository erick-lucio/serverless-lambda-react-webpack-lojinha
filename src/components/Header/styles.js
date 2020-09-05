import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 20%;
  background-image: linear-gradient(
    to bottom,
    rgba(105, 90, 205, 0.5),
    rgba(150, 151, 255, 0.8)
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Div = styled.div``;
export const StyledLink = styled(Link)`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding-right: 50px;
  text-decoration: none;
  color: rgb(55, 44, 34);
  &:hover {
    color: "none";
  }
  &:visited {
    color: "none";
  }
  &:active {
    color: "none";
  }
`;
export const ImgPlace = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
export const Text = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${(props) => props.fontsize}rem;
`;
