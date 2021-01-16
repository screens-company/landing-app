import React from 'react';
import {
  Wrapper,
  Text,
  Title,
  Description,
  Item,
  ItemIcon,
  ItemText,
  Items,
  FakeItem,
} from "./SecurityStyles";
import {images} from "../imgs";

export function SecurityBlock() {
  return (
    <Wrapper>
      <Text>
        <Title>Безопасность</Title>
        <Description>
          Screens важно защитить персональные данные ваших клиентов
        </Description>
      </Text>
      <Items>
        <Item>
          <ItemIcon src={images.securityBlock}/>
          <ItemText>Скройте конфиденциальную информацию пользователей от сотрудников службы поддержки</ItemText>
        </Item>
        <FakeItem/>
        <Item>
          <ItemIcon src={images.securityData}/>
          <ItemText>Данные о клиентах отправляются только во время открытых сессий</ItemText>
        </Item>
      </Items>
    </Wrapper>
  );
}
