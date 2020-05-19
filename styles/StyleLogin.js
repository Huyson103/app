import {StyleSheet} from 'react-native';

export const  StyleLogin = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#5856D6',
    },
    header:{
        flex: 1,

    },
    body:{
        flex:2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    titleUser:{
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 30,
    },
    inputText:{
        flexDirection: "row",
        padding: 15,
        margin: 15,
        backgroundColor: '#D8D8D8',
        height: 50,
        width: "92%",
        justifyContent: "center",
        borderRadius: 10,
    },
    titlePass:{
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 5,
    },
    viewCheckBox:{
        margin: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    checkBox:{
        height: 20,
        width: 20,
        paddingTop: 5,
        borderColor: 'black',
        borderRadius: 2,
    },
    titleCheckBox:{
        fontSize: 15,
        paddingLeft: 10,
    },
    viewButton:{
        margin: 15,
        borderRadius: 10,
        height: 40,
        width: "93%",
        backgroundColor: "#5856D6",
    },


})