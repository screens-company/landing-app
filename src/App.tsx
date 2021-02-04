import React from 'react';
import {Wrapper} from "./AppStyles";
import {Header} from "./Header/Header";
import {AboutApp} from "./AboutApp/AboutApp";
import {ConversationsBlock} from "./СonversationsBlock/СonversationsBlock";
import {TeamViewer} from "./TeamViewer/TeamViewer";
import {AppsBlock} from "./AppsBlock/AppsBlock";
import {SecurityBlock} from "./Security/Security";
import {TechnologyBlock} from "./TechnologyBlock/TechnologyBlock";
import {Footer} from "./Footer/Footer";
import {ContactForm} from "./ContactForm/ContactForm";

export class App extends React.PureComponent {
  state = {
    isShowContactForm: false,
  };

  private contactFormHandler = (payload: boolean) => {
    this.setState({isShowContactForm: payload});
  };

  render() {
    return (
      <Wrapper>
        <ContactForm
          isShow={this.state.isShowContactForm}
          contactFormHandler={this.contactFormHandler}
        />
        <Header
          contactFormHandler={this.contactFormHandler}
        />
        <AboutApp
          contactFormHandler={this.contactFormHandler}
        />
        <ConversationsBlock/>
        <AppsBlock/>
        <TeamViewer/>
        <SecurityBlock/>
        <TechnologyBlock/>
        <Footer/>
      </Wrapper>
    );
  }
}
