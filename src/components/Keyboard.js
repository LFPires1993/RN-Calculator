import { View } from "react-native"
import CalculatorButton from "./CalculatorButton"
import styles from "../styles"

export default props => {
    return (
        <View style={styles.keyboard}>
            <CalculatorButton label='AC' />
            <CalculatorButton label='/' />
            <CalculatorButton label='7' />
            <CalculatorButton label='8' />
            <CalculatorButton label='9' />
            <CalculatorButton label='*' />
            <CalculatorButton label='4' />
            <CalculatorButton label='5' />
            <CalculatorButton label='6' />
            <CalculatorButton label='-' />
            <CalculatorButton label='1' />
            <CalculatorButton label='2' />
            <CalculatorButton label='3' />
            <CalculatorButton label='+' />
            <CalculatorButton label='0' />
            <CalculatorButton label='.' />
            <CalculatorButton label='=' />
        </View>
    )
}