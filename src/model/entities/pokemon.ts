// =====================================================
// 🧩 Entidade que representa um Pokémon básico e detalhado
// =====================================================
export interface Pokemon {
  name: string;
  url: string;
  image?: string;
  height?: number;
  weight?: number;
  types?: { type: { name: string } }[];
}
