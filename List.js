import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const List = () => {
    const state = {
        names: [
            {
                id: 0,
                name: "Ben"
            },
            {
                id: 1,
                name: "Susan"
            },
            {
                id: 2,
                name: "Rovert"
            },
            {
                id: 3,
                name: "Mary"
            },
        ],
        alertItemName: (item) => {
            alert(item.name)
        }
    }

    return (
        <View>
            {state.names.map( (item, index) => (
                <TouchableOpacity
                key = { item.id }
                style = { styles.container }
                onPress = { () => state.alertItemName(item) }
                >
                <Text style = { styles.text }>
                    {item.name}
                </Text>
                </TouchableOpacity>
            )
            )}
        </View>
    )
}

export default List

const styles = StyleSheet.create( {
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
     },
     text: {
        color: '#4f603c'
     }
})