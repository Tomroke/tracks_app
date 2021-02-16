import { useContext } from 'react'
import { Context as TracksContext } from '../context/TracksContext'
import { Context as LocationContext } from '../context/LocationContext'
import {navigate} from '../navigationRef'

export default () => {
    const { createTracks } = useContext(TracksContext)
    const {
        state: { locations, name },
        reset
    } = useContext(LocationContext)

    const saveTrack = async () => {
        await createTracks(name, locations)
        reset()
        navigate('TrackList')
    }

    return [saveTrack]
}