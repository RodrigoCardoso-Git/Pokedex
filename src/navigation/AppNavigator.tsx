import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PokemonList from '../components/PokemonList';
import PokemonDetail from '../components/PokemonDetail';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PokemonList">
        <Stack.Screen name="PokemonList" component={PokemonList} options={{ title: 'Pokédex' }} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetail} options={{ title: 'Detalhes do Pokémon' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
