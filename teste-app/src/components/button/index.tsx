import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles"

export function Button(){
    return(
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text style={styles.title}>
                Clique Aqui
            </Text>
        </TouchableOpacity>
    )
}