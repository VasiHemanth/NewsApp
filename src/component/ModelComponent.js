import React, { Component } from 'react'
import { Dimensions, Share, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
import { View, Text, Container, Right, Left, Body, Content, Button, Title,Header,Icon } from 'native-base'

const WebViewHeight = Dimensions.get('window').height - 56;

export default class ModelComponent extends Component {
    
    constructor(props) {
        super(props);
    }
    handleClose = () => {
        this.props.onClose()
    }
    handleShare = () => {
        const { url, title } = this.props.articleData;
        message = `${title}\n\nRead More @${url}\n\nShared via NewsApp`;
        return Share.share(
            {title,message, url:message},
            {dialogTitle:`Share${title}`}
        ) 
    }

    render() {
        const { showModel, articleData } = this.props;
        const { url } = articleData;
        if ( url!=null){
            return (
                <Modal
                    animationType='slide'
                    transparent
                    visible={showModel}
                    onRequestClose={this.handleClose}
                    
                >
                <Container style={{margin:15, marginBottom:0, bakgroundColor:'#fff'}}>
                    <Header>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={{color:'#fff' ,fontSize:20}} />
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{color:'white'}}></Title>
                        </Body>
                        <Right>
                        <Button onPress={this.handleShare} transparent>
                                <Icon name="share" style={{color:'#fff' ,fontSize:20}} />
                            </Button>
                        </Right>
                    </Header>
                    <Content contentContainerStyle={{flex:1 ,height:WebViewHeight}}>
                        <WebView  source={{uri:url}} style={{flex:1,height:100}}
                        onError={this.handleClose} javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={true}
                        />
                    </Content>
                </Container>
    
                </Modal>
            )
        } else {
            return null;
        }
    }
}
