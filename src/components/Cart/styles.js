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
  align-items: center;
  flex-direction: column;
`;
export const Text = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${(props) => props.fontsize}rem;
  margin-top: 15px;
`;
export const ItensDiv = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  display: flex;
  padding: 15px;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  margin-top: 10px;
  background-color: rgb(183, 135, 250);
`;
export const Button = styled.button`
  border: 1px solid black;
  margin-top: 50px;
  cursor: pointer;
  padding: 20px;
  border-radius: 50px;
  background-color: rgb(237, 242, 80);
`;
