import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    About: undefined;
    NewGame: undefined;
    LoadGame: undefined;
    Settings: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

export interface Props {
    navigation: NavigationProp;
    item: {
        title: keyof RootStackParamList; // Garante que `item.title` seja um nome de tela válido
    };
}


// Tipos das props de navegação para cada tela
export type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type AboutScreenProps = StackScreenProps<RootStackParamList, 'About'>;
export type NewGameScreenProps = StackScreenProps<RootStackParamList, 'NewGame'>;
export type LoadGameScreenProps = StackScreenProps<RootStackParamList, 'LoadGame'>;
export type SettingsScreenProps = StackScreenProps<RootStackParamList, 'Settings'>;