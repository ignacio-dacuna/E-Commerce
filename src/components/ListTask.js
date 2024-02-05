import { StyleSheet,View, FlatList } from 'react-native'
import React from 'react'
import CardTaskList from './CardTaskList'

const ListTask = ({tasks, onHandlerModalDelete}) => {
return (
    <View style={styles.card}>
    <FlatList
    data={tasks}
    keyExtractor={item => item.id}
    renderItem={({item}) =>(<CardTaskList 
                                item={item} 
                                onHandlerModalDelete={onHandlerModalDelete}
                                />)}
    />
    </View>
)
}

export default ListTask

const styles = StyleSheet.create({
    card: {
        marginTop: 30,
        paddingHorizontal: 20,
        flex: 1, 
        flexGrow: 1,
    },
})