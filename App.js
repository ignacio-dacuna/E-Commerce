import { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import ModalDelete from './src/components/ModalDelete';
import AddTask from './src/components/AddTask';
import ListTask from './src/components/ListTask';


export default function App() {

    const [modalVisible, setModalVisible] = useState(false)
    const [taskSelected, setTaskSelected] = useState({})
    const [taskTitle,setTaskTitle] = useState("")
    const [taskDescription,setTaskDescription] = useState("")
    const [tasks,setTasks] = useState([])

    const addTask = () =>{
      const id = Date.now().toString();;
      const newTask = {
        id:id,
        createAt: new Date().toLocaleString(),
        title:taskTitle,
        description:taskDescription
      }

      setTasks([...tasks,newTask])

      setTaskTitle("")
      setTaskDescription("")
    }

    const onHandlerTitle = (t) =>{
      setTaskTitle(t)
    }

    const onHandlerDescription = (t) =>{
      setTaskDescription(t)
    }

    const onHandlerModalDelete = (task) => {
      setTaskSelected(task)
      setModalVisible(!modalVisible)
    }

    const deleteTask = () =>{
      setTasks(tasks.filter(task => task.id != taskSelected.id))
      setModalVisible(!modalVisible)
    }


  return (
    <View style={styles.container}>
      <AddTask
        onHandlerTitle={onHandlerTitle}
        onHandlerDescription={onHandlerDescription}
        taskTitle={taskTitle}
        taskDescription={taskDescription}
        addTask={addTask}
      />
      <View style={styles.line}><Text></Text></View>
      <ListTask
        tasks={tasks} 
        onHandlerModalDelete={onHandlerModalDelete}
      />
      <ModalDelete
      modalVisible={modalVisible}
      taskSelected={taskSelected}
      deleteTask={deleteTask}
      onHandlerModalDelete={onHandlerModalDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    paddingTop : 40,
    flex: 1,
  },
  line:{
    height:5,
    backgroundColor: "#6a6e73",
    marginTop: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  }
});
