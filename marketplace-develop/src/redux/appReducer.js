import { TOGGLE_AUTH, TOGGLE_PASSCODE } from "./types"

const initialState = {
    isAuthenticated: false,
    isPasscodeEnabled: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_AUTH:
            return { ...state, isAuthenticated: true }
        case TOGGLE_PASSCODE:
            return { ...state, isPasscodeEnabled: !state.isPasscodeEnabled }
        default:
            return state
    }
}

export const localPasscodeToggle = () => ({type: TOGGLE_PASSCODE})