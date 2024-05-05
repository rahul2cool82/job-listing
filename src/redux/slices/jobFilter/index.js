import { createSlice } from "@reduxjs/toolkit"

export const jobFilterSlice = createSlice({
    initialState: {
        minExp: 0,
        minJdSalary: 0,
        companyName: null,
        location: null,
        jobRole: null,
    },
    name: 'Job List',
    reducers: {
        setMinExp: (state, action) => {
            state.minExp = action.payload;
        },
        setMinJdSalary: (state, action) => {
            state.minJdSalary = action.payload;
        },
        setCompanyName: (state, action) => {
            state.companyName = action.payload;
        },
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setJobRole: (state, action) => {
            state.jobRole = action.payload;
        },
    }
})

export const { setMinExp, setMinJdSalary, setCompanyName, setLocation, setJobRole } = jobFilterSlice.actions;

export default jobFilterSlice.reducer;