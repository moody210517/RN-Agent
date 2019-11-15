import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, ImageBackground,Image } from 'react-native';

import {Actions} from 'react-native-router-flux';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Login extends Component {
    state = {
        email:'',
        password:''
    };    
    onLogin = () =>{
        Actions.AppView();
    }

    goToRegister = () =>{
        console.log("download data from server placeholder");
        Actions.Register();
    }
    render(){
        return(
            <ScrollView>                
                <Text style={{color:"red"}}>test</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',      
      flexDirection:"column"
    },
});
