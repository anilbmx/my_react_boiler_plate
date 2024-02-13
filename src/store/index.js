import { configureStore } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) => {
    return combineReducers({
        sampleStore: SampleReducer,
        router: connectRouter(history)
    })
}

export const rootStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializable: false })
    })
}
