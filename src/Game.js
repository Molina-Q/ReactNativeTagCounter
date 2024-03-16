import React from "react";
import { View, Text, StyleSheet } from "react-native";
import nfcManager, { NfcEvents } from "react-native-nfc-manager";

import React from 'react'

function Game(props) {
    async function scanTag() {
        nfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
            console.warn('tag found', tag);
        })
        await nfcManager.registerTagEvent();
    }
  return (
    <View style={styles.wrapper}>
        <Text>NFC Game</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Game