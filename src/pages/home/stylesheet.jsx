import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainHome: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "#FF5733",
    },

    logo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
    },

    welcomeText: {
        width: "max-content",
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },

    logoText: {
        color: "white",
        fontSize: 45,
        fontWeight: "bold",
    },

    menuContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginTop: 50,
    },
    menuItem: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding: 5,
        height: 60,
        width: "100%",
        marginBottom: 5,
        marginTop: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
    },

    menuItemText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },
})

export { styles };