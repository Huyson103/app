import React, {useState} from 'react';
import { TextInput, Text, View, CheckBox, Button, ScrollView, Image, TouchableOpacity} from 'react-native';
import {StyleTienTrinh} from '../styles/StyleTienTrinh';
import {MaterialIcons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';


import {createStackNavigator} from '@react-navigation/stack';


export default function TienTrinhDon({navigation}){
    
    const Stack = createStackNavigator();

    return (
        <View style = { StyleTienTrinh.container}>

{/* HEADER */}
            <View style = { StyleTienTrinh.header}>
                <Text style = { StyleTienTrinh.textHome}>LOC NUOC 365</Text>
            </View>

{/* BODY */}

            <View style = { StyleTienTrinh.body}>
                <ScrollView>

                    {/* //group Cho TH */}
                    <View style = { StyleTienTrinh.groupChoTH} >
                        <View style = { StyleTienTrinh.viewTitle} >
                            <Image
                                style = { StyleTienTrinh.image}
                                source = {require ("../assets/icons/don_cho_thuc_hien.png")}>

                            </Image>
                            <Text style = { StyleTienTrinh.title} >Đơn chờ thực hiện</Text>
                        </View>
                        <View style = { StyleTienTrinh.info} ></View>                    
                        {/* <View style = {StyleTienTrinh.viewButtonNhanDon} ><Button title = "Nhận đơn" color = '#fff' /></View> */}
                        <Button title = "Nhận đơn" />
                        
                    </View>
                    {/* group Dang TH */}

                    <View style = { StyleTienTrinh.groupDangTH} >
                        <View style = { StyleTienTrinh.viewTitle} >
                            <Image
                                style = { StyleTienTrinh.image}
                                source = {require ("../assets/icons/don_dang_thuc_hien.png")}>
                            </Image>
                            <Text style = { StyleTienTrinh.title} >Đơn đang thực hiện</Text>
                        </View>
                        <View style = { StyleTienTrinh.info}></View>
                        <View style = { StyleTienTrinh.groupButton}>
                            {/* <View style = {StyleTienTrinh.viewButton} ><Button title = "Xem" color = '#fff' /></View>
                            <View style = { StyleTienTrinh.viewButton} ><Button title = "Up ảnh" color ='#fff' /></View>
                            <View style = { StyleTienTrinh.viewButton} ><Button title = "Còn 29:56" color = '#fff' /></View>
                            <View style = { StyleTienTrinh.viewButton} ><Button title = "Thanh toán" color = '#fff' /></View> */}
                            <Button title = 'Xem'/>
                            <Button title = "Up ảnh"  />
                            <Button title = "Còn 29:56"  />
                            <Button
                                title = "Thanh toán"
                                onPress ={() => navigation.navigate ("DanhMucSanPham")} />
                        </View>
                        
                    </View>

                    {/* group Da Hoan thanh */}
                    <View style = { StyleTienTrinh.groupDaHoanThanh} >
                        <View style = { StyleTienTrinh.viewTitle} >
                            <Image
                                style = { StyleTienTrinh.image}
                                source = {require ("../assets/icons/don_da_hoan_thanh.png")}>

                            </Image>
                            <Text style = { StyleTienTrinh.title} >Đơn đã hoàn thành</Text>
                        </View>
                        <View style = { StyleTienTrinh.info} ></View>
                    </View>

                    {/* group phieu muon hang */}
                    <View style = { StyleTienTrinh.groupPhieuMuon} >
                    <View style = { StyleTienTrinh.viewTitle} >
                            <Image
                                style = { StyleTienTrinh.image}
                                source = {require ("../assets/icons/don_cho_thuc_hien.png")}>

                            </Image>
                            <Text style = { StyleTienTrinh.title} >Đơn chờ thực hiện</Text>
                        </View>
                        <View style = { StyleTienTrinh.info} ></View>
                    </View>
                </ScrollView>
            </View>

                {/* Button Phieu Muon */}
            <View style = { StyleTienTrinh.viewButtonPhieuMuon}>
                <View style = { StyleTienTrinh.buttonPhieuMuonHang}>
                    <Button title ="Phiếu mượn hàng" color = '#fff' />
                </View>
                
            </View>

                  
{/* FOOTER */}
            <View style = { StyleTienTrinh.footer}>
                <TouchableOpacity><AntDesign name="home" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity><MaterialIcons name="notifications-none" size={30} color="black" /></TouchableOpacity>
                <TouchableOpacity><FontAwesome name="user-o" size={24} color="black" /></TouchableOpacity>
            </View>
        </View>
    );
}