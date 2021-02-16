import React, { useContext, } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import {FontAwesome} from '@expo/vector-icons'

const AccountScreen = () => {
    const { signOut } = useContext(AuthContext)

    return (
        <SafeAreaView style={styles.android} forceInsert={{top: 'always'}}>
            <Text h2>AccountScreen</Text>
            <Spacer >
                <Button title="Sign Out" onPress={signOut} />
            </Spacer>
        </SafeAreaView>
    )
}


AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20}/>
}

const styles = StyleSheet.create({
    android: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 30 : 0
    }
})

export default AccountScreen