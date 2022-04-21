import { StyleSheet, Dimensions } from "react-native";

let Height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8FF',
        // height: Height,
        width: width,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    img: {
        height: 300,
        width: 300,
        marginTop: -30
    },
    title: {
        fontSize: 22,
        marginTop: 20,
        fontWeight: '700',
        color: '#4951EC'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 12,
        // fontWeight: '700',
        marginTop: 10,
        color: 'rgba(0,0,0,0.7)',
        width: '80%'
    },
    btn: {
        padding: 15,
        backgroundColor: '#4951EC',
        margin: 30,
        borderRadius: 12,
        width: '80%',
        position: 'absolute',
        bottom: 10
    },
    titleBtn: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 12,
    },


    // DASHBOARD
    header: {
        paddingTop: 50,
        backgroundColor: '#4951EC',
        height: 125,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnSettings: {
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 12,
    },
    containModal: {
        backgroundColor: '#fff',
        marginTop: 90,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '100%'
    },
    titleUser: {
        fontSize: 22,
        margin: 20,
        fontWeight: '700',
        color: '#4951EC',
        width: '80%'
    },
    inputUser: {
        fontSize: 19,
        padding: 15
    },
    btnSave: {
        padding: 15,
        backgroundColor: '#4951EC',
        margin: 30,
        borderRadius: 12,
        width: '80%',
        position: 'absolute',
        bottom: 100
    },
    titleBtnSave: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 12,
    },
    user: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 19,
    },
    userInfo: {
        color: '#fff',
        fontSize: 12,
    },
    viewContent: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    textTitle: {
        fontWeight: '700',
        fontSize: 15,
        color: 'rgba(0,0,0,0.7)',
        marginTop: 20,
        marginLeft: 20
    },
    contentAcionamento: {
        backgroundColor: '#f2f2f2',
        // backgroundColor: '#000',
        height: 110,
        borderRadius: 8,
        padding: 10,
        width:  '100%',
        marginTop: 5
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentInfo: {

    },
    contentInfoTitle: {
        fontWeight: '700',
        fontSize: 13,
        color: '#4951EC',
        width: 120
    },
    contentInfoSubTitle: {
        fontSize: 11,
        color: 'rgba(0,0,0,0.7)',
        width: 130

    },
    contentFish: {
        flexDirection: 'row'
    },
    imgfish: {
        height: 150,
        width: 150
    },
    textFish: {
        fontSize: 11,
        color: 'rgba(0,0,0,0.7)',
        width: '28%'
    },
    btnComment: {
        borderColor: '#4951EC',
        borderWidth: 1,
        borderRadius: 8,
        width: '30%',
        marginTop: 10,
        padding: 5
    },
    titleBtnComment: {
        color: '#4951EC',
        fontWeight: '800',
        textAlign: 'center',
        fontSize: 13,
    }

});