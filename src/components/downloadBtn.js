import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Logo from '../assets/Logo'
import Svg, { Path } from "react-native-svg"
import DownloadIconSvg from '../assets/DownloadSvg'

export default function DownloadBtn({ onPress }) {

    return (
        <TouchableOpacity onPress={onPress}
            style={{
                flexDirection: "row", justifyContent: "flex-end",
                height: 70, width: 200
            }}
        >
            <Text>Download</Text>
            <View style={{ height: 70, width: 70 }} >
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                 >
                    <Path d="M24.59 16.59L17 24.17V4h-2v20.17l-7.59-7.58L6 18l10 10 10-10-1.41-1.41z" />
                    <Path
                        data-name="&lt;Transparent Rectangle&gt;"
                        fill="none"
                        d="M0 0h32v32H0z"
                    />
                </Svg>
            </View>



        </TouchableOpacity>
    )
}
