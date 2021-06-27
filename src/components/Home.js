
import React, { useRef } from 'react'
import {
    StatusBar, FlatList, Image, Animated, Text, View,
    Dimensions, StyleSheet,
    TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView,

} from 'react-native';

import PalletCard from './PalletCard'
import { DataPattern } from '../utils/DataPattern';
const { width, height } = Dimensions.get("screen")

export default function Home({ navigation }) {


    const SPACE = 20;
    const AV_Size = 70;
    const ITEM_SIZE = AV_Size + SPACE * 2;

    const scrollY = React.useRef(new Animated.Value(0)).current


    return (
        <View style={{
            flex: 1,

        }}>
            <StatusBar hidden />

            <View
                style={{ width: "35%", top: 50, zIndex: 2 }}
            >
                <Text>Colorful Mountain</Text>
            </View>

            <Animated.FlatList
                data={DataPattern}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    padding: SPACE,
                    paddingTop: StatusBar.currentHeight || 42
                }}

                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}

                renderItem={({ item, index }) => {

                    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)]
                    const opacityInputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 3)]

                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0]
                    })

                    const opacity = scrollY.interpolate({
                        inputRange: opacityInputRange,
                        outputRange: [1, 1, 1, 0]
                    })


                    return <PalletCard
                        onPress={() => {
                            navigation.navigate("Showroom", {
                                index,
                                item
                            })
                        }
                        }
                    >

                        <Animated.View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: SPACE,
                                marginBottom: SPACE,
                                // backgroundColor: "grey",
                                shadowColor: "#000",
                                shadowOpacity: .3,
                                shadowRadius: 20,
                                opacity,
                                // elevation: 3,
                                shadowOffset: {
                                    width: 0,
                                    height: 20
                                },
                                transform: [{ scale }],
                                height: 90,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    borderWidth: 2,
                                    // width:250,


                                }}
                            >

                                <View
                                    style={{
                                        backgroundColor: `#${item.pattern[0]}`,
                                        width: 50,
                                        height: 100,
                                        // borderWidth:1
                                    }}
                                />
                                <View
                                    style={{
                                        backgroundColor: `#${item.pattern[1]}`,
                                        width: 50,
                                        height: 100,
                                        // borderWidth:1
                                    }}
                                />
                                <View
                                    style={{
                                        backgroundColor: `#${item.pattern[2]}`,
                                        width: 50,
                                        height: 100,
                                        // borderWidth:1
                                    }}
                                />
                                <View
                                    style={{
                                        backgroundColor: `#${item.pattern[3]}`,
                                        width: 50,
                                        height: 100,
                                        // borderWidth:1
                                    }}
                                />

                            </View>
                        </Animated.View>
                    </PalletCard>
                }}
            />
        </View>
    );
}