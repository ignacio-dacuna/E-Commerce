import { StyleSheet,View, TextInput, Button } from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const AddTask = ({onHandlerTitle,
    onHandlerDescription,
    taskTitle,
    taskDescription,
    addTask}) => {
return (
    <View style={styles.columnas}>
        <TextInput value={taskTitle} onChangeText={onHandlerTitle}  placeholder='ingresar titulo' style={styles.input} placeholderTextColor="white"/>
        <TextInput value={taskDescription} onChangeText={onHandlerDescription}  
        placeholder='ingresar descripcion' style={styles.input2} 
        placeholderTextColor="white" multiline numberOfLines={4}/>
        <ButtonPrimary title="Agregar tarea" onPress={addTask}/>
    </View>
)
}

export default AddTask

const styles = StyleSheet.create({
    input:{
        backgroundColor: "#6a6e73",
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 20,
        color:"#ffffff",
        height:40,
    },
    input2:{
        backgroundColor: "#6a6e73",
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 20,
        color:"#ffffff"
    },
    columnas:{
        backgroundColor: "#393d42",
        borderRadius: 5,
        marginHorizontal: 5,
    }
})