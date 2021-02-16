import React, { useContext } from 'react'
import { Button, Input } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSavedTrack'

const TrackFrom = () => {
    const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()

    return (
        <>
            <Spacer />
            <Input value={name} onChangeText={changeName} placeholder="Track Name" />
            {recording
                ? <Button title="Stop" onPress={stopRecording} />
                : <Button title="Start Recording" onPress={startRecording} />
            }
            <Spacer />
            {!recording && locations.length
                ? <Button title='Save Recording'  onPress={saveTrack}/>
                : null
            }

        </>
    )
}

export default TrackFrom