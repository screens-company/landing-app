import styled from 'styled-components';
import {mediaQueries} from "../constants";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  background: white;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    padding: 0 100px;
    height: 100px;
  }
`;

export const Logo = styled.img`
  width: 110px;
  cursor: pointer;
`;

export const Link = styled.a`
  text-decoration: none;
  color: blue;
`;

export const Button = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
  border: 2px solid blue;
`;