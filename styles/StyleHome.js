import {StyleSheet} from 'react-native';

export const StyleHome = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#5856D6',
    },
    // HEADER
    header:{
        flex: 1.2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    textHome:{
        fontSize: 30,
        color: "#fff",
    }, 
    // BODY
    body:{
        flex: 8,
        backgroundColor: '#b8b7eb',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },
    //PROFILE
    groupProfile:{
        marginLeft: 8,
        marginRight: 8,
        marginTop: 8,
        marginBottom: 4,
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:  "space-around",
    },
    avatar:{
        height: 40,
        width: 40,

    },
    name:{
        fontSize: 25,
        color: 'black',
    },
    image:{
        height: 60,
        width: 60,
    },
    
    // TIENTRINH
    groupTienTrinh:{
        flex: 1,
        backgroundColor: '#eeeeee',
        borderRadius: 5,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 4,
        marginBottom: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    viewText:{
        height: 50,
        backgroundColor: 'lightblue',
        // alignItems: "center",
        // justifyContent: "center",
        // alignContent: "center",
    },
    text:{
        justifyContent: "center",
        // backgroundColor: 'pink',
        height: 40,
        color: '#000000',
        fontSize: 25,
        letterSpacing: -0.6,
        lineHeight: 22,
        fontWeight: '400',
    },

    // DANHMUC
    groupDanhMuc:{
        flex: 1,
        backgroundColor: '#eeeeee',
        borderRadius: 5,
        margin: 8,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 4,
        marginBottom: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },

    // KETOAN
    groupKeToan:{
        flex: 1,
        backgroundColor: '#eeeeee',
        borderRadius: 5,
        margin: 8,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 4,
        marginBottom: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },

    // XACNHAN
    groupXacNhan:{
        flex: 1,
        borderRadius: 5,
        margin: 8,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 4,
        marginBottom: 8,
        backgroundColor: '#eeeeee',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    
    // FOOTER
    footer:{
        flex: 0.5,
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    tabHome:{

    },
    tabNotification:{

    },
    tabProfile:{

    }

})