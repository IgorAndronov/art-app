const initialState = {}

export default function navbarReducer(state = initialState, action) {
    switch (action.type) {
        case 'navbar/menuclicked': {
            return {
                ...state,
                status: action.payload,
            }
        }
        default:
            return state
    }
}
