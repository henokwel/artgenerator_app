import React, { useEffect, useState, useCallback, useRef } from 'react'
import { View, Text, Dimensions, PermissionsAndroid, Button, Platform } from 'react-native'
import Frame from './Frame';
import * as MediaLibrary from 'expo-media-library';
import ViewShot, { captureRef } from "react-native-view-shot";
import DownloadBtn from './downloadBtn';
import Poems from '../utils/PoemData';



const { width } = Dimensions.get("screen")





async function hasAndroidPermission() {
    // const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    // const pp = PermissionsAndroid.PERMISSIONS.MEDIA_LIBRARY;

    const hasPermission = MediaLibrary.requestPermissionsAsync();
    if (hasPermission) {
        return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
}

async function savePicture(tag) {
    if (Platform.OS === "android" && !(await hasAndroidPermission())) {
        return;
    }

    // await CameraRoll.save(tag)
    await MediaLibrary.saveToLibraryAsync(tag)

};


export default function ShowRoom({ props, route, navigation }) {

    const { index, item } = route.params;
    const [capture, setCapture] = useState("")

    const viewRef = useRef()

    const selectedPoem = Poems[Math.floor(Math.random() * Poems.length)]


    const onCapture = async () => {
        captureRef(viewRef, {
            // height: 1900,
            // width: 960,
            quality: 1,
            format: 'png',
        }).then(
            uri => savePicture(uri),
            error => console.error("Oops, snapshot failed", error)
        )
            .catch(e => console.log("Cant download image", e))
    }

    return (
        <View
            style={{
                flex: 1, alignItems: "center", justifyContent: "center",
                elevation: 1,

            }}>


            {
                !item ?
                    <Text>loading..</Text> :

                    <ViewShot ref={viewRef}>
                        <Frame
                            pallets={item.pattern}
                        />
                    </ViewShot>
            }

            <View style={{ marginTop: 15, width: 240, marginBottom: 15 }} >
                <Text style={{ fontStyle: "italic" }}>
                    {selectedPoem.author}
                </Text>
            </View>

            <View style={{ width: 240, maxHeight: 150, }}>
                <Text style={{ fontSize: 16, lineHeight: 25, textAlign: "justify" }} >
                    {selectedPoem.content}
                </Text>
            </View>

            <View style={{
                height: 80, width, alignItems: "flex-end",
                marginTop: 45,
            }}>

                <Button
                    title="Download"

                    onPress={onCapture}
                />
                <DownloadBtn />

            </View>
        </View >
    )
}
