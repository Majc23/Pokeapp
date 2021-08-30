import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { startFoundPokemon, startChangeName } from '../actions/actions';


export const Form = () => {

  const { name, img } = useSelector( state => state.redu );

  const dispatch = useDispatch();

  const handleInput = (e) => {

    e.preventDefault();
    dispatch( startFoundPokemon() );

  }

  const handleChangeName = (e) => {

    dispatch( startChangeName(e.target.value) );

  }

  return (
    
      <header className="App-header">
        
    <div >
          <div >
            Pokedex
          </div>
          <div >
            <form onSubmit={ handleInput }>    
                <label>Ingrese el pokemon</label><br/>
                <input 
                    type="text"
                    placeholder="nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleChangeName }
                /><br/><br/>
               <button  type="submit"> Buscar </button>
            </form>
            {
                    (img) 
                    && (
                      <img src={img} alt='Pokemon'/>
                    )
            }    
          </div>
          
        </div>

        </header>
    
  );
}

