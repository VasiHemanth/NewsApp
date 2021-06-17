import React, { Component } from 'react';
import { Container, Content, List, Text, View } from 'native-base';

import { getAritcles } from '../service/news';
import { ActivityIndicator, Alert } from 'react-native';

import DataItem from '../component/DataItem';
import ModelComponent from '../component/ModelComponent';

export default class Tab1 extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      isLoading: true,
      data:null,
      setModalVisible:false,
      modalArticleData:{}
    }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible:true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible:false,
      modalArticleData:{}
    });
  }

  //Lifecycle Hook  
  componentDidMount() {
    getAritcles('general').then(data => {
      this.setState({
        isLoading:false,
        data:data
      })
    }, error => {
      Alert.alert( 'Error', 'Something went wrong!');
    });
  }
  
  render() {  
    

    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text>Please Wait....</Text>
      </View>
    ) : ( 
      <List 
      dataArray={this.state.data}
      renderRow = {(item) => {
        return (
        <DataItem  onPress={this.handleItemDataOnPress} data={item}/>
        )
      }}
    />
    )

    return (
      <Container>
        <Content>
         {view}
        </Content>
        <ModelComponent 
          showModel = {this.state.setModalVisible}
          articleData= {this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}

