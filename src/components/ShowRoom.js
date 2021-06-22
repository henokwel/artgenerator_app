import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import Frame from './Frame';

const { width } = Dimensions.get("screen")

export default function ShowRoom({ props, route, navigation }) {

    const { index, item } = route.params;
    // console.log('index', index);
    // console.log('item', item);




    return (
        <View style={{
            flex: 1, alignItems: "center", justifyContent: "center",
            elevation: 1,

        }}>

            {
                !item ?
                    <Text>loading....</Text> :
                    <Frame
                        pallets={item.pattern}

                    />
            }

            {/*  */}


            <View style={{ marginTop: 15 }} >
                <Text>Title</Text>
                <Text>Author</Text>
            </View>

            <View style={{ width: 280 }}>
                <Text >
                    Conceived on 15th March 1959 and cast in bronze in a numbered
                    edition of 7 plus 1 artist's proof. This example was cast in March 1961.
                </Text>
            </View>
            <View style={{
                height: 100, backgroundColor: "red",
                width

            }}>
                <Text>Download</Text>
            </View>
        </View>
    )
}
