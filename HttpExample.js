import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const HttpExample = () => {
    const [state, setState] = useState({
        data: ""
    })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', { method: "GET" })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                setState({data: responseJson})
            })
            .catch((error) => {
                console.error(error)
            })
    })

    return (
        <View>
            <Text>
                {state.data.body}
            </Text>
        </View>
    )
}

export default HttpExample;