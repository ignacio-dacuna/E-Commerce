import { StyleSheet, Text, View,Image } from 'react-native'
import AddButton from '../components/AddButton'
import { useSelector } from 'react-redux'
import { useGetImageQuery } from '../app/services/profile'
import colors from '../utils/globals/colors'

const Profile = ({navigation}) => {
    const localId = useSelector((state)=> state.auth.localId)
    const {data} = useGetImageQuery(localId)
  return (
    <View style={styles.container}>
        <Image
            source={data ? {uri:data.image}:require("../../assets/user.png")}
            style={styles.image}
            resizeMode='cover'
        />
        <View style={styles.color}>
            <AddButton title={"Agregar Imagen de perfil"} onPress={()=> navigation.navigate("ImageSelector")}/>
        </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200
    },
    color:{
        backgroundColor:colors.red1,
        borderRadius: 30,
        margin: 20,
        width: "80%" ,
        alignItems: "center"
    }
})