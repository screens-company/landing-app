import React from 'react';
import {
  Wrapper,
  Text,
  Title,
  Description,
  Icon,
} from "./TeamViewerStyles";
import {images} from "../imgs";

export function TeamViewer() {
  return (
    <Wrapper>
      <Text>
        <Title>Вам больше не нужно просить клиентов устанавливать TeamViewer</Title>
        <Description>
          Всё управление экраном пользователя осуществляется через одну кнопку.<br/>
          Вы можете мгновенно приступить к поддержке клиента, не тратя время на установку дополнительного ПО.
        </Description>
      </Text>
      <Icon src={images.access}/>
    </Wrapper>
  );
}
