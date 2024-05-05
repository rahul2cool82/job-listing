import { createSlice } from "@reduxjs/toolkit"

export const jobListSlice = createSlice({
    initialState: {
        jdList: [],
        totalCount: Number.MAX_VALUE
    },
    name: 'Job List',
    reducers: {
        setTotalCount: (state, action) => { state.totalCount = action.payload },
        addJobs: (state, action) => { state.jdList = [...state.jdList, ...action.payload] },
        clearJobs: (state, action) => { state.jdList = [] }
    }
})

export const { setTotalCount, addJobs, clearJobs } = jobListSlice.actions;

export default jobListSlice.reducer;