import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Body, Right, Title } from 'native-base';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
        <Left/>
          <Body>
            <Title style={{color:'white'}}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading={ <TabHeading><Text>General</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading><Text>Business</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={ <TabHeading><Text>Technology</Text></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}