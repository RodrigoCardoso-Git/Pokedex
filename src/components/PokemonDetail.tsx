import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { PokemonService } from '../model/services/pokemonService';
import { Pokemon } from '../model/entities/pokemon';
import { RootStackParamList } from '../navigation/types';

type DetailRouteProp = RouteProp<RootStackParamList, 'PokemonDetail'>;

export default function PokemonDetail() {
  const route = useRoute<RouteProp<{ params: { name: string } }, 'params'>>();
  const { name } = route.params;
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await PokemonService.getPokemonDetail(name);
      setPokemon(data);
    };
    load();
  }, [name]);

  if (!pokemon)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text>Altura: {pokemon.height}</Text>
      <Text>Peso: {pokemon.weight}</Text>
      <Text>Tipos:</Text>
      {pokemon.types?.map((t, i) => (
        <Text key={i}>{t.type.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  image: { width: 150, height: 150 },
  name: { fontSize: 24, fontWeight: 'bold', textTransform: 'capitalize', marginVertical: 10 },
});
