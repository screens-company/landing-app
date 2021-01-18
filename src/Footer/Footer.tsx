import React from 'react';
import {
  Wrapper,
  Items,
  ItemsTitle,
  Item,
} from "./FooterStyles";

export function Footer() {
  return (
    <Wrapper>
      <Items>
        <ItemsTitle>Документы</ItemsTitle>
        <Item>Политика конфиденциальности</Item>
        <Item>Условия пользования сайтом</Item>
      </Items>
      <Items>
        <ItemsTitle>Контакты</ItemsTitle>
        <Item>myscreensapp@gmail.com</Item>
      </Items>
    </Wrapper>
  );
}
