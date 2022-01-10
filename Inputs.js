import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Inputs = (props) => {
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const handleEmail = (text) => {
        setState({email: text})
    }

    const handlePassword = (text) => {
        setState({password: text})
    }

    const login = () => {
        alert('email: ' + state.email + ' | password: ' + state.password)
    }

    return (
        <View style = { styles.container }>
            <TextInput 
                style = { styles.input }
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = { this.handleEmail }
            />
            <TextInput 
                style = { styles.input }
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = { this.handlePassword }
            />
            <TouchableOpacity
                style = { styles.submitButton }
                onPress = { login }
            >
                <Text style = { styles.submitButtonText }>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Inputs;

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })