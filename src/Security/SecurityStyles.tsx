import styled from 'styled-components';
import {mediaQueries} from "../constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 20px;
  background-color: #fafafa;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    padding: 150px 100px;
  }
`;

export const Text = styled.div`
  width: 100%;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    text-align: center;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  color: black;
  font-weight: bold;
  padding-bottom: 20px;
  line-height: 40px;
`;

export const Description = styled.div`
  font-size: 20px;
  color: rgba(0,0,0,0.6);
  line-height: 30px;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 0 0 0;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 50px 20px 0 20px;
  }
`;


export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    width: 25%;
    padding-bottom: 0;
  }
`;

export const FakeItem = styled.div`
  width: 30px;
`;

export const ItemIcon = styled.img`
`;

export const ItemText = styled.div`
  font-size: 14px;
  color: rgba(0,0,0,1);
  line-height: 20px;
  font-weight: bold;
  
 @media screen and (min-width: ${mediaQueries.desktop}px) {
    text-align: center;
    padding-top: 20px;
  }
`;