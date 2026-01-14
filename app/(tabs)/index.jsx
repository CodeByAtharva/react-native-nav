import { Link, router } from "expo-router"
import { Button, StyleSheet, Text, View } from "react-native"

const  index = ()=>{
    return(
        <View style={style.container}>
            <Text>Index Page</Text>
            <Button style={style.m} title="Go to User 1" onPress={()=>router.push("/user/1")}/>
            <Link href="/user/1">
            go to user 1
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