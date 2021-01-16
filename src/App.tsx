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

function App() {
  return (
    <Wrapper>
      <Header/>
      <AboutApp/>
      <ConversationsBlock/>
      <AppsBlock/>
      <TeamViewer/>
      <SecurityBlock/>
      <TechnologyBlock/>
      <Footer/>
    </Wrapper>
  );
}

export default App;
