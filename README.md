# Poke App

Una aplicación para buscar la imagen del pokemon que ingreses usando React y Redux.

## Instalación

Para comenzar, siga los pasos a continuación:

- Instale todas las dependencias del proyecto con `npm install o yarn install`
- Inicie el servidor de desarrollo con `npm start o yarn start`
- Una vez que se inicia el servidor, apunte su navegador a http://localhost:3000/ para iniciar la aplicación

## Pagina principal

<img src = "https://github.com/Majc23/Pokeapp/blob/3229d9663d59f84bf5992886c7e45e48cd52382d/public/Pokeapp.jpeg" />

- La página principal contiene una entrada con la cual se realizara la solicitud a la API

## Project Structure

```bash
├── README.md - This file.
├── package.json # npm package manager file
├── public
│   └── index.html # public index.html
│   
└── src
    ├── components # Carpeta de componentes
    │   └── Form.js # Este es el componente que despliega la pagina principal      
    ├── actions # Carpeta de acciones  
    │   └── actions.js # Acciones
    ├── reducers 
    │   └── reducers.js # reducer for authentication actions
    ├── routers 
    │   └── AppRouter.js # This is the root of the app
    ├── store 
    │   └── store.js # Store to use redux
    ├── App.js # Configuracion redux
    ├── Api.js # Solicitud a la api
    ├── index.css # Global styles
    ├── types # constant that defines the type of actions
    ├── BookshelfApp.js # implementation of redux
    └── index.js # Used for DOM rendering
```

