import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, Dimensions, PermissionsAndroid, Button, Platform } from 'react-native'
import Frame from './Frame';
import { ViewShot, captureRef, captureScreen } from "react-native-view-shot";
import DownloadBtn from './downloadBtn';
import Poems from '../utils/PoemData';

const { width } = Dimensions.get("screen")

export default function ShowRoom({ props, route, navigation }) {

    const { index, item } = route.params;
    const [capture, setCapture] = useState("")

    const selectedPoem = Poems[Math.floor(Math.random() * Poems.length)]

    return (
        <View style={{
            flex: 1, alignItems: "center", justifyContent: "center",
            elevation: 1,

        }}>

            {
                !item ?
                    <Text>loading..</Text> :

                    <Frame
                        pallets={item.pattern}
                    />
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

                {/* <Button
                    title="Download"

                    onPress={() => handleCapture}
                /> */}
                <DownloadBtn />

            </View>
        </View>
    )
}
