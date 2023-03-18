import React from 'react'
import { useState } from 'react';
import { refreshAgencies } from '../utils/api';


export default function AgencyModalRefresh(props) {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = await refreshAgencies(inputs.agencyCategory, inputs.agencyCity)
        if (response.status === 'updated successfully') {
            window.location.reload(false)
        }
      }

    return (
    <div className="modal fade" id={props.idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">City</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label for="agencyCategory" className="form-label">Category name</label>
            <input value={inputs.agencyCategory || ""} onChange={handleChange} type="text" name='agencyCategory' className="form-control" id="agencyCategory"></input>
        </div>
        <div className="mb-3">
        <label for="agencyCity" className="form-label">City Name</label>
        <input value={inputs.agencyCity || ""} onChange={handleChange} type="text" name='agencyCity' className="form-control" id="agencyCity"></input>
        </div>

        <button type="submit" value="Submit" className="btn btn-primary">Save</button>

        </form>
      </div>

    </div>
  </div>
</div>
  )
}
