import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    main: {
        widht: "100%",
        height: "100%",
        backgroundColor: "#EEF2F5",
        paddingHorizontal: 15,
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 15,
        elevation: 2
    },
    blackText: {
        color: "#000",
        fontSize: 18
    },
    blueText: {
        color: "#0001FC"
    },
    grayText: {
        color: "#888"
    },
})