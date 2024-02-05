import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import ButtonPrimary from './ButtonPrimary'


const ModalDelete = ({taskSelected,
    deleteTask,onHandlerModalDelete,
    modalVisible}) => {

return (
        <Modal visible={modalVisible} animationType="fade" >
            <View style={styles.modal}>
                <View style={styles.container}>
                    <Text style={styles.texto}>Esta seguro que quiere eliminar la tarea: {taskSelected.title}</Text>
                    <ButtonPrimary  title='si' onPress={deleteTask}/>
                    <ButtonPrimary  title='no' onPress={() => onHandlerModalDelete({})}/>
                </View>
            </View>
        </Modal>
)
}

export default ModalDelete

const styles = StyleSheet.create({
    modal:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6a6e73",
        color:"#ffffff",
    },
    container:{
        justifyContent:"center",
        backgroundColor: "#000000",
        height:200,
        borderRadius:20,
    },
    texto:{
        fontSize:17,
        marginBottom:20,
        paddingHorizontal:20,
        color:"#ffffff",
    }
})