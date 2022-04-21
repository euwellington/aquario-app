import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8FF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 13,
    }
})