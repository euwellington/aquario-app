import { StyleSheet, Dimensions } from "react-native";

let Height = Dimensions.get('window').height;

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: Height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        backgroundColor: '#fff',
        padding: 10,
        paddingTop: 10
    },
    img: {
        width: 350,
        height: 350,
    },
    contentInfoTitle: {
        // fontWeight: '700',
        fontSize: 13,
        color: 'rgba(0,0,0,0.6)',
        width: '70%',
        textAlign: 'center'
    },
    ip: {
        fontWeight: '700',
        fontSize: 13,
        color: '#4951EC',
    },
    centeredView: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
});