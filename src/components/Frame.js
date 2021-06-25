import React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path, G, Defs } from "react-native-svg"


const randMount = [
    {
        id: 1,
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

    },
    {
        id: 2,
        wayBack: {
            d: "M0 79l14.5-16c7.6-10.481 20.8-6.51 36-24 15.2-17.228 33.8-37.178 49-26.5C114.7 22.785 141.482-4.99 150 2c19.5 16 22.3 23.266 37.5 27 15.2 3.472 25.3 42.038 32.9 52.519L228 92H0V79z",
            width: 228,
            height: 92,
            viewBox: `0 0 228 92`,
        },
        middle: {
            d: "M0 75.679v-13.09V5.16c14-21.795 65.8 32.268 81 35.998 10 4.169 46.8 16.109 62 19.7 15.2 3.73 24.2 4.983 39.4 6.287 15.2 1.213 30.4 8.534 38 12.194L228 83H0v-7.321z",
            width: 228,
            height: 83,
            viewBox: `0 0 228 83`,
        },
        front: {
            d: "M144 139.208l-.5-8.241c0-5.508 1.074-9.14 0-21.188-1-11.216 0-29.937 0-55.279-2.5-10-18.5-52.9-36-47.5-9.133 4.478-38.5 58.5-45.7 67.5-5.8 6-45.667 64.708-50.233 69.104L7 148h137v-8.792z",
            width: 147,
            height: 152,
            viewBox: `0 0 147 152`,
        },

    },
    {
        id: 3,
        wayBack: {
            d: "M0 170l14.5-16c7.6-10.481 11.3-16.51 26.5-34C56.2 102.772 97.8-9.678 113 1c15.2 10.285 37.5 71.5 43.5 81 13.469 21.327 15.8 34.266 31 38 15.2 3.472 25.3 42.038 32.9 52.519L228 183H0v-13z",
            width: 228,
            height: 183,
            viewBox: `0 0 228 183`,
        },
        middle: {
            d: "M0 124.679v-13.09C0 102.248 44 13.5 61 1c21-1 36.5 76.842 48.5 92.5 7.16 9.342 18.3 12.767 33.5 16.359 15.2 3.729 24.2 4.982 39.4 6.286 15.2 1.213 30.4 8.534 38 12.195L228 132H0v-7.321z",
            width: 228,
            height: 132,
            viewBox: `0 0 228 132`,
        },
        front: {
            d: "M144 66.5l-.5-5.156c0-3.445 1.074-5.718 0-13.255-1-7.017-37.8-40.838-54.3-42.089-11 0-39.2 34.72-46.7 47.545-7 8.4-4.5 5.187-12.5 9.071-6.412 3.113-13.867 3.884-18.433 6.634L7 72h137v-5.5z",
            width: 147,
            height: 76,
            viewBox: `0 0 147 76`,
        },
    },
    ,
    {
        id: 4,
        wayBack: {
            d: "M0 145.948l27.5-27.538c7.6-10.481 19.5-52.43 29-55.5 32.5-10.5 33-59 55-62 19.5-10 35.159 65.5 38.5 76 7 22 17.2 40.87 32.4 44.604 15.2 3.471 30.4 24.434 38 34.915l7.6 10.481H0v-20.962z",
            width: 228,
            height: 167,
            viewBox: `0 0 228 167`,
        },
        middle: {
            d: "M0 124.679v-13.09C0 102.248 44 13.5 61 1c21-1 36.5 76.842 48.5 92.5 7.16 9.342 18.3 12.767 33.5 16.359 15.2 3.729 24.2 4.982 39.4 6.286 15.2 1.213 30.4 8.534 38 12.195L228 132H0v-7.321zM0 44.42l7.6-5.291C12.5 27 50.8 29.829 66 21c15.2-8.696 31.3-24.89 46.5-19.5C127.7 6.691 127.8 17.809 143 23c15.2 5.39 24.2 7.2 39.4 9.086 15.2 1.752 30.4 12.333 38 17.623L228 55H0V44.42z",
            width: 228,
            height: 55,
            viewBox: `0 0 228 55`,
        },
        front: {
            d: "M144 69.42l-4.567-5.291C134.867 58.839 133 52.5 125 41.5c-8.4-7-1-28-30.5-35.5-14 .5-24 25-45.5 44-9.133 5.39-10.867 12.244-20 14.129-9.133 1.752-12.867 5.29-17.433 10.58L7 80h137V69.42z",
            width: 147,
            height: 84,
            viewBox: `0 0 147 84`,
        },
    }

]


