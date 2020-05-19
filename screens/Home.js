import React, {useState} from 'react';
import { TextInput, Text, View, CheckBox, Button, Keyboard, Image, TouchableOpacity} from 'react-native';
import {StyleHome} from '../styles/StyleHome';
import {MaterialIcons} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

import {createStackNavigator} from '@react-navigation/stack';


export default function Home({navigation}) {

    const Stack = createStackNavigator();

    return (
        <View style = { StyleHome.container}>

{/* HEADER */}
            <View style = { StyleHome.header}>
                <Text style = { StyleHome.textHome}>LOC NUOC 365</Text>
            </View>

{/* BODY */}
            <View style = { StyleHome.body}>
                <View style = { StyleHome.groupProfile}>
                    <Avatar
                        // style = { StyleHome.avatar}
                        rounded
                        title = "s"
                        source ={{
                            uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                    <Text style ={ StyleHome.name}>Tran Van Duong</Text>
                </View>
                
                {/* <TouchableOpacity> */}
                    <View style = { StyleHome.groupTienTrinh}>
                    <TouchableOpacity onPress = { () => navigation.navigate('TienTrinhDon') }>
                        <Image style = { StyleHome.image} source = {require ( "../assets/icons/tien_trinh.png")} ></Image>
                    </TouchableOpacity>  

                        <View style = { StyleHome.viewText} >
                        <Text style = { StyleHome.text} >Tiến trình đơn hàng</Text>
                        </View>
                    </View>
                {/* </TouchableOpacity> */}
                <View style = { StyleHome.groupDanhMuc}>
                    <Image style = { StyleHome.image} source = {require ('../assets/icons/danh_muc.png')} />
                    <Text style = { StyleHome.text} >Danh mục sản phẩm</Text>
                </View>

                <View style = { StyleHome.groupKeToan}>
                    <Image style = { StyleHome.image} source = {require ('../assets/icons/ke_toan_xac_nhan.png')} />
                    <Text style = { StyleHome.text} >Kế toán xác nhận</Text>
                </View>

                <View style = { StyleHome.groupXacNhan}>
                    <Image style = { StyleHome.image} source = {require ('../assets/icons/xac_nhan_thanh_toan.png')} />
                    <Text style = { StyleHome.text} >Xác nhận thanh toán</Text>
                </View>
            </View>
            
{/* FOOTER */}
            <View style = { StyleHome.footer}>
                <AntDesign name="home" size={24} color="black" />
                <MaterialIcons name="notifications-none" size={30} color="black" />
                <FontAwesome name="user-o" size={24} color="black" />
            </View>
        </View>
    );
}