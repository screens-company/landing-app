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
} from "./СonversationsBlockStyles";
import {images} from "../imgs";

export function ConversationsBlock() {
  return (
    <Wrapper>
      <Text>
        <Title>Упростите работу службы поддержки</Title>
        <Description>
          Смотрите что ваши пользователи видят на своих экранах в реальном времени.<br/>
          Никаких загрузок или настроек не требуется.
        </Description>
      </Text>
      <Items>
        <Item>
          <ItemIcon src={images.conversationSearch}/>
          <ItemText>Найдите сессию вашего клиента в приложении Screens</ItemText>
        </Item>
        <Item>
          <ItemIcon src={images.conversationApp}/>
          <ItemText>Управляйте приложением клиентов в режиме реального времени</ItemText>
        </Item>
        <Item>
          <ItemIcon src={images.conversationAccess}/>
          <ItemText>Вся настройка доступа в одной кнопке</ItemText>
        </Item>
      </Items>
    </Wrapper>
  );
}
