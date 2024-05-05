import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListJobs } from '../services/api.service'
import { addJobs, setTotalCount } from '../redux/slices/jobList'
import JobCard from './JobCard'

function JobList() {

    const {jdList, totalCount} = useSelector((state) => state.jobs)
    const {minExp,minJdSalary,companyName,location,jobRole} = useSelector(state => state.jobFilter)
    const dispatch = useDispatch()

    const [limit, setLimit] = useState(20)
    const [offset, setOffset] = useState(0);

    const [loading, setLoading] = useState(false);
    const loader = useRef(null);

    useEffect(() => {
        fetchJobs()
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            root: null,
            rootMargin: '20px',
            threshold: 1.0,
        });
        if (loader.current) {
            observer.observe(loader.current);
        }
        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, [loading]);

    const fetchJobs = () => {

        if(jdList.length >= totalCount) {
            return;
        }

        setLoading(true)
        fetchListJobs(limit, offset)
        .then((result) => {
            dispatch(setTotalCount(result.totalCount))
            dispatch(addJobs(result.jdList))
        })
        .catch(console.error)
        .finally(() => setLoading(false))
    }

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            fetchJobs()
        }
    };

    const listFilteredJobs = () => {
        return Array.from(jdList).filter((job) => {

            if(minExp && (parseInt(job.minExp) <= minExp || !job.minExp)) {
                return false
            }

            if(minJdSalary && (parseInt(job.minJdSalary) <= minJdSalary || !job.minJdSalary)) {
                return false
            }

            if(companyName && !String(job.companyName).toLowerCase().includes(companyName.toLowerCase())) {
                return false
            }

            if(location) {

                if(location == 'remote' && job.location != 'remote') {
                    return false
                }
                else if( location == 'in-office' && job.location == 'remote' ) {
                    return false
                }
            }

            if(jobRole && !(String(job.jobRole).toLowerCase() == (jobRole.toLowerCase()))) {
                return false
            }

            return true
        })
    }

    return (
        <div>
            <ul>
                {
                    listFilteredJobs().map((job, index) => (
                        <li key={job?.jdUid + index}> <JobCard job={job} /> </li>
                    ))
                }

            </ul>

            

            <div ref={loader} style={{ visibility: loading ? 'visible' : 'hidden' }}>
                Loading...
            </div>
        </div>
    )
}

export default JobList
