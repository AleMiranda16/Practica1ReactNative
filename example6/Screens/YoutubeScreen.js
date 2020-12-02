import React, { useState, useEffect } from "react";
import { View, StyleSheet, ToastAndroid, Button } from "react-native";
import Constants from "expo-constants";

const YoutubeScreen = () => {
    const showToast = () => {
        ToastAndroid.show("Usando el toast para android", ToastAndroid.SHORT);
      };
    return (
        <View style={styles.container}>
            <Button title="Soy un boton" onPress={() => showToast()} />
        </View>
    )
}

export default YoutubeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  