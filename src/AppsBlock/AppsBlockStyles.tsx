import styled from 'styled-components';
import {mediaQueries} from "../constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    padding: 200px 100px;
  }
`;

export const Text = styled.div`
  text-align: center;
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

export const Icon = styled.img`
  width: 80%;
  margin-top: 50px;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    width: 30%;
  }
`;