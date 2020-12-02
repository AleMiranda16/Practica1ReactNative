import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen2() {
    return (
        <View style={styles.container}>
            <Text>About Screen 2</Text>
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