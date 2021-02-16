//import '../_mockLocation'
import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Spacer from '../components/Spacer'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext.js'
import useLocation from '../hooks/useLocation'
import TrackFrom from '../components/TrackForm'
import {FontAwesome} from '@expo/vector-icons'

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording])
    const [err] = useLocation(isFocused || recording, callback)

    return (
        <SafeAreaView style={styles.android} forceInsert={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map />
            <Spacer />
            {err ? <Text h4>Please enable location services</Text> : null}
            <TrackFrom />
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20}/>
}

const styles = StyleSheet.create({
    android: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 30 : 0
    }
})

export default withNavigationFocus(TrackCreateScreen)