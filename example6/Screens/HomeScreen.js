import React from 'react';
import { StyleSheet, Text, View,Image, TouchableHighlight} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Presiona la imagen</Text>
           
           <TouchableHighlight onPress={()=>navigation.navigate('WelcomeNav')}>
           <Image
            style={styles.tinyLogo}
            source={{ uri: 'https://fortyseven47.com/storage/2019/09/react-JC.png'}}
             />
        </TouchableHighlight>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  