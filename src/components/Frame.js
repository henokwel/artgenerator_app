import React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path, G, Defs } from "react-native-svg"

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
                shadowOpacity: .7,
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
