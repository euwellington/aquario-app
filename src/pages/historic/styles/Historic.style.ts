import { StyleSheet, Dimensions } from "react-native";

let Height = Dimensions.get('window').height;

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        height: Height,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    header: {
        backgroundColor: '#fff',
        // height: 150,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 20
    },
    headertitle: {
        fontWeight: '700',
        fontSize: 18,
        color: 'rgba(0,0,0,0.8)'
    },
    headersubtitle: {
        fontWeight: '700',
        fontSize: 20,
        color: '#fff',
        padding: 10,
        backgroundColor: '#4951EC',
        width: 50,
        height: 50,
        textAlign: 'center',
        borderRadius: 13,
        marginTop: 5
    },
    content: {
        // justifyContent: 'space',
        flexDirection: 'row',
        padding: 16,
        borderBottomColor: 'rgba(0,0,0,0.0300)',
        borderBottomWidth: 1,
    },
    viewIcon: {
        backgroundColor: 'rgba(0,0,0,0.0400)',
        marginRight: 10,
        borderRadius: 60,
        height: 60,
        width: 60,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center'
    },
    icon: {
        fontSize: 26,
        color: 'rgba(0,0,0,0.6)',
        // margin: 10
    },
    contenttitle: {
        fontWeight: '700',
        fontSize: 15,
        color: '#4951EC'
    },
    contentsubtitle: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.9)',
        // width:' 90%'
    },
    contentData: {
        fontSize: 11,
        color: 'rgba(0,0,0,0.6)'
    }
});