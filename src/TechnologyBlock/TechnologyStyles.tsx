import styled from 'styled-components';
import {mediaQueries} from "../constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 20px;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    padding: 150px 100px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Text = styled.div``;

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

export const Image = styled.img`
  width: 80%;
  padding-top: 30px;
  
  @media screen and (min-width: ${mediaQueries.desktop}px) {
    padding-top: 0;
    width: 35%;
  }
`;