import React from 'react';
import {
  Wrapper,
  Text,
  Image,
  Title,
  Description,
} from "./AboutAppStyles";
import {images} from "../imgs";

const INTERVAL = 4000;

export class AboutApp extends React.PureComponent {
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

    return (
      <Wrapper>
        <Text>
          <Title>Мгновенно узнавайте что видят ваши пользователи</Title>
          <Description>
            Вашим пользователям нужна помощь, но вы не видите их действий на веб сайте. Screens позволяет вам видеть их экран и управлять им без каких-либо настроек. Совершайте звонки проще и эффективнее.
          </Description>
        </Text>
        <Image
          src={this.getImageUrl(picture)}
        />
      </Wrapper>
    );
  }
}
