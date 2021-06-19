
import React, { useRef } from 'react'
import {
    StatusBar, FlatList, Image, Animated, Text, View,
    Dimensions, StyleSheet,
    TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView,
    Button,
    Pressable
} from 'react-native';
import faker from 'faker'

import PalletCard from './PalletCard'
const { width, height } = Dimensions.get("screen")

export default function Home({ navigation }) {

    const Data = [...Array(15).keys()].map((_, i) => {
        return {
            key: faker.datatype.uuid(),
            name: faker.name.findName(),
            pattern: [
                {
                    "id": "dsfdsf",
                    "pattern": [
                        "7C6C77",
                        "96CFC9",
                        "467292",
                        "AAA694"
                    ]
                }
            ]
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
    const AV_Size = 70;
    const ITEM_SIZE = AV_Size + SPACE * 3;

    const scrollY = React.useRef(new Animated.Value(0)).current


    return (
        <View style={{
            flex: 1,

        }}>
            <StatusBar hidden />

            <Animated.FlatList
                data={Data}
                keyExtractor={item => item.key}
                contentContainerStyle={{
                    padding: SPACE,
                    paddingTop: StatusBar.currentHeight || 42
                }}

                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}

                renderItem={({ item, index }) => {

                    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 3)]
                    const opacityInputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 3)]

                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0]
                    })

                    return <PalletCard
                        onPress={() => console.log(item.pattern)
                        }
                    >

                        <Animated.View

                            style={{
                                flexDirection: "row",
                                padding: SPACE,
                                marginBottom: SPACE,
                                backgroundColor: "grey",
                                shadowColor: "#000",
                                shadowOpacity: .3,
                                shadowRadius: 20,
                                elevation: 3,
                                shadowOffset: {
                                    width: 0,
                                    height: 10
                                },
                                transform: [{ scale: scale }]

                            }}
                        >


                            <View style={{
                                width: AV_Size, height: AV_Size, backgroundColor: "green",
                                marginRight: SPACE / 2
                            }} />

                            <View>
                                <Text>{item.name}</Text>
                            </View>
                        </Animated.View>
                    </PalletCard>
                }}
            />
        </View>
    );
}