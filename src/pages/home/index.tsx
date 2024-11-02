import React from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from "./stylesheet";
import { HomeScreenProps, RootStackParamList } from "../../types/stackTypes";

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {

    type MenuItem = {
        id: number,
        title: string,
        route: keyof RootStackParamList
    }

    const menuOptions: MenuItem[] = [
        { id: 1, title: "New Game", route: "NewGame" },
        { id: 2, title: "Load Game", route: "LoadGame" },
        { id: 3, title: "Settings", route: "Settings" },
        { id: 4, title: "About", route: "About" },
    ]

    const menu = ({ item }: { item: MenuItem }) => {
        return (
            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate(item.route)}
            >
                <Text style={styles.menuItemText}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.mainHome}>
            <View style={styles.logo}>
                <Text style={styles.welcomeText}>Welcome to</Text>
                <Text style={styles.logoText}>My Virtual Pet</Text>
            </View>
            <View style={styles.menuContainer}>
                <FlatList
                    data={menuOptions}
                    renderItem={menu}
                    keyExtractor={item => item.id.toString()}
                />
            </View>

        </View>
    )
};

export default Home;