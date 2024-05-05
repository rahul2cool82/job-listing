import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCompanyName, setJobRole, setLocation, setMinExp, setMinJdSalary } from '../redux/slices/jobFilter';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import "../css/JobFilter.css"
import { TextField } from '@mui/material';

function JobFilter() {

    const {minExp,minJdSalary,companyName,location,jobRole} = useSelector(state => state.jobFilter)
    const dispatch = useDispatch();
    const [compName, setCompName] = useState(companyName);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setCompanyName(compName))
        }, 500)
        return () => {clearTimeout(timer)}
    }, [compName])

    return (
        <section className='job-filter'>
            
            <div className="role filter-box">
                <FormControl>
                    <InputLabel id="role">Roles</InputLabel>
                    <Select
                        labelId="role"
                        id="role-helper"
                        label="Roles"
                        onChange={(ev) => dispatch(setJobRole(ev.target.value))}
                    >
                        <MenuItem value={0}>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'backend'}>Backend</MenuItem>
                        <MenuItem value={'frontend'}>Frontend</MenuItem>
                        <MenuItem value={'ios'}>Ios</MenuItem>
                    </Select>
                </FormControl>
            </div>
            
            <div className="employees filter-box">
                <FormControl>
                    <InputLabel id="employees">Number Of Employees</InputLabel>
                    <Select
                        labelId="employees"
                        id="employees-helper"
                        label="Number of Employees"
                    >
                        <MenuItem value={0}>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>1-10</MenuItem>
                        <MenuItem value={20}>11-20</MenuItem>
                        <MenuItem value={30}>21-30</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className="experience filter-box">
                <FormControl>
                    <InputLabel id="experience">Experience</InputLabel>
                    <Select
                        labelId="experience"
                        id="experience-helper"
                        label="Experience"
                        onChange={(ev) => dispatch(setMinExp(ev.target.value))}
                    >
                        <MenuItem value={0}>
                            <em>Fresher</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>

                    </Select>
                </FormControl>
            </div>

            <div className="location filter-box">
                <FormControl>
                    <InputLabel id="location">Remote</InputLabel>
                    <Select
                        labelId="location"
                        id="location-helper"
                        label="Remote"
                        onChange={(ev) => dispatch(setLocation(ev.target.value))}
                    >
                        <MenuItem value={''}>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'remote'}>Remote</MenuItem>
                        <MenuItem value={'hybrid'}>Hybrid</MenuItem>
                        <MenuItem value={'in-office'}>In office</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className="basepay filter-box">
                <FormControl>
                    <InputLabel id="basepay">Minimum Base Pay Salary </InputLabel>
                    <Select
                        labelId="basepay"
                        id="basepay-helper"
                        label="Minimum Base Pay Salary"
                        onChange={(ev) => dispatch(setMinJdSalary(ev.target.value))}
                    >
                        <MenuItem value={0}>0L</MenuItem>
                        <MenuItem value={10}>10L</MenuItem>
                        <MenuItem value={20}>20L</MenuItem>
                        <MenuItem value={30}>30L</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className="company filter-box">
                <TextField id="company" label="Company" variant="outlined" onChange={(ev) => setCompName(ev.target.value)} />
            </div>

        </section>
    )
}

export default JobFilter
