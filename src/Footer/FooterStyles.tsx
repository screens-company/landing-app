import styled from 'styled-components';
import {mediaQueries} from "../constants";

export const Wrapper = styled.div`
  width: 100%;
  height: 170px;
  background-color: blue;
  display: flex;
  padding: 0 20px;
  position: relative;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    padding: 0 100px;
    height: 150px;
  }
`;

export const Items = styled.div`
  padding: 30px 30px 0 0;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    padding: 30px 50px 0 0;
  }
`;

export const ItemsTitle = styled.div`
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 5px;
  user-select: none;
`;

export const Item = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  padding: 5px 0;
  cursor: pointer;
`;