import { Text, TouchableHighlight } from "react-native"
import Styles from '../styles'

export default props => {
    const buttonStyles = [Styles.calculatorButton]

    if (props.double) buttonStyles.push(Styles.doubleButton)
    if (props.triple) buttonStyles.push(Styles.tripleButton)
    if (props.operation) buttonStyles.push(Styles.operationButton)

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={buttonStyles}>{props.label}</Text>
        </TouchableHighlight>
    )
}