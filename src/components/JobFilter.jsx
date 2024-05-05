import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation } from '../redux/slices/jobFilter';

function JobFilter() {

    const {minExp,minJdSalary,companyName,location,jobRole} = useSelector(state => state.jobFilter)
    const dispatch = useDispatch();

    return (
        <div>
            <p>minExp : {minExp}</p>
            <p>minJdSalary : {minJdSalary}</p>
            <p>companyName : {companyName}</p>
            <p>location : {location}</p>
            <p>jobRole : {jobRole}</p>
            <button onClick={() => dispatch(setLocation("remote"))}> Ret location remote </button>
        </div>
    )
}

export default JobFilter
