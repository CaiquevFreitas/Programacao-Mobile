import {View, Text, StyleSheet} from "react-native"
import { Button } from "../components/button"

export default function Index(){
    return(
        <View style={styles.container}>
            <Text>
                Olá, Caique!
            </Text>

            <Button />
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