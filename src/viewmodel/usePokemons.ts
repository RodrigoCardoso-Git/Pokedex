import { useEffect, useState } from 'react';
import { Pokemon } from '../model/entities/pokemon';
import { PokemonService } from '../model/services/pokemonService';

export function usePokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await PokemonService.getPokemons(20, 0);
      setPokemons(data);
    } catch (err) {
      setError('Erro ao carregar os Pokémons');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return { pokemons, loading, error, refresh };
}
