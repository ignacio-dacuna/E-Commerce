import {FlatList } from 'react-native'
import { useGetCategoriesQuery } from '../app/services/shop'

import CardCategory from './CardCategory'

const Categories = ({navigation}) => {

  const {data:categories} = useGetCategoriesQuery()
  
  return (
    <FlatList
    data={categories}
    keyExtractor={item => item.title}
    renderItem={({item})=> <CardCategory item={item} navigation={navigation}/>}
    />
  )
}

export default Categories