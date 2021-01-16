import React from 'react';
import {
  Wrapper,
  Logo,
  Button,
  Link,
} from "./HeaderStyles";
import {images} from "../imgs";

export function Header() {
  return (
    <Wrapper>
      <Link href="/">
        <Logo src={images.logo}/>
      </Link>
      <Link href="mailto:myscreensapp@gmail.com">
        <Button>Запросить демо</Button>
      </Link>
    </Wrapper>
  );
}
