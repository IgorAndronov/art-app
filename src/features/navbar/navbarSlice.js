const initialState = {}

export default function filtersReducer(state = initialState, action) {
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
