import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    app: {
        flex: 1
    },
    calculatorButton: {
        height: Dimensions.get("window").width / 4,
        width: Dimensions.get("window").width / 4,
        fontSize: 30,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderColor: '#888',
        borderWidth: 1,
        textAlign: 'center',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8321'
    },
    doubleButton: {
        width: (Dimensions.get("window").width / 4) * 2
    },
    tripleButton: {
        width: (Dimensions.get("window").width / 4) * 3
    },
    keyboard: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    diplay: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    displayValue: {
        fontSize: 60,
        color: "#fff",
    }
})