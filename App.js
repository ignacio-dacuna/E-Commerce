import { StyleSheet, View } from 'react-native'
import Home from './src/screens/Home'
import { useEffect, useState } from 'react'
import ProductsByCategory from './src/screens/ProductsByCategory'
import {useFonts} from "expo-font"
import { fontCollection } from './src/utils/globals/fonts'




const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)
  const [categorySelected,setCategorySelected] = useState("")

  if(!fontsLoaded) return null

  const selectedCategoryState = (category) => {
    setCategorySelected(category)

  }

  return (
    <View style={styles.container}>
      {categorySelected ? 
                <ProductsByCategory categorySelected={categorySelected}/>
                :
                <Home selectedCategoryState={selectedCategoryState}/>
                
      }
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
