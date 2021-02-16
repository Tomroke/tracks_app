import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'

const SignInScreen = () => {
    const { state, signIn, clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
                headerText='Login to Tracker!'
                errorMessage={state.errorMessage}
                authButtonText='Sign In'
                onSubmit={signIn}
            />
            <NavLink
                linkText='Dont have an account? Sign up instead'
                routeName='SignUp'
            />
        </View>
    )
}

SignInScreen.navigationOptions = () => {
    return { headerShown: false }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default SignInScreen