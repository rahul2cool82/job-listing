import { createSlice } from "@reduxjs/toolkit"

export const jobListSlice = createSlice({
    initialState: {
        jdList: [],
        totalCount: Infinity
    },
    name: 'Job List',
    reducers: {
        setTotalCount: (state, action) => state.totalCount = action.payload,
        addJobs: (state, action) => state.jdList = [...state.jdList, ...action.payload],
        clearJobs: (state, action) => state.jdList = []
    }
})

export const { setTotalCount, addJobs, clearJobs } = jobFilterSlice.actions;

export default jobFilterSlice.reducer;