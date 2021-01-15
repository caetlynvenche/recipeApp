import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RecipeList from './app/screens/application/RecipeList'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Home</Text>
      <Text>start with hard coded data</Text>
      <Text>create base for info (needed components)</Text>
      <Text>create search functionality</Text>
      <Text>Levels:</Text>
      <Text>1) app for me to store recipes</Text>
      <Text>2) authentification to have different users</Text>
      <Text>3) database set up for different storage</Text>
      <Text>4) form for easy additions</Text> */}
      <RecipeList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
