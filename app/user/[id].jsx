import { useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"

const user=()=>{
    const {id}=useLocalSearchParams()
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>User: {id}</Text>
        </View>
    )
}

export default user