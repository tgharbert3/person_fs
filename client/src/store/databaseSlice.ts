import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";
import { createAppAsyncThunk } from "./withTypes";

interface Person {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    streetNumber: number;
}

interface DbState {
    people: Person[];
    personToEdit: number | null;
    status: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | null,
}

const initialState: DbState = {
    people: [],
    personToEdit: null,
    status: 'idle',
    error: null,
}

export const DbSlice = createSlice({
    name:'dbslice',
    initialState,
    reducers: {
        peopleAdded: (state, action: PayloadAction<Person[]>) => {
            state.people = action.payload;
        },
        personToEditSet: (state, action: PayloadAction<number>) => {
            state.personToEdit = action.payload;
        },
        peopleReset: (state) => {
            state.personToEdit = initialState.personToEdit;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAllPeople.pending, (state) => {
            state.status = 'pending';
        })
        builder.addCase(fetchAllPeople.fulfilled, (state, action) => {
            state.people = action.payload;
            state.status = 'succeeded';
        })
        builder.addCase(fetchAllPeople.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message ?? 'Unkown Error'
        })
    },
})

export const fetchAllPeople = createAppAsyncThunk('people/fetchAllPeople', async () =>{
    const response = await fetch('http://localhost:8080/person/all');
    const data = await response.json();
    
    return data;
},
{
    condition(_arg, thunkApi) {
        const numPeopleStatus = selectAllPeopleStatus(thunkApi.getState())
        if (numPeopleStatus !== 'idle') {
            return false;
        }
    },
})


export const { peopleAdded, personToEditSet, peopleReset } = DbSlice.actions;
export default DbSlice.reducer;

export const selectAllPeople = (state: RootState) => state.dbReducer.people;
export const selectPersonToEdit = (state: RootState) => state.dbReducer.personToEdit;
export const selectAllPeopleStatus = (state: RootState) => state.dbReducer.status;