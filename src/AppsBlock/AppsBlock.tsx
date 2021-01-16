import React from 'react';
import {
  Wrapper,
  Text,
  Title,
  Description,
  Icon,
} from "./AppsBlockStyles";
import {images} from "../imgs";

export function AppsBlock() {
  return (
    <Wrapper>
      <Text>
        <Title>Screens дополняет ваши сервисы</Title>
        <Description>
          Переходите к сессиям прямо из чата или телефонного разговора<br/> и сокращайте время разрешения на 54%
        </Description>
      </Text>
      <Icon src={images.appsIcon}/>
    </Wrapper>
  );
}
