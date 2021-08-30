import { types } from '../types/types';

const initialState = {
    name: '',
    img: '',
  }

export const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.setName:
            return {
                ...state,
                name: action.payload 
            }
        case types.setImagen:
            return {
                ...state,
                img: action.payload 
            }
    
        default:
            return state;
    }

}