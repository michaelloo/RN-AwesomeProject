import React from "react";
import { Text, View } from "react-native";

const PresentationalContext = (props) => {
    return <View>
        <Text onPress={props.updateState}>{props.myState}</Text>
    </View>
}

export default PresentationalContext