import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import nfcManager from 'react-native-nfc-manager';
import Game from './Game';

function App(props) {
    const [hasNfc, setHasNfc] = React.useState(null);

    React.useEffect(() => {
        async function checkNfc() {
            const supported = await nfcManager.isSupported();
            if (supported) {
                await nfcManager.start();
            }
            setHasNfc(supported);
        }

        checkNfc();
    }, []);

    if(hasNfc === null) {
        return;

    } else if (!hasNfc) {
        return (
            <View style={styles.wrapper}>
                <Text>Your device doesn't support NFC</Text>
            </View>
        );
        
    }

   return <Game />;
}

const styles = StyleSheet({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
