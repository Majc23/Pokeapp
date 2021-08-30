
import { types } from '../types/types';
import { getPokemon } from "../Api";

export const startFoundPokemon = (  ) => {
    return async( dispatch, getState ) => {
        const { name } = getState().redu;
        const pokemon = await getPokemon( name );
          console.log(pokemon);
          dispatch( setImagen( pokemon.sprites.front_default ) );

    }
}

export const setImagen = ( pokemon ) => ({
    type: types.setImagen,
    payload: pokemon
});

export const startChangeName = ( namepoke ) => ({
    type: types.setName,
    payload: namepoke
});

