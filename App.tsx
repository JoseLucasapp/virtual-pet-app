import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/home';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types/stackTypes';
import { NavigationContainer } from '@react-navigation/native';
import About from './src/pages/About';
import NewGame from './src/pages/NewGame';
import LoadGame from './src/pages/LoadGame';
import GameSettings from './src/pages/GameSettings';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="NewGame" component={NewGame} />
        <Stack.Screen name="LoadGame" component={LoadGame} />
        <Stack.Screen name="Settings" component={GameSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
