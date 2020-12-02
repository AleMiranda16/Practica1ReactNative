import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Welcome to React Native</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  
