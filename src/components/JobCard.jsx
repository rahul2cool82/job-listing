import React from 'react'
import "../css/JobCard.css"

function JobCard({job}) {
  return (
    <div className='job-card'>
        <p className="posted">
            ⏳ Posted a month ago
        </p>

        <div className="company-details">
            <img src={job?.logoUrl} alt="Company logo" width={40} height={40} />
            <div className="company-info">
                <h2 className="company-name">{job?.companyName}</h2>
                <h3 className="job-role">{job?.jobRole}</h3>
                <h4 className="job-location">{job?.location}</h4>
            </div>
        </div>

        <p className="estimated-salary">Estimated Salary : ₹20 - 25 LPA</p>
        <h5 className='about-company'>About company:</h5>
        <h6 className="about-us">About us:</h6>

        <div className="job-description">
            <p>{job?.jobDetailsFromCompany}</p>
            <a href='#'>View job</a>
        </div>

        <div className="job-experience">
            <p className="job-experience-minimum">Minimum Experiance</p>
            <p className="actual-job-experience">5 years</p>
        </div>

        <button className="btn btn-easy-apply">
            ⚡ Easy Apply
        </button>

        <button className="btn btn-unlock">
            <div className="img-box">
                <img src="/images/face1.jpg" alt="Face 1" width={20} height={20} />
                <img src="/images/face2.jpg" alt="Face 2" width={20} height={20} />
            </div>
            Unlock referral asks
        </button>

    </div>
  )
}

export default JobCard
