import React, {useState} from 'react';
import { TextInput, Text, View, CheckBox, Button, Keyboard} from 'react-native';
import {StyleLogin} from '../styles/StyleLogin';
import {MaterialIcons} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import {createStackNavigator} from '@react-navigation/stack';




export default function Login({navigation}){
    
    const [isSelected, setSelection] = useState(false);

    const Stack = createStackNavigator();

    return(
        <View style = {StyleLogin.container}>
            <View style = { StyleLogin.header} ></View>
            <View style = { StyleLogin.body} >

                <Text style = { StyleLogin.titleUser}>User name</Text>
                <View style = { StyleLogin.groupInputText}></View>

                <TextInput style ={StyleLogin.inputText} placeholder = "user name">
                {/* <Feather name="user" size={24} color="black" /> */}
                </TextInput>               
               
                <Text style = { StyleLogin.titlePass} >Pass word</Text>
                <TextInput style = { StyleLogin.inputText} placeholder = "pass word" secureTextEntry = {true}>
                    {/* <Feather name = 'lock' size={20} color ='black'/> */}
                </TextInput>

                <View style = { StyleLogin.viewCheckBox}>
                    <CheckBox
                        style = { StyleLogin.checkBox}
                        value = {isSelected}
                        onValueChange = {setSelection}>
                        
                    </CheckBox>
                    <Text style = { StyleLogin.titleCheckBox}>Ghi nhớ đăng nhập</Text>
                </View>

                <View style ={ StyleLogin.viewButton}>
                    <Button
                        title = "Đăng nhập"
                        color = "#fff"
                        onPress = {() => navigation.navigate('Home')}
                        />
                </View>

            </View>
        </View>
    );
}