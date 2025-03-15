import {View, Text, StyleSheet} from "react-native"
import { useState } from "react"
import { router } from "expo-router"

import { Button } from "../components/button"
import { Input } from "../components/inputs"

export default function Index(){
    const [name, setName] = useState("Sr(a).")

    function handleNext(){
        router.navigate("/dashboard")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Olá, {name}</Text>

            <Input onChangeText={setName} />

            <Button title="Entrar" onPress={handleNext} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        gap: 16
    },
    title:{
        fontSize: 30,
        color: "#187378"
    }
})