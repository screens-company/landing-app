import React from 'react';
import {
  Wrapper,
  Form,
  Content,
  InputName,
  Input,
  InputItem,
  Button,
  Exit,
  ThankYouMessage,
} from "./ContactFormStyles";
import {contactsService} from "../services/contacts";

interface IOwnProps {
  isShow: boolean;
  contactFormHandler: (payload: boolean) => void;
}

interface IProps extends IOwnProps {}

export class ContactForm extends React.PureComponent<IProps> {
  state = {
    name: '',
    contact: '',
    nameError: false,
    contactError: false,
    isSend: false,
    isShowThankYouMessage: false,
  };

  private nameInputHandler = (e: any) => {
    const value = e.target.value;

    this.setState({
      name: value,
      nameError: !value.length,
    });
  };

  private contactInputHandler = (e: any) => {
    const value = e.target.value;

    this.setState({
      contact: value,
      contactError: !value.length,
    });
  };

  private closeButtonHandler = () => {
    this.props.contactFormHandler(false);

    this.setState({
      name: '',
      contact: '',
      nameError: false,
      contactError: false,
      isShowThankYouMessage: false,
    });
  };

  private sendButtonHandler = () => {
    const {
      name,
      contact,
    } = this.state;
    const isNameLengthFalsy = name.length === 0;
    const isContactLengthFalsy = contact.length === 0;

    if (isNameLengthFalsy && isContactLengthFalsy) {
      this.setState({nameError: true, contactError: true});
      return;
    }

    if (isNameLengthFalsy) {
      this.setState({nameError: true});
      return;
    }

    if (isContactLengthFalsy) {
      this.setState({contactError: true});
      return;
    }

    const serviceResponse = contactsService({name, contact});
    this.setState({name: '', contact: '', isShowThankYouMessage: true});

    return serviceResponse;
  };

  private wrapperClickHandler = (e: any) => {
    if (e.currentTarget === e.target) {
      this.closeButtonHandler();
    }
  };

  private getInputsView = () => {
    const {name, contact, nameError, contactError} = this.state;

    return (
      <>
        <Content>
          <InputItem>
            <InputName>Как вас зовут?</InputName>
            <Input
              borderColor={nameError ? 'red' : 'blue'}
              onChange={this.nameInputHandler}
              value={name}
            />
          </InputItem>
          <InputItem>
            <InputName>Ваш контакт?</InputName>
            <Input
              borderColor={contactError ? 'red' : 'blue'}
              onChange={this.contactInputHandler}
              value={contact}
            />
          </InputItem>
        </Content>
        <Button onClick={this.sendButtonHandler}>Отправить</Button>
      </>
    );
  };

  private getThankYouMessage = () => {
    return (
      <ThankYouMessage>Спасибо! Мы свяжемся с вами!</ThankYouMessage>
    );
  };

  render() {
    const {isShow} = this.props;
    const {isShowThankYouMessage} = this.state;

    if (!isShow) {
      return <div/>;
    }

    return (
      <Wrapper onClick={this.wrapperClickHandler}>
        <Form>
          <Exit onClick={this.closeButtonHandler}>закрыть</Exit>
          {!isShowThankYouMessage && this.getInputsView()}
          {isShowThankYouMessage && this.getThankYouMessage()}
        </Form>
      </Wrapper>
    );
  }
}
