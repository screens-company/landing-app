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
        <ItemsTitle>Legal</ItemsTitle>
        <Item>Terms of Service</Item>
        <Item>Privacy Policy</Item>
      </Items>
      <Items>
        <ItemsTitle>Contacts</ItemsTitle>
        <Item>myscreensapp@gmail.com</Item>
      </Items>
    </Wrapper>
  );
}
