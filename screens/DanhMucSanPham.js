import React, {useState} from 'react';
import { TextInput, Text, View, CheckBox, Button, ScrollView, Image, TouchableOpacity} from 'react-native';

import {StyleTienTrinh} from '../styles/StyleTienTrinh';
import {StyleDanhMuc} from '../styles/StyleDanhMuc';

import {MaterialIcons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';

export default function DanhMucSanPham (){
    return(
        <View style = { StyleDanhMuc.container}>

{/* HEADER */}
            <View style = { StyleDanhMuc.header}>
                <Text style = { StyleDanhMuc.textHome}>LOC NUOC 365</Text>
            </View>

{/* BODY */}
            <View style = { StyleDanhMuc.body}>
                
                <View style = { StyleDanhMuc.viewTitle} >
                    <Image style ={ StyleDanhMuc.image} source = {require ('../assets/icons/danh_muc.png')} ></Image>
                    <Text style = { StyleDanhMuc.title}>Máy lọc nước 9 cấp lọc</Text>
                </View>
                    
                <View style = { StyleDanhMuc.groupSanPham} >
                <ScrollView>
                    <View style= { StyleDanhMuc.viewSanPham} >
                        <View style = { StyleDanhMuc.imageLoi}>
                            <View style = { StyleDanhMuc.viewLoi}></View>
                            <View style = { StyleDanhMuc.viewButtonKhac} >
                                <Button title= "Khác" color = '#fff' />
                            </View>
                        </View>
                        <View style = { StyleDanhMuc.viewInfo}>
                            <View style = { StyleDanhMuc.viewText} >
                                <Text>Giá: 100000 đ</Text>
                                <Text>Thời gian sử dụng: 3 tháng</Text>
                            </View>
                            
                        </View>
                    </View>

                    <View style= { StyleDanhMuc.viewSanPham} >
                        <View style = { StyleDanhMuc.imageLoi}>
                            <View style = { StyleDanhMuc.viewLoi}></View>
                            <View style = { StyleDanhMuc.viewButtonKhac} >
                                <Button title= "Khác" color = '#fff' />
                            </View>
                        </View>
                        <View style = { StyleDanhMuc.viewInfo}>
                            <View style = { StyleDanhMuc.viewText} >
                                <Text>Giá: 100000 đ</Text>
                                <Text>Thời gian sử dụng: 3 tháng</Text>
                            </View>
                            
                        </View>
                    </View>

                    <View style= { StyleDanhMuc.viewSanPham} >
                        <View style = { StyleDanhMuc.imageLoi}>
                            <View style = { StyleDanhMuc.viewLoi}></View>
                            <View style = { StyleDanhMuc.viewButtonKhac} >
                                <Button title= "Khác" color = '#fff' />
                            </View>
                        </View>
                        <View style = { StyleDanhMuc.viewInfo}>
                            <View style = { StyleDanhMuc.viewText} >
                                <Text>Giá: 100000 đ</Text>
                                <Text>Thời gian sử dụng: 3 tháng</Text>
                            </View>
                            
                        </View>
                    </View>
                    <View style= { StyleDanhMuc.viewSanPham} >
                        <View style = { StyleDanhMuc.imageLoi}>
                            <View style = { StyleDanhMuc.viewLoi}></View>
                            <View style = { StyleDanhMuc.viewButtonKhac} >
                                <Button title= "Khác" color = '#fff' />
                            </View>
                        </View>
                        <View style = { StyleDanhMuc.viewInfo}>
                            <View style = { StyleDanhMuc.viewText} >
                                <Text>Giá: 100000 đ</Text>
                                <Text>Thời gian sử dụng: 3 tháng</Text>
                            </View>
                            
                        </View>
                    </View>

                    <View style= { StyleDanhMuc.viewSanPham} >
                        <View style = { StyleDanhMuc.imageLoi}>
                            <View style = { StyleDanhMuc.viewLoi}></View>
                            <View style = { StyleDanhMuc.viewButtonKhac} >
                                <Button title= "Khác" color = '#fff' />
                            </View>
                        </View>
                        <View style = { StyleDanhMuc.viewInfo}>
                            <View style = { StyleDanhMuc.viewText} >
                                <Text>Giá: 100000 đ</Text>
                                <Text>Thời gian sử dụng: 3 tháng</Text>
                            </View>
                            
                        </View>
                    </View>

                    <View style= { StyleDanhMuc.viewSanPham} >
                        <View style = { StyleDanhMuc.imageLoi}>
                            <View style = { StyleDanhMuc.viewLoi}></View>
                            <View style = { StyleDanhMuc.viewButtonKhac} >
                                <Button title= "Khác" color = '#fff' />
                            </View>
                        </View>
                        <View style = { StyleDanhMuc.viewInfo}>
                            <View style = { StyleDanhMuc.viewText} >
                                <Text>Giá: 100000 đ</Text>
                                <Text>Thời gian sử dụng: 3 tháng</Text>
                            </View>
                            
                            
                        </View>
                    </View>
                </ScrollView>
                        
                </View>
              
            </View>
            

{/* GROUP THANHTOAN */}
            <View style = { StyleDanhMuc.viewThanhToan} >
                <View style = { StyleDanhMuc.groupThanhToan} >
                    <View style ={ StyleDanhMuc.viewDaChon} >
                        <Text>Đãchọn:</Text>
                        <Text>1</Text>
                    </View>
                    <View style ={ StyleDanhMuc.viewTongTien} >
                        <Text>Tổng tiền:</Text>
                        <Text>400000</Text>
                    </View>
                    <View style = { StyleDanhMuc.viewButtonNext} >
                        <View style = { StyleDanhMuc.buttonNext} >
                            <Button title = "Next" color = "#fff"  />
                        </View>
                        
                    </View>
                    
                </View>
            </View>
        </View>

    );
}