import React from 'react';
import {StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import nfcManager from 'react-native-nfc-manager';
import Game from './Game';
import AndroidPrompt from './AndroidPrompt';

function App(props) {
    const [hasNfc, setHasNfc] = React.useState(null);
    const promptRef = React.useRef();

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
                <TouchableOpacity
                    onPress={() => {
                        promptRef.current.setVisible(true);
                    }}
                >
                    <AndroidPrompt ref={promptRef}/> 
                </TouchableOpacity>
            </View>
        );
        
    }

   return <Game />;
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
