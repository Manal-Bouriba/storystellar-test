import React from 'react'
import { useState } from 'react';
import { addAgency } from '../utils/api';


export default function AgencyModal(props) {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      const handleCheckbox = (event) => {
        const name = event.target.name;
        const value = event.target.checked;
        setInputs(values => ({...values, [name]: value}))
      }
    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = await addAgency(inputs.agencyName, inputs.agencyRating, inputs.agencyReviews, inputs.agencyCity, inputs.agencyCategory, inputs.agencyWebsite, inputs.agencyLogo, inputs.agencyFeatured)
        if (response.ok) {
            window.location.reload(false)
        }
      }

    return (
    <div className="modal fade" id={props.idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"> Create agency</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label for="agencyName" className="form-label">Name</label>
            <input value={inputs.agencyName || ""} onChange={handleChange} type="text" name='agencyName' className="form-control" id="agencyName"></input>
        </div>
        <div className="mb-3">
            <label for="agencyRating" className="form-label">Rating</label>
            <input value={inputs.agencyRating || ""} onChange={handleChange} type="text" name='agencyRating' className="form-control" id="agencyRating"></input>
        </div>
        <div className="mb-3">
            <label for="agencyReviews" className="form-label">Review</label>
            <input value={inputs.agencyReviews || ""} onChange={handleChange} type="text" name='agencyReviews' className="form-control" id="agencyReviews"></input>
        </div>
        <div className="mb-3">
            <label for="agencyCity" className="form-label">City</label>
            <input value={inputs.agencyCity || ""} onChange={handleChange} type="text" name='agencyCity' className="form-control" id="agencyCity"></input>
        </div>
        <div className="mb-3">
            <label for="agencyCategory" className="form-label">Category</label>
            <input value={inputs.agencyCategory || ""} onChange={handleChange} type="text" name='agencyCategory' className="form-control" id="agencyCategory"></input>
        </div>
        <div className="mb-3">
            <label for="agencyWebsite" className="form-label">Website Url</label>
            <input value={inputs.agencyWebsite || ""} onChange={handleChange} type="text" name='agencyWebsite' className="form-control" id="agencyWebsite"></input>
        </div>
        <div className="mb-3">
            <label for="agencyLogo" className="form-label">Logo</label>
            <input value={inputs.agencyLogo || ""} onChange={handleChange} type="text" name='agencyLogo' className="form-control" id="agencyLogo"></input>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className='form-check-label' onChange={handleCheckbox} id="agencyFeatured" name="agencyFeatured"/>
            <label for="agencyFeatured" className="form-check-label">Featured</label>
            
        </div>
        <button type="submit" value="Submit" className="btn btn-primary">Save</button>

        </form>
      </div>

    </div>
  </div>
</div>
  )
}
