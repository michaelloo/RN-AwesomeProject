import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PresentationalContext = (props) => {
    return <View>
        <Text
         onPress= { props.updateState }
         style = { styles.myState }
        >
            {props.myState}
        </Text>
    </View>
}

export default PresentationalContext

const styles = StyleSheet.create ({
    myState: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    }
})