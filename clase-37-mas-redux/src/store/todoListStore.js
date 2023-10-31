import { configureStore } from "@reduxjs/toolkit"

export default configureStore({
    reducer: (s, a) => (s),
    preloadedState: {
        tareas: [
            {
                id: 1,
                accion: "Cortar el cesped",
                done: false,
            },
            {
                id: 2,
                accion: "GYM",
                done: false,
            },
            {
                id: 3,
                accion: "Leer",
                done: false,
            },
        ],
    }
})