import React from 'react';
import {
  Wrapper,
  Text,
  Image,
  Title,
  Description,
  Button,
  MobileButtonWrapper,
  DesktopButtonWrapper,
} from "./AboutAppStyles";
import {images} from "../imgs";

const INTERVAL = 4000;

interface IOwnProps {
  contactFormHandler: (payload: boolean) => void;
}

interface IProps extends IOwnProps {}

export class AboutApp extends React.PureComponent<IProps> {
  state = {
    picture: 0,
  };

  componentDidMount() {
    setInterval(() => {
        const {picture} = this.state;
        const newPicture = picture === 2 ? 0 : picture + 1;
        this.setState({picture: newPicture});
      }, INTERVAL);
  }

  private getImageUrl = (picture: number) => {
    switch (picture) {
      case 1:
        return images.aboutTwo;
      case 2:
        return images.aboutThree;
      default:
        return images.aboutOne;
    }
  };


  render() {
    const {picture} = this.state;
    const {contactFormHandler} = this.props;

    return (
      <Wrapper>
        <Text>
          <Title>Получите мгновенный доступ к управлению веб-приложения ваших клиентов</Title>
          <Description>
            Вашим пользователям нужна помощь, но вы не видите их действий на веб-сайте? Screens позволяет видеть и управлять экраном клиента без дополнительных настроек. Сделайте поддержку своих клиентов проще, быстрее и эффективнее.
          </Description>
          <DesktopButtonWrapper>
            <Button onClick={() => contactFormHandler(true)}>Запросить демо</Button>
          </DesktopButtonWrapper>
        </Text>
        <Image
          src={this.getImageUrl(picture)}
        />
        <MobileButtonWrapper>
          <Button onClick={() => contactFormHandler(true)}>Запросить демо</Button>
        </MobileButtonWrapper>
      </Wrapper>
    );
  }
}
