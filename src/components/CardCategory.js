import { Pressable, StyleSheet, Text, ImageBackground} from 'react-native'
import ShadowPrimary from './wrappers/ShadowPrimary'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const CardCategory = ({item,navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("ProductsByCategory",{categorySelected:item.title})}>
      <ShadowPrimary style={styles.container}>
          <ImageBackground source={{uri:item.thumbnail}} style={styles.background}>
            <Text style={styles.text}>{item.title}</Text>
          </ImageBackground>
      </ShadowPrimary>
    </Pressable>
  )
}

export default CardCategory

const styles = StyleSheet.create({
    container:{
        width:"90%",
        height: 130,
        marginLeft:"5%",
        backgroundColor:colors.red2,
        marginVertical:10,
        alignItems:"center",
        borderRadius:10,
        overflow:"hidden",
        flex: 1,
    },    
    background:{
      width:"100%",
      height:"100%",
      resizeMode:"cover",
      alignItems:"center",
      justifyContent:"center",
    },
    text:{
        fontSize:25,
        fontFamily:fonts.JosefinSansBold,
        color:"white"
    }
})