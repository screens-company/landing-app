import styled from "styled-components";
import {mediaQueries} from "../constants";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: blue;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
  width: 80%;
  height: 300px;
  margin-top: -100px;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    margin: 0;
    width: 400px;
    height: 300px;
  }
`;

export const Content = styled.div`
  padding: 30px 30px 0px 30px;
  width: 100%;
`;

export const InputItem = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;

export const InputName = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.input<{borderColor: string}>`
  outline: none;
  padding: 5px;
  -webkit-appearance: none;
  border: 1px solid ${({borderColor}) => borderColor};
  border-radius: 4px;
  width: 70%;
  height: 30px;
  font-size: 16px;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    width: 250px;
  }
`;

export const Button = styled.div`
  color: blue;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
`;

export const Exit = styled.div`
  color: red;
  font-weight: bold;
  font-size: 12px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  user-select: none;
`;

export const ThankYouMessage = styled.div`
  color: blue;
  font-size: 16px;
  font-weight: bold;
`;