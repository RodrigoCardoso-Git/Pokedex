import React from 'react';
import { View, Text, Image, ActivityIndicator, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { usePokemons } from '../viewmodel/usePokemons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { Pokemon } from '../model/entities/pokemon';

type NavigationProp = StackNavigationProp<RootStackParamList, 'PokemonList'>;

export default function PokemonList() {
  const { pokemons, loading, error, refresh } = usePokemons();
  const navigation = useNavigation<NavigationProp>();

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text>Carregando Pokémons...</Text>
      </View>
    );

  if (error)
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
        <Button title="Recarregar" onPress={refresh} />
      </View>
    );

  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item) => item.name}
      contentContainerStyle={styles.list}
      refreshing={loading}
      onRefresh={refresh}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("PokemonDetail", { name: item.name})}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    width: 150,
    alignItems: 'center',
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
