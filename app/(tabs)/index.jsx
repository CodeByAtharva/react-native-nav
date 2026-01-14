import { Link, router } from "expo-router"
import { Button, StyleSheet, Text, View } from "react-native"

const  index = ()=>{
    return(
        <View style={style.container}>
            <Text>Index Page</Text>
            <Button style={style.m} title="Go to Profile" onPress={()=>router.push("/profile")}/>
            <Link href="/profile">
            go to Profile
            </Link>
        </View>
    )
}

const style=StyleSheet.create({
    m:{
        margin:30,
        padding:10
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:20
    }

}
)

export default index