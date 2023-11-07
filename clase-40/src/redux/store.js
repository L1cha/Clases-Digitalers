import { configureStore } from "@reduxjs/toolkit";

const ACT_ADD_LIBRO = 'ACT_ADD_LIBRO';

function reducer(state, action) {
    let newState = {...state};

    switch (action.type) {
        case ACT_ADD_LIBRO:
            newState.libros = [
                ...newState.libros,
                action.payload
            ]
            break;
    
        default:
            break;
    }

    return newState;
}


export default configureStore({
    reducer : reducer,
    preloadedState : {
        libros : [
            {id:1 , nombre: "El Monje que vendio su Ferrari", autor: "Robin Sharma"},
            {id:2 , nombre: "Tus Zonas Erroneas", autor: "Wayne Dyer"},
            {id:3 , nombre: "No Puedes Lastimarme", autor: "David Goggins"},
        ]
    }
})