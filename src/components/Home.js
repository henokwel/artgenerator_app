
import React, { useRef } from 'react'
import {
    StatusBar, FlatList, Image, Animated, Text, View,
    Dimensions, StyleSheet,
    TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView
} from 'react-native';
import faker from 'faker'

const { width, height } = Dimensions.get("screen")

export default function Home({ navigation }) {

    const Data = [...Array(10).keys()].map((_, i) => {
        return {
            key: faker.datatype.uuid(),
            name: faker.name.findName()
        }
    })

    const DataPattern = [
        {
            "id": "dsfdsf",
            "pattern": [
                "7C6C77",
                "96CFC9",
                "467292",
                "AAA694"
            ]
        },
        {
            "id": "skdlsdfjfsdf",
            "pattern": [
                "283D3B",
                "EDDDD4",
                "C44536",
                "772E25"
            ]
        },
        {
            "id": "F4866s8",
            "pattern": [
                "DD614A",
                "F48668",
                "F4A698",
                "73A580"
            ]
        },
        {
            "id": "dsdffdsf",
            "pattern": [
                "7C6C77",
                "96CFC9",
                "467292",
                "AAA694"
            ]
        },
        {
            "id": "skdlj3ffsdf",
            "pattern": [
                "283D3B",
                "EDDDD4",
                "C44536",
                "772E25"
            ]
        },
        {
            "id": "73A4580",
            "pattern": [
                "DD614A",
                "F48668",
                "F4A698",
                "73A580"
            ]
        },
        {
            "id": "dsfd34sf",
            "pattern": [
                "7C6C77",
                "96CFC9",
                "467292",
                "AAA694"
            ]
        },
        {
            "id": "skd8ljfsdf",
            "pattern": [
                "283D3B",
                "EDDDD4",
                "C44536",
                "772E25"
            ]
        },
        {
            "id": "73A58980",
            "pattern": [
                "DD614A",
                "F48668",
                "F4A698",
                "73A580"
            ]
        },

    ]
    const SPACE = 20;
    const AV_Size = 50;
    const ITEM_SIZE = AV_Size * SPACE * 3;

    const scrollY = React.useRef(new Animated.Value(0)).current
    return (
        <View style={{
            flex: 1,
            // backgroundColor: "green",
            paddingTop:SPACE,
            



        }}>


            <Animated.FlatList
                data={DataPattern}


                onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )
                }
                keyExtractor={item => item.id}

                contentContainerStyle={{
                    padding: SPACE,
                    paddingTop: StatusBar.currentHeight || 42,
                    // width,
                    alignItems: "center",
                    
                }}

                renderItem={({ item, index }) => {

                    const inputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 1)
                    ]

                    const opacityinputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + .5)
                    ]
                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0]
                    })

                    const opacity = scrollY.interpolate({
                        inputRange: opacityinputRange,
                        outputRange: [1, 1, 1, 0]
                    })
                    // Color Pallet Card
                    return <Animated.View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        borderWidth: 5,
                        width: 208,
                        marginBottom: SPACE,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowRadius: 20,
                        shadowOpacity:.3,
                        transform: [{ scale }]


                    }}>
                        {item.pattern.map((item, index) => {
                            return <View
                                keys={index + item}
                                style={{
                                    width: 50, height: 100,
                                    backgroundColor: `#${item}`,
                                    flexDirection: "row",
                                    
                                    
                                }}>

                            </View>
                        })}
                    </Animated.View>
                }}

            />
        </View>
    );
}