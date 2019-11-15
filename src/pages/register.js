import React , {Component} from 'react';
import{StyleSheet,ScrollView,View,ImageBackground,Image ,Text} from 'react-native';

import {Actions} from 'react-native-router-flux';


export default class Register extends Component{
    state = {
        email:'',
        name:'',
        handicap:'',
        starting_position:'',        
        password:'',
        confirm_password:'',
    };    
    onLogin = () =>{
    }
    render(){
        return(
            <ScrollView>
                <Text>test</Text>
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
    profile:{
        flexDirection:"row",
    }
        
    
});
