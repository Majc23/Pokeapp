import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routers/AppRouter'
import './App.css';

export const App = () => {
  return (
    <Provider store={ store }>
        <AppRouter/>
     </Provider>    
  )
}