export default function Frame({ props, pallets }) {
    console.log(pallets);

    // Check for brightest and adjust order of array
    // check for the brightest and place first in array

    const lightOrDark = (color) => {

        // Variables for red, green, blue values
        var r, g, b, hsp;

        // Check the format of the color, HEX or RGB?
        if (color.match(/^rgb/)) {

            // If RGB --> store the red, green, blue values in separate variables
            color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

            r = color[1];
            g = color[2];
            b = color[3];
        }
        else {

            // If hex --> Convert it to RGB: http://gist.github.com/983661
            color = +("0x" + color.slice(1).replace(
                color.length < 5 && /./g, '$&$&'));

            r = color >> 16;
            g = color >> 8 & 255;
            b = color & 255;
        }

        // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
        hsp = Math.sqrt(
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
        );

        // Using the HSP value, determine whether the color is light or dark
        if (hsp > 127.5) {

            return 'light';
        }
        else {

            return 'dark';
        }
    }


    // const adjustedArray = pallets.map(color => {
    //     let arr = []
    //     if ((lightOrDark(color) === "dark")) return arr.push(color)
    //     else if (lightOrDark(color) === "light") return arr.unshift(color)
    //     return arr

    // })

    // console.log(adjustedArray);

    //  const neArr = pallets.map((color,index)=> {
    //     // if color is light unshift,¨
    //     if(lightOrDark(color) === "light"){
    //         return pallets.unshift(color)
    //     }
    // })

    pallets.sort((color) => lightOrDark(color) === "dark")





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



            {/* 1 mountain , way back*/}
            <View
            >
                <Svg
                    width={228}
                    height={105}
                    viewBox="0 0 228 105"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <Path
                        d="M0 84.038l7.6-10.481c7.6-10.482 22.8-31.444 38-48.934C60.8 7.395 76-7.017 91.2 3.66c15.2 10.284 30.4 45.658 45.6 55.943 15.2 10.677 30.4-3.734 45.6 0 15.2 3.471 30.4 24.434 38 34.915L228 105H0V84.038z"
                        fill={`#${pallets[1]}`}
                    />
                </Svg>
            </View>

            {/* 2 mountain, middle */}

            <View
                style={{ left: 0, zIndex: 1, bottom: 0, position: "absolute" }}
            >
                <Svg
                    width={228}
                    height={53}
                    viewBox="0 0 228 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <G filter="url(#prefix__filter0_i)">
                        <Path
                            d="M0 42.42l7.6-5.291c7.6-5.29 22.8-15.872 38-24.7C60.8 3.732 76-3.541 91.2 1.848c15.2 5.191 30.4 23.046 45.6 28.238 15.2 5.39 30.4-1.885 45.6 0 15.2 1.752 30.4 12.333 38 17.623L228 53H0V42.42z"
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
                    width={147}
                    height={63}
                    viewBox="0 0 147 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <G filter="url(#prefix__filter0_d)">
                        <Path
                            d="M144 48.42l-4.567-5.291c-4.566-5.29-13.7-15.872-22.833-24.7-9.133-8.697-18.267-15.97-27.4-10.581-9.133 5.191-18.267 23.046-27.4 28.238-9.133 5.39-18.267-1.885-27.4 0-9.133 1.752-18.267 12.333-22.833 17.623L7 59h137V48.42z"
                            fill={`#${pallets[3]}`}
                        />
                    </G>
                    <Defs></Defs>
                </Svg>
            </View>

        </View>

    )
}
