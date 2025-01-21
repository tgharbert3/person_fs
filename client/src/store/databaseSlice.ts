import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";
import { createAppAsyncThunk } from "./withTypes";

interface DbState {
    numPeople: number;
    status: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | null,
}

const initialState: DbState = {
    numPeople: 0,
    status: 'idle',
    error: null,
}

export const DbSlice = createSlice({
    name:'dbslice',
    initialState,
    reducers: {
        peopleAdded: (state, action: PayloadAction<number>) => {
            state.numPeople = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchNumPeople.pending, (state) => {
            state.status = 'pending';
        })
        builder.addCase(fetchNumPeople.fulfilled, (state, action) => {
            state.numPeople = action.payload;
            state.status = 'succeeded';
        })
        builder.addCase(fetchNumPeople.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message ?? 'Unkown Error'
        })
    },
})

export const fetchNumPeople = createAppAsyncThunk('people/fetchNumPeople', async () =>{
    const response = await fetch('http://localhost:8080/person/all');
    const data = await response.json();
    
    return data.length;
},
{
    condition(_arg, thunkApi) {
        const numPeopleStatus = selectNumPeopleStatus(thunkApi.getState())
        if (numPeopleStatus !== 'idle') {
            return false;
        }
    },
})

export const { peopleAdded } = DbSlice.actions;
export default DbSlice.reducer;

export const selectNumPeople = (state: RootState) => state.dbReducer.numPeople;
export const selectNumPeopleStatus = (state: RootState) => state.dbReducer.status;