# Pokédex

Aplicativo desenvolvido em **React Native com TypeScript**, seguindo o padrão **MVVM (Model–View–ViewModel)** e utilizando a **PokeAPI** como fonte de dados.  

O app exibe uma **lista de Pokémons** com imagem e nome, e permite visualizar **detalhes completos** (altura, peso, tipos etc.) ao clicar em um card.  

---

## Estrutura de Pastas

```
src/
 ├─ model/
 │   ├─ entities/
 │   │   └─ pokemon.ts            
 │   └─ services/
 │       └─ pokemonService.ts     
 │
 ├─ viewmodel/
 │   └─ usePokemons.ts            
 │
 ├─ components/
 │   ├─ PokemonList.tsx           
 │   └─ PokemonDetail.tsx         
 │
 ├─ navigation/
 │   ├─ AppNavigator.tsx         
 │   └─ types.ts                 
 │
 └─ App.tsx                       
```

---


## Como Executar o Projeto

### Clonar o repositório
```bash
git clone https://github.com/seu-usuario/pokedex.git
cd pokedex
```

### Instalar dependências
```bash
npm install
# ou
yarn install
```

### Executar o projeto

#### Com Expo:
```bash
npx expo start
```
---

### Estrutura do Backend (API)
O projeto consome diretamente a **PokeAPI pública**. Endpoint principal:
```
https://pokeapi.co/api/v2/pokemon/
```

---

## Demonstração do Funcionamento

1. A tela inicial exibe uma **lista paginada de Pokémons** (nome + imagem).  
2. Cada card pode ser tocado, levando à **tela de detalhes**.  
3. A tela de detalhes mostra:
   - Nome  
   - Altura  
   - Peso  
   - Tipos  
   - Imagem em destaque  

---
---

## 👨‍💻 Autor

**Rodrigo Cardoso**  