import { StyleSheet, Dimensions } from "react-native";
let width = Dimensions.get('window').width;

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8FF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 200,
        width: 200,
        marginTop: -30
    },
    viewInput: {
        width: width,
        margin: 0,
        padding: 10
    },
    input: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)',
        color: 'rgba(0,0,0,0.9)',
        margin: 10
    },
    title: {
        fontSize: 22,
        // marginTop: 20,
        fontWeight: '700',
        color: '#4951EC'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 12,
        // fontWeight: '700',
        // marginTop: 10,
        color: 'rgba(0,0,0,0.6)',
        width: '50%'
    },
    btn: {
        padding: 15,
        backgroundColor: '#4951EC',
        borderRadius: 12,
        width: '80%',
    },
    titleBtn: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 12,
    },
    viewAccounts: {
        flexDirection: 'row',
        padding: 10,
        width: '80%',
        margin: 10,
        justifyContent: 'space-between'
    },
    btnFacebook: {
        padding: 15,
        backgroundColor: '#4951EC',
        borderRadius: 12,
        width: '35%',
    },
    btnIntagram: {
        padding: 15,
        borderRadius: 12,
        width: '35%',
    },
    iconF: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
    },
    iconI: {
        fontSize: 25,
        color: 'rgba(0,0,0,0.6)',
        textAlign: 'center',
    }
})