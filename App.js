import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import SignUpScreen from './src/screen/SignUpScreen'
import SignInScreen from './src/screen/SignInScreen'
import TrackListScreen from './src/screen/TrackListScreen'
import TrackCreateScreen from './src/screen/TrackCreateScreen'
import TrackDetailScreen from './src/screen/TrackDetailScreen'
import AccountScreen from './src/screen/AccountScreen'
import ResolveAuthScreen from './src/screen/ResolveAuthScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TracksContext'
import { setNavigator } from './src/navigationRef'
import {FontAwesome} from '@expo/vector-icons'

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
})

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="the-list" size={20}/>
}

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => { setNavigator(navigator) }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>


  )
}