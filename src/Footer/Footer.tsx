import React from 'react';
import {
  Wrapper,
  Items,
  ItemsTitle,
  Item,
  Link,
  ItemEmail,
} from "./FooterStyles";

export function Footer() {
  return (
    <Wrapper>
      <Items>
        <ItemsTitle>Документы</ItemsTitle>
        <Link href="https://www.notion.so/Screens-d7f5502aac8b4a0096c43402ccf96ebb" target="_blank">
          <Item>Политика конфиденциальности</Item>
        </Link>
        <Link href="https://www.notion.so/Screens-5247760f01f44f99b8b1c71aa706f9c6" target="_blank">
          <Item>Условия пользования сайтом</Item>
        </Link>
      </Items>
      <Items>
        <ItemsTitle>Контакты</ItemsTitle>
        <ItemEmail>myscreensapp@gmail.com</ItemEmail>
      </Items>
    </Wrapper>
  );
}
