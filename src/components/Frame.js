import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Svg, { Path, G, Defs } from "react-native-svg"
import { lightOrDark } from '../utils/LightOrDark'
import { randMount } from '../utils/RandomMount'


export default function Frame({ props, pallets }) {
    const { loading, setLoading } = useState(false)
    // console.log(pallets);

    // Check for brightest and adjust order of array
    // check for the brightest and place first in array

    const mountRandom = randMount[Math.floor(Math.random() * randMount.length)]

    pallets.sort((color) => lightOrDark(color) === "dark")


    return (
        mountRandom.wayBack === undefined ?
            <ActivityIndicator size="large" color="#00ff00" />
            :
            <View
                style={{
                    justifyContent: "flex-end",
                    height: 350,
                    width: 250,
                    backgroundColor: !pallets ? "blue" : `#${pallets[0]}`,
                    borderWidth: 10,
                    borderColor: "white",
                    position: "relative",
                    elevation: 4,
                    shadowColor: 'black',
                    shadowOpacity: .2,
                    shadowOffset: { width: 1, height: 5 },

                }}>



                {/* 1 mountain , way back*/}
                <View>

                    <Svg
                        width={mountRandom.wayBack.width}
                        height={mountRandom.wayBack.height}
                        viewBox={mountRandom.wayBack.viewBox}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        {...props}
                    >
                        <Path
                            d={mountRandom.wayBack.d}
                            fill={`#${pallets[1]}`}
                        />
                    </Svg>
                </View>

                {/* 2 mountain, middle */}

                <View
                    style={{ left: 0, zIndex: 1, bottom: 0, position: "absolute" }}
                >
                    <Svg
                        width={mountRandom.middle.width}
                        height={mountRandom.middle.height}
                        viewBox={mountRandom.middle.viewBox}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        {...props}
                    >
                        <G filter="url(#prefix__filter0_i)">
                            <Path
                                d={mountRandom.middle.d}
                                fill={`#${pallets[2]}`}
                            />
                        </G>
                        <Defs></Defs>
                    </Svg>
                </View>

                {/* 3 mountain, front */}

                <View
                    style={{ right: -3, zIndex: 2, bottom: -4, position: "absolute" }}
                >

                    <Svg
                        width={mountRandom.front.width}
                        height={mountRandom.front.height}
                        viewBox={mountRandom.front.viewBox}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        {...props}
                    >
                        <G filter="url(#prefix__filter0_d)">
                            <Path
                                d={mountRandom.front.d}
                                fill={`#${pallets[3]}`}
                            />
                        </G>
                        <Defs></Defs>
                    </Svg>
                </View>
            </View>

    )
}
