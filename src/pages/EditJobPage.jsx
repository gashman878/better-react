import React from 'react'
import { useState } from 'react';
import { useParams, useLoaderData, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';





const EditJobPage = ({updateJobSubmit}) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const job = useLoaderData();

    const [title, setTitle] = useState(job.title);
    const [type, setType] = useState(job.type);
    const [location, setLocation] = useState(job.location);
    const [description, setDescription] = useState(job.description);
    const [salary, setSalary] = useState(job.salary);
    const [companyName, setCompanyName] = useState(job.companyname);
    const [companyDescription, setCompanyDescription] = useState(job.companyDescription);
    const [companyEmail, setCompanyEmail] = useState(job.companyEmail);
    const [companyPhone, setCompanyPhone] = useState(job.companyPhone);


    const submitForm = (e) => {
    e.preventDefault();
    
    const updatedJob = {
        id,
        title,
        type,
        location,
        description,
        salary,
        companyName,
        companyDescription,
        companyEmail,
        companyPhone
    };

    updateJobSubmit(updatedJob);
    toast.success('Your Job was Updated Successfully');
    return navigate(`/jobs/${id}`);
    }


  return (
    <div className="jobBodies">
      <form onSubmit={submitForm}>
        <p className="addJob">Update Job</p>

        <label className="labelCap">Job Type</label><br />
        <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)} required>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
        </select><br />

        <label htmlFor="title" className="labelCap">Job Listing Name</label><br />
        <input type="text" name='title' id='title' placeholder="eg. Beautiful Apartment in Miami" value={title} onChange={(e) => setTitle(e.target.value)}/><br />

        <label htmlFor="description" className="labelCap">Description</label><br />
        <textarea name="description" id="description" placeholder="Add any job duties, expectations, requirements, etc" value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br />

        <label htmlFor="salary" className="labelCap">Salary</label><br />
        <select name="salary" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)}>
            <option value="Under $50k">Under $50k</option>
            <option value="$50k - $60k">$50k - $60k</option>
            <option value="$60k - $70k">$60k - $70k</option>
            <option value="$70k - $80k">$70k - $80k</option>
            <option value="$80k - $90k">$80k - $90k</option>
            <option value="$90k - $100k">$90k - $100k</option>
            <option value="Over $100k">Over $100k</option>
        </select><br />

        <label htmlFor="location" className="labelCap">Location</label><br />
        <input type="text" name='location' id='location' placeholder="Company Location" value={location} onChange={(e) => setLocation(e.target.value)}/><br />

        <label htmlFor="type" className="labelCap">Job Type</label><br />
        <select name="type" id="type" value={type} onChange={(e) => setType}>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
        </select><br />

        <p className='companyInfoo'>Company Info</p>

        <label htmlFor="companyName" className="labelCap">Company Name</label><br />
        <input type="text" name='companyName' id='companyName' placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/><br />

        <label htmlFor="companyDescription" className='labelCap'>Company Description</label><br />
        <textarea name="companyDescription" id="companyDescription" placeholder="What does your company do?" value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)}></textarea><br />

        <label htmlFor="companyPhone" className="labelCap">Contact Email</label><br />
        <input type="email" name='companyEmail' id='companyEmail' placeholder="Email address for applicants" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)}/><br />

        <label htmlFor="companyPhone" className="labelCap">Contact Phone</label><br />
        <input type="tel" name='companyPhone' id='companyPhone' placeholder="Optional phone for applicants" value={companyPhone} onChange={(e) => setCompanyPhone(e.target.value)}/><br />

        <button type="submit" className="formBtn">Update Job</button>
      </form>

      <div className="footerr">I'm just a footer</div>

    </div>
  )
}

export default EditJobPage