import React from 'react';
import {
  Wrapper,
  Logo,
  Button,
  Link,
} from "./HeaderStyles";
import {images} from "../imgs";

interface IOwnProps {
  contactFormHandler: (payload: boolean) => void;
}

interface IProps extends IOwnProps {}

export class Header extends React.PureComponent<IProps> {
  render() {
    const {contactFormHandler} = this.props;

    return (
      <Wrapper>
        <Link href="/">
          <Logo src={images.logo}/>
        </Link>
        <Button onClick={() => contactFormHandler(true)}>Запросить демо</Button>
      </Wrapper>
    );
  }
}
