import React from 'react'
import { useState } from 'react';
import { editCategory } from '../utils/api';
export default function CategotyModalUpdate(props) {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = await editCategory(props.categoryId, inputs.categoryName, inputs.categoryImage, inputs.categoryDisplayName)
        if (response.ok) {
            window.location.reload(false)
        }
      }

    return (
    <div className="modal fade" id={props.idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Category</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label for="categoryName" className="form-label">Name</label>
            <input value={inputs.categoryName || props.categoryName} onChange={handleChange} type="text" name='categoryName' className="form-control" id="categoryName"></input>
        </div>
        <div className="mb-3">
        <label for="categoryImage" className="form-label">Image URL</label>
        <input value={inputs.categoryImage || props.categoryImage} onChange={handleChange} type="text" name='categoryImage' className="form-control" id="categoryImage"></input>
        </div>
        <div className="mb-3">
        <label for="categoryDisplayName" className="form-label">Display Name</label>
        <input value={inputs.categoryDisplayName || props.categoryDisplayName} onChange={handleChange} type="text" name='categoryDisplayName' className="form-control" id="categoryDisplayName"></input>
        </div>
        <div className="form-text">
            After every edit you perform, please hit sluggify to keep URLs accurate!
        </div>
        <button type="submit" value="Submit" className="btn btn-primary">Save</button>

        </form>
      </div>

    </div>
  </div>
</div>
)
}
