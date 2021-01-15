import React from 'react'
import { View, Text, FlatList, TouchableHighlight } from 'react-native'
import IndRecipe from './IndRecipe'
import Filter from './Filter'

const recipeData = [
    {
        name: "Golden Milk",
        link: "https://simpleveganblog.com/golden-milk/",
        type: ["breakfast", "lunch", "dinner", "snack", "dessert", "drink"],
        diet: ["glutenFree", "dairyFree", "sugarFree", "cornFree", "vegan"],
        tags: ["meow"],
        favorited: true,
        id: 0 
    },
    {
        name: "example",
        link: "example",
        type: ["breakfast", "lunch", "dinner", "snack", "dessert", "drink"],
        diet: ["glutenFree", "dairyFree", "sugarFree", "cornFree", "vegan"],
        tags: ["meow"],
        favorited: false,
        id: 1 
    }
]


const RecipeList = () => {
    const onPress = (item) => {
        alert(item.link)
    }

    return (
        <View>
            <Filter />
            <FlatList
                data={recipeData}
                renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                        key={item.key}
                        onPress={() => onPress(item)}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}
                        >
                        <View style={{ backgroundColor: 'white' }}>
                            <IndRecipe {...item} />
                        </View>
                    </TouchableHighlight>
                )}>
            </FlatList>
        </View>
        
    )
}

export default RecipeList