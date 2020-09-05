import styled from 'styled-components';

export const Container = styled.div`
    font-size:25px;
    min-height:80%;
    background-image:linear-gradient(to bottom,rgba(150,151,255,0.5),rgba(255,255,255,0.8));
    display:flex;  
    flex-wrap:wrap;
    padding-left:50px;
    padding-right:50px;
    padding-bottom:100px;
`;
export const ProductDiv = styled.div`
    max-width: 20%;
    margin-top:50px;   
    flex:1 1 250px;
    display:flex;
    flex-direction:column;
    border:0.5px solid rgba(1,2,3,0.5);
    border-radius:25px;
    margin-left:10px;
    margin-right:10px;
    align-items:center;
    background-image:linear-gradient(to top,rgba(255,165,0,0.1),rgba(255,255,0,0.1));
    padding-bottom:20px;
    padding-top:40px;
    
`;

export const Text = styled.span`
    font-family:Arial, Helvetica, sans-serif;
    font-size:${props=>props.fontsize}rem;
`;
export const Button = styled.button`
    border: none;
    
    align-self: flex-start;
    margin-left:15px;
    background-color:inherit;
    justify-content:flex-end;
`;