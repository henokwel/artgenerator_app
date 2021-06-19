import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function PalletCard({children, onPress}) {
    return (
        <TouchableOpacity 
        onPress={onPress}
        >
                {children}
        </TouchableOpacity>
    )
}
