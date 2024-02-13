import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { travelSlice } from './travel'

const store = configureStore({

    reducer: {
        auth:authSlice.reducer,
        travel:travelSlice.reducer,

    },
})

export default store