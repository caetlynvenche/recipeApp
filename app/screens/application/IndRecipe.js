import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const IndRecipe = (props) => {
    const [tagsSet, setTagsSet] = useState(false)

    const tags = props.type

    const setUpTags = () => {
        for ( let i = 0; i < props.diet.length; i++ ) {
            tags.push(props.diet[i])
        }
        for ( let j = 0; j < props.tags.length; j++ ) {
            tags.push(props.tags[j])
        }
        setTagsSet(true)
    }

    !tagsSet ? setUpTags() : null
    
    // tags.push(props.diet)
    // tags.push(props.tags)
    return (
        <View key={props.id} style={styles.container}>
            <Text>{props.name}</Text>
            <Text>Tags: </Text>
            <View style={styles.tags}>
                { tags.map(indTag => <Text style={styles.tagText}>{indTag} </Text>)}
            </View>
        </View>
    )
}

export default IndRecipe

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    tags: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    tagText: {
        borderWidth: 1,
        margin: 5,
        padding: 2,
        textAlign: "center"
    }
});