import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Svg, { Path, G, Defs } from "react-native-svg"
import { lightOrDark } from '../utils/LightOrDark'
import { randMount } from '../utils/RandomMount'


export default function Frame({ props, pallets }) {
    const [loading, setLoading] = useState(true)
    // console.log(pallets);

    const defualtSvg = {
        wayBack: {
            d: "M0 114.038l7.6-10.481C15.2 93.076 26.3 56.49 41.5 39c15.2-17.228 23.8-46.678 39-36 15.2 10.285 28.8 47.715 44 58 15.2 10.678 42.7 24.87 57.9 28.604 15.2 3.472 30.4 24.434 38 34.915L228 135H0v-20.962z",
            width: 228,
            height: 135,
            viewBox: "0 0 228 135"
        },
        middle: {
            d: "M0 68.42l7.6-5.291c7.6-5.29 22.8-15.872 38-24.7C60.8 29.732 89.3-4.39 104.5 1c15.2 5.191 23.3 40.809 38.5 46 15.2 5.39 24.2 7.2 39.4 9.086 15.2 1.752 30.4 12.333 38 17.624L228 79H0V68.42z",
            width: 228,
            height: 79,
            viewBox: "0 0 228 79"
        },
        front: {
            d: "M144 56.42l-4.567-5.291c-4.566-5.29-9.8-16.3-18.933-25.129-9.133-8.696-13.367-23.39-22.5-18-9.133 5.191-27.867 28.309-37 33.5-9.133 5.39-22.867 7.744-32 9.629-9.133 1.752-12.867 5.29-17.433 10.58L7 67h137V56.42z",
            width: 147,
            height: 71,
            viewBox: "0 0 147 71"
        }
    }
    // Check for brightest and adjust order of array
    // check for the brightest and place first in array

    const mountRandom = randMount[Math.floor(Math.random() * randMount.length - 1)]

    // Sort the lightest color to the background
    pallets.sort((color) => lightOrDark(color) === "dark")


    useEffect(() => {
        // console.log('Loading');
        // console.log('loading state', loading);


        setTimeout(() => {
            setLoading(false)
        }, 500);



        return () => {

            setLoading(true)
        }
    }, [])





    /// start with loading and check for undefined 
    // if everyting work go to pic
    const { wayBack, middle, front } = !mountRandom ? defualtSvg : mountRandom







    return (

        loading ? <Text>loading</Text> :

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
                        width={wayBack.width}
                        height={wayBack.height}
                        viewBox={wayBack.viewBox}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        {...props}
                    >
                        <Path
                            d={wayBack.d}
                            fill={`#${pallets[1]}`}
                        />
                    </Svg>
                </View>

                {/* 2 mountain, middle */}

                <View
                    style={{ left: 0, zIndex: 1, bottom: 0, position: "absolute" }}
                >
                    <Svg
                        width={middle.width}
                        height={middle.height}
                        viewBox={middle.viewBox}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        {...props}
                    >
                        <G filter="url(#prefix__filter0_i)">
                            <Path
                                d={middle.d}
                                fill={`#${pallets[2]}`}
                            />
                        </G>
                        <Defs></Defs>
                    </Svg>
                </View>

                {/* 3 mountain, front */}

                <View style={{ right: -3, zIndex: 2, bottom: -4, position: "absolute" }}>
                    <Svg
                        width={front.width}
                        height={front.height}
                        viewBox={front.viewBox}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        {...props}
                    >
                        <G filter="url(#prefix__filter0_d)">
                            <Path
                                d={front.d}
                                fill={`#${pallets[3]}`}
                            />
                        </G>
                        <Defs></Defs>
                    </Svg>
                </View>
            </View>

    )
}
