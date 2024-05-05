import { configureStore } from "@reduxjs/toolkit"
import jobFilter from "./slices/jobFilter"
import jobList from "./slices/jobList"

export const store = configureStore({
    reducer: {
        jobFilter: jobFilter,
        jobs: jobList
    }
})