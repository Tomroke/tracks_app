
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, linkText, routeName }) => {
    return (
        <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                <Text style={styles.signInLink}>
                    {linkText}
                </Text>
            </TouchableOpacity>
        </Spacer>
    )
}

const styles = StyleSheet.create({
    signInLink: {
        color: 'blue',
        fontSize: 16
    }
})

export default withNavigation(NavLink)
