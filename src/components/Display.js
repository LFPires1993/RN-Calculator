import { Text, View } from "react-native"
import styles from "../styles"

export default props => {
    const {value} = props

    return (
        <View style={styles.diplay}>
            <Text 
                style={styles.displayValue}
                numberOfLines={1}
            >
                {value}
            </Text>

        </View>
    )
}