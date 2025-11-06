import axios from 'axios';
import { Pokemon } from '../entities/pokemon';

// =====================================================
// 🌐 Serviço responsável por buscar dados da PokeAPI
// =====================================================
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export class PokemonService {
  static async getPokemons(limit = 20, offset = 0): Promise<Pokemon[]> {
    const response = await axios.get(`${BASE_URL}?limit=${limit}&offset=${offset}`);
    const results: Pokemon[] = response.data.results;

    // Para cada Pokémon da lista, busca detalhes (imagem, altura, peso)
    const detailed = await Promise.all(
      results.map(async (pokemon) => {
        const detail = await axios.get(pokemon.url);
        return {
          ...pokemon,
          image: detail.data.sprites.front_default,
          height: detail.data.height,
          weight: detail.data.weight,
          types: detail.data.types,
        };
      })
    );

    return detailed;
  }

  static async getPokemonDetail(name: string): Promise<Pokemon> {
    const response = await axios.get(`${BASE_URL}${name}`);
    const data = response.data;
    return {
      name: data.name,
      url: `${BASE_URL}${name}`,
      image: data.sprites.front_default,
      height: data.height,
      weight: data.weight,
      types: data.types,
    };
  }
}
