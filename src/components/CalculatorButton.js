import { Text, TouchableHighlight } from "react-native"
import Styles from '../styles'

export default props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={Styles.calculatorButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}