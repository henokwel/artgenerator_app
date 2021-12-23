import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Logo from '../assets/Logo'
import Svg, { Path } from "react-native-svg"
import DownloadIconSvg from '../assets/DownloadSvg'

export default function DownloadBtn({ onPress }) {

    return (
        <TouchableOpacity onPress={onPress}
            style={{
                flexDirection: "row", justifyContent: "center",
                alignItems: "center",
                height: 70, width: 200,
                backgroundColor: "#3B3E47",
                width: 190

            }}
        >
            <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Download</Text>
            <View style={{ height: 30, width: 30, marginLeft: 10 }} >
                {/* <Image source={DownloadIconSvg} /> */}
                <Svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-down" class="svg-inline--fa fa-arrow-alt-circle-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <Path fill="#FFFFFF" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"></Path>
                </Svg>
                {/* <Svg

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
                </Svg> */}
            </View>



        </TouchableOpacity>
    )
}
