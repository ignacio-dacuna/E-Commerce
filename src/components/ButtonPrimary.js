import { Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'

const ButtonPrimary = ({title,onPress}) => {
return (
    <Pressable onPress={onPress} style={styles.container} >
        <Text style={styles.text} >{title}</Text>
    </Pressable>
)
}

export default ButtonPrimary

const styles = StyleSheet.create({
    container:{
        border: 2,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 20,
        alignItems:"center",

    },
    text:{
        color: "#000000",
        fontSize: 20
    }
})