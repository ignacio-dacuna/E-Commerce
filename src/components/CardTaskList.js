import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const CardTaskList = ({item, onHandlerModalDelete,}) => {
return (
    <View style={styles.card2}>
                                <Text style={styles.txt}>Titulo: {item.title}</Text>
                                <Text style={styles.txt2}>Descripcion: {item.description}</Text>
                                <Text style={styles.txt2}>Creacion: {item.createAt}</Text>
                                <ButtonPrimary color={"#ED6A5A"} onPress={() => onHandlerModalDelete(item)} title='DEL'/>
                            </View>
)
}

export default CardTaskList

const styles = StyleSheet.create({
    txt: {
        color: "#ffffff",
        fontSize: 20,
        margin:10,
    },
    txt2:{
        color: "#ffffff",
        fontSize: 15,
        margin: 10
    },
    card2:{
        backgroundColor: "#6a6e73",
        paddingTop: 15,
        marginBottom: 30,
        borderRadius: 5,
    },
})