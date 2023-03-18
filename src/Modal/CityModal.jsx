import React from 'react'
import { useState } from 'react';
import { addCity } from '../utils/api';


export default function CityModal(props) {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = await addCity(inputs.cityName, inputs.cityInhabitants)
        if (response.ok) {
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
            <label for="cityName" className="form-label">Name</label>
            <input value={inputs.cityName || ""} onChange={handleChange} type="text" name='cityName' className="form-control" id="cityName"></input>
        </div>
        <div className="mb-3">
        <label for="cityInhabitants" className="form-label">Inhabitants</label>
        <input value={inputs.cityInhabitants || ""} onChange={handleChange} type="text" name='cityInhabitants' className="form-control" id="cityInhabitants"></input>
        </div>

        <button type="submit" value="Submit" className="btn btn-primary">Save</button>

        </form>
      </div>

    </div>
  </div>
</div>
  )
}
