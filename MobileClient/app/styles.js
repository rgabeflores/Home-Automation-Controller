import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonOff: {
     alignItems: 'center',
     backgroundColor: 'lightblue',
    },
    buttonOn: {
      alignItems: 'center',
      backgroundColor: 'blue',
    },
    buttonText: {
      padding: 20,
      color: 'white'
    },
    buttonContainer: {
      margin: 5,
      minWidth: "50%"
    }
  });

  export default styles;