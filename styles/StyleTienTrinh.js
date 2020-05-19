import {StyleSheet} from 'react-native';

export const StyleTienTrinh = StyleSheet.create({
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    
    //group cho th
    groupChoTH:{
        height: 200,
        borderRadius: 12,
        backgroundColor: '#dbdbf4',
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 4,
    },
    viewTitle:{
        flexDirection: "row",
        marginLeft: 6,
        marginRight: 6,
        flex: 0.7,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        alignItems: "center",
    },
    info:{
        flex: 2.5,
        marginLeft: 6,
        marginRight: 6,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 6,
    },  
    groupButton:{
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 6,
    },
    viewButton:{
        backgroundColor: '#2e90fb',
        borderRadius: 5,
    },
    viewButtonNhanDon:{
        backgroundColor: '#2e90fb',
        borderRadius: 5,
        width: 90,
        marginBottom: 6,
        marginLeft: 6,

    },
    image:{
        height: 25,
        width: 25,
        marginLeft: 6,
    },
    title:{
        fontSize: 15,
        fontWeight: '400',
        letterSpacing: -0.36,
        lineHeight: 22,
        fontWeight: '400',
        marginLeft: 10,
    },  
    //group ddang th
    groupDangTH:{
        height: 200,
        borderRadius: 12,
        backgroundColor: '#dbdbf4',
        marginTop: 4,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 4,
    },
    groupDaHoanThanh:{
        height: 200,
        borderRadius: 12,
        backgroundColor: '#dbdbf4',
        marginTop: 4,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 4,
    },
    groupPhieuMuon:{
        height: 200,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        backgroundColor: '#dbdbf4',
        marginTop: 4,
        marginLeft: 8,
        marginRight: 8,
    },
    // BUTTON PHIEU MUON
    viewButtonPhieuMuon:{
        flex: 0.6,
        backgroundColor: '#b8b7eb',
    },
    buttonPhieuMuonHang:{
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 5,
        backgroundColor: '#2e90fb',
    },
    //FOOTER
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
