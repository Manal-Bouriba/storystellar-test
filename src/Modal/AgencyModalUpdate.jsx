import React, { useEffect } from 'react'
import { useState } from 'react';
import { editAgency } from '../utils/api';
export default function AgencyModalUpdate(props) {
    let featured = props.agencyFeatured
    if (!featured) {featured = false}
    const [check, setCheck] = useState(()=> {
        if (props.featured ==true) {return true}
        else return false
    });


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
        setCheck(!check)
      }
      useEffect(()=>{
        let box = document.getElementById('agencyFeatured')
        if (check) {
            box.checked = true
        }
        else {box.checked = false}
      }, [check])
    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = await editAgency(props.agencyId, inputs.agencyName, inputs.agencyRating, inputs.agencyReviews, inputs.agencyCity, inputs.agencyCategory, inputs.agencyWebsite, inputs.agencyLogo, inputs.agencyFeatured)
        if (response.ok) {
            window.location.reload(false)
        }
      }

    return (
    <div className="modal fade" id={props.idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Agency</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label for="agencyName" className="form-label">Name</label>
            <input value={inputs.agencyName || props.agencyName} onChange={handleChange} type="text" name='agencyName' className="form-control" id="agencyName"></input>
        </div>
        <div className="mb-3">
            <label for="agencyRating" className="form-label">Rating</label>
            <input value={inputs.agencyRating || props.agencyRating} onChange={handleChange} type="text" name='agencyRating' className="form-control" id="agencyRating"></input>
        </div>
        <div className="mb-3">
            <label for="agencyReviews" className="form-label">Review</label>
            <input value={inputs.agencyReviews || props.agencyReviews} onChange={handleChange} type="text" name='agencyReviews' className="form-control" id="agencyReviews"></input>
        </div>
        <div className="mb-3">
            <label for="agencyCity" className="form-label">City</label>
            <input value={inputs.agencyCity || props.agencyCity} onChange={handleChange} type="text" name='agencyCity' className="form-control" id="agencyCity"></input>
        </div>
        <div className="mb-3">
            <label for="agencyCategory" className="form-label">Category</label>
            <input value={inputs.agencyCategory || props.agencyCategory} onChange={handleChange} type="text" name='agencyCategory' className="form-control" id="agencyCategory"></input>
        </div>
        <div className="mb-3">
            <label for="agencyWebsite" className="form-label">Website Url</label>
            <input value={inputs.agencyWebsite || props.agencyWebsite} onChange={handleChange} type="text" name='agencyWebsite' className="form-control" id="agencyWebsite"></input>
        </div>
        <div className="mb-3">
            <label for="agencyLogo" className="form-label">Logo</label>
            <input value={inputs.agencyLogo || props.agencyLogo} onChange={handleChange} type="text" name='agencyLogo' className="form-control" id="agencyLogo"></input>
        </div>
        <div className="mb-3">
            <input  className="form-check-input" type="checkbox" onChange={handleCheckbox} checked={check} id="agencyFeatured" name="agencyFeatured"/>
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
