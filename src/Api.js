const api = "https://pokeapi.co/api/v2/pokemon";



export const getPokemon = async (name) =>{
  let response = await fetch(`${api}/${name}`);
  let json = await response.json();
  console.log(json);
  return json;
}