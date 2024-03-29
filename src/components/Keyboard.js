import { View } from "react-native"
import CalculatorButton from "./CalculatorButton"
import styles from "../styles"

export default props => {
    return (
        <View style={styles.keyboard}>
            <CalculatorButton label='AC' triple='true'/>
            <CalculatorButton label='/' operation='true'/>
            <CalculatorButton label='7' />
            <CalculatorButton label='8' />
            <CalculatorButton label='9' />
            <CalculatorButton label='*' operation='true'/>
            <CalculatorButton label='4' />
            <CalculatorButton label='5' />
            <CalculatorButton label='6' />
            <CalculatorButton label='-' operation='true'/>
            <CalculatorButton label='1' />
            <CalculatorButton label='2' />
            <CalculatorButton label='3' />
            <CalculatorButton label='+' operation='true'/>
            <CalculatorButton label='0' double='true'/>
            <CalculatorButton label='.' />
            <CalculatorButton label='=' operation='true'/>
        </View>
    )
}