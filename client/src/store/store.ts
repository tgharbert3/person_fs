import { configureStore } from "@reduxjs/toolkit";
import pageSizeReducer from './pageSizeSlice'

export const store = configureStore({
    reducer: {
        pageReducer: pageSizeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch