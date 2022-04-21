import { StyleSheet, Dimensions } from "react-native";

let Height = Dimensions.get('window').height;

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: Height,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    header: {
        backgroundColor: '#f2f2f2',
        margin: 30,
        padding: 10,
        width: '90%',
        alignItems: 'center',
        borderRadius: 12
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 10,
        color: '#4951EC',
        alignSelf: 'center'
    },
    subtitle: {
        fontSize: 12,
        alignSelf: 'center',
        color: 'rgba(0,0,0,0.7)',
    },
    video: {
        width: '100%',
        height: 200,
        margin: 0,
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 1
    },
    
    viewContent: {
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    contentAcionamento: {
        backgroundColor: '#f2f2f2',
        // width: '50%',
        padding: 6,
        borderRadius: 12,
        height: 110,
        margin: 5
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        width: 140
    },
});