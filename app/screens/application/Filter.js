import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Filter = () => {
    return (
        <View style={styles.container}>
            <Text>Filter</Text>
        </View>
    )
}

export default Filter

const styles = StyleSheet.create({
    container: {
        backgroundColor: "tan",
        padding: 10,
        paddingTop: 30,
    },
})