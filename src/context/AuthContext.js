import AsyncStorage from '@react-native-async-storage/async-storage';
import factoryDataContext from './factoryDataContext.js'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin':
            return { errorMessage: '', token: action.payload }
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        case 'sign_out':
            return {token: null, errorMessage: ''}
        default:
            return state
    }
}

const tryLocalSignIn = dispatch => async () => {
    const token  = await AsyncStorage.getItem('token')
    if(token){
        dispatch({type: signIn, payload: token})
        navigate('TrackList')
    }else{
        navigate('SignUp')
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
}

const signUp = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password })
            await AsyncStorage.setItem('@token', response.data.token)
            dispatch({ type: 'signin', payload: response.data.token })
            navigate('TrackList')
        } catch (error) {
            console.log(error)
            dispatch({ type: 'add_error', payload: 'Something went wrong with signing up' })
        }
    }
}

const signIn = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signin', { email, password })
            await AsyncStorage.setItem('@token', response.data.token)
            dispatch({ type: 'signin', payload: response.data.token })
            navigate('TrackList')
        } catch (error) {
            console.log(error)
            dispatch({ type: 'add_error', payload: 'Something went wrong with signing in' })
        }
    }
}

const signOut = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token')
        dispatch({type: 'sign_out'})
        navigate('loginFlow')
    }
}

export const { Provider, Context } = factoryDataContext(
    authReducer,
    { signIn, signUp, signOut, clearErrorMessage,tryLocalSignIn },
    { token: null, errorMessage: '' }
)