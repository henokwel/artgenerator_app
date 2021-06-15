
import React from 'react'
import { Text, View, Button } from 'react-native';



export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                onPress={() => navigation.navigate("Showroom")}
                title="Go to show room"
            />
        </View>
    );
}