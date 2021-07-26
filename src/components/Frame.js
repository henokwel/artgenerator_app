import React, { useEffect, useState, useRef } from 'react'
import { View, Text, Animated } from 'react-native'
import Svg, { Path, G, Defs } from "react-native-svg"
import { defualtSvg } from '../utils/DataPattern'
import { lightOrDark } from '../utils/LightOrDark'
import { randMount } from '../utils/RandomMount'
import LottieView from 'lottie-react-native'


export default function Frame({ props, pallets }) {
    const [loading, setLoading] = useState(true)
    // console.log(pallets);


    // Check for brightest and adjust order of array
    // check for the brightest and place first in array

    const mountRandom = randMount[Math.floor(Math.random() * randMount.length - 1)]

    // Sort the lightest color to the background
    pallets.sort((color) => lightOrDark(color) === "dark")
    const fadeBack = useRef(new Animated.Value(0)).current;

    const fadeMiddle = useRef(new Animated.Value(0)).current;
    const fadeFront = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds

        Animated.timing(fadeBack, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();

        Animated.timing(fadeMiddle, {
            toValue: 1,
            duration: 950,
            useNativeDriver: true
        }).start();

        Animated.timing(fadeFront, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true
        }).start();
    };

    useEffect(() => {
        // console.log('Loading');
        // console.log('loading state', loading);
        setTimeout(() => {
            setLoading(false)
            fadeIn()
        }, 1700);
        return () => {
            setLoading(true)
        }
    }, [])


    /// start with loading and check for undefined 
    // if everyting work go to pic
    const { wayBack, middle, front } = mountRandom === undefined ? defualtSvg : mountRandom


    return (

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

            {
                loading ?
                    <LottieView source={require('../assets/64407-art-education-icon.json')} autoPlay loop />
                    :

                    <>
                        {/* // 1 mountain , way back */}
                        <Animated.View style={{ opacity: fadeBack }}>
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
                        </Animated.View>

                        {/* //2 mountain, middle */}

                        <Animated.View style={{
                            left: 0, zIndex: 1, bottom: 0, position: "absolute",
                            opacity: fadeMiddle
                        }}                >
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
                        </Animated.View>

                        {/* // 3 mountain, front */}

                        <Animated.View style={{
                            right: -3, zIndex: 2, bottom: -4, position: "absolute",
                            opacity: fadeFront

                        }}>
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
                        </Animated.View>
                    </>
            }
        </View>

    )
}
