import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

interface DbState {
    numPeople: number;
}

const initialState: DbState = {
    numPeople: 0,
}


export const DbSlice = createSlice({
    name:'dbslice',
    initialState,
    reducers: {
        peopleAdded: (state, action: PayloadAction<number>) => {
            state.numPeople = action.payload;
        }
    }
})

export const { peopleAdded } = DbSlice.actions;
export default DbSlice.reducer;

export const selectNumPeople = (state: RootState) => state.dbRedicer.numPeople;