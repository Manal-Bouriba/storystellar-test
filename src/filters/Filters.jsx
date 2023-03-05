import React from 'react'
import './filters.css'

export default function Filters(props) {
  return (
    <div className='bg-gray pb-4 mb-5 Filters'>
      <div className='nav'>
        <p className='inter logo'>
          Storyscope
        </p>
      </div>
      <div className='container'>
        <p className='helvetica headline-2 text-center'>Meilleurs Agences de <span className='blue'>{props.category}</span> à {props.city} </p>
      </div>
      <hr/>
      <div className="container pt-4 mx-auto">
        <div className="row">
            <div className="drop-down col-md-4 mb-4">
            <button className="dropbtn">
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='inter'>Service</span>  <span className='arrow-bottom'>⌄</span>
                    </div>
                </button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="drop-down col-md-4 mb-4">
            <button className="dropbtn">
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='inter'>Filtre</span>  <span className='arrow-bottom'>⌄</span>
                    </div>
                </button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="drop-down col-md-4">
                <button className="dropbtn">
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='inter'>Ville</span>  <span className='arrow-bottom'>⌄</span>
                    </div>
                </button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
