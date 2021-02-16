import React, { useState, } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AuthForm = ({ headerText, errorMessage, authButtonText, onSubmit }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            {errorMessage 
            ? <Text style={styles.errorStyle}>
                {errorMessage}
              </Text> 
            : null}
            <Spacer>
                <Button
                    title={authButtonText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errorStyle: {
        fontSize: 18,
        color: 'red',
        marginLeft: 15
    },
})

export default AuthForm