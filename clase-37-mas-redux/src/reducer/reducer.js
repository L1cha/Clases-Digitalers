import * as types from "../actions/action-types";

function reducer(state, action) {
    let newState = { ...state };

    switch (action.type) {
        case types.ACT_AGREGAR:
            newState.tareas = [
                ...state,
                {
                    id: Math.max(...state.tareas.map((i)=>(i.id)),0) + 1,
                    accion: action.nombre,
                    done: false,
                }
            ]
            break;
        case types.ACT_AGREGAR:
            newState.tareas = newState.tareas.filter((item) => (item.id !== newState.action.id))
            break;

        default:
            break;
    }
    return newState;
}

export default reducer;