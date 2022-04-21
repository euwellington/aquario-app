import { StyleSheet, Dimensions } from "react-native";
let Height = Dimensions.get('window').height;

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8FF',
        height: Height
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    HeaderUser: {
        backgroundColor: '#4951EC',
        borderBottomColor: 'rgba(0,0,0,0.0300)',
        borderBottomWidth: 1,
        padding: 25,
        paddingTop: 40,
        flexDirection: 'row'
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    img: {
        height: 70,
        width: 70,
        borderRadius: 60,
        marginRight: 20
    },
    user: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FFF'
    },
    edit: {
        fontSize: 13,
        fontWeight: '900',
        color: '#FFF',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 19,
        borderBottomColor: 'rgba(0,0,0,0.0600)',
        borderBottomWidth: 1,
    },
    icon: {
        alignSelf: 'center',
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        color: '#4951EC'
    },
    textInfo: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.7)',
    }

})