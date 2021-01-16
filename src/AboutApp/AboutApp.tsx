import React from 'react';
import {
  Wrapper,
  Text,
  Image,
  Title,
  Description,
} from "./AboutAppStyles";
import {images} from "../imgs";

export function AboutApp() {
  return (
    <Wrapper>
      <Text>
        <Title>Мгновенно узнавайте что видят ваши пользователи</Title>
        <Description>
          Вашим пользователям нужна помощь, но вы не видите их действий на веб сайте. Screens позволяет вам видеть их экран и управлять им без каких-либо настроек. Совершайте звонки проще и эффективнее.
        </Description>
      </Text>
      <Image
        src={images.about}
      />
    </Wrapper>
  );
}
