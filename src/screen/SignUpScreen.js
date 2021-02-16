import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'

const SignUpScreen = () => {
    const { state, signUp, clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
                headerText='Sign up for Tracker!'
                errorMessage={state.errorMessage}
                authButtonText='Sign Up'
                onSubmit={signUp}
            />
            <NavLink
                linkText='Already have an account? Sign in instead'
                routeName='SignIn'
            />
        </View>
    )
}

SignUpScreen.navigationOptions = () => {
    return { headerShown: false }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default SignUpScreen