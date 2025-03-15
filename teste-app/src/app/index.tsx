import {View, Text, StyleSheet, Alert} from "react-native"
import { Button } from "../components/button"

export default function Index(){
    function handleMessage(){
        const name = "Caique"
        Alert.alert(`Seja bem vindo ${name}`)
    }

    return(
        <View style={styles.container}>
            <Text>
                Olá, Caique!
            </Text>

            <Button title="Entrar" onPress={handleMessage} />
            <Button title="Cadastrar" />
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
})