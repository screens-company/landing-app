import React from 'react';
import {
  Wrapper,
  Text,
  Image,
  Title,
  Description,
} from "./TechnologyStyles";
import {images} from "../imgs";

export function TechnologyBlock() {
  return (
    <Wrapper>
      <Text>
        <Title>Работает со всем</Title>
        <Description>
          Screens работает на всех устройствах.<br/> Поддерживает старые и новые технологии.
        </Description>
      </Text>
      <Image
        src={images.technologyIcon}
      />
    </Wrapper>
  );
}
