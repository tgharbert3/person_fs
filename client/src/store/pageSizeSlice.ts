import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface pageSizeState {
    offset: number;
    limit: number;
}

const initialState: pageSizeState = {
    offset: 0,
    limit: 5,
}

export const pageSizeSlice = createSlice({
    name: 'pageSize',
    initialState,
    reducers: {
        offsetSet: (state, action: PayloadAction<number>) => {
            state.offset = action.payload
        },
        limitSet: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        }
    }
})

export const { offsetSet, limitSet } = pageSizeSlice.actions;
export default pageSizeSlice.reducer;

export const selectOffset = (state: RootState) => state.pageReducer.offset;
export const selectLimit = (state: RootState) => state.pageReducer.limit;