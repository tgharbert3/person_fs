import { configureStore } from "@reduxjs/toolkit";

import pageSizeReducer from './pageSizeSlice'
import DbReducer from './databaseSlice';

export const store = configureStore({
    reducer: {
        pageReducer: pageSizeReducer,
        dbRedicer: DbReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch