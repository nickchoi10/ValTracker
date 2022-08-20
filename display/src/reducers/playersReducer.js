import {createSlice} from "@reduxjs/toolkit";

const playersReducer = createSlice({
    name : 'users',
    initialState : [],
    reducers : {
        setPlayers(state, action) {
            return action.payload
        },
    }
})

export const setAPI = (data) => {
    return async dispatch => {
        dispatch(setPlayers(data))
    }
}

export const {setPlayers} = playersReducer.actions
export default playersReducer.reducer