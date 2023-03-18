import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './filters.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {  useEffect} from 'react'

export default function Filters(props) {
  const [focus, setFocus] = useState(false)
  
  useEffect(() => {
    if (focus===true) {
    document.querySelector('input').focus()
    }
    if (focus==false) {
      document.activeElement.blur();
    }
    },[focus])
  function onOver(e) {
    setFocus(true)
  }

  function onClick(e) {
    setFocus(false)
    setFocus(true)
  }

  function onLeave(e) {
    setFocus(false)
  }
  function onSelect(e) {
    e.preventDefault()
    props.onOrder(e.target.id)
  }
  let categories = props.categories.categories
  let cities = props.cities.cities
  const handleOnSelect = (item) => {
    window.location.href = "/" + props.category.slug + "/" + item.slug;
  }
  return (
    <div className='bg-gray pb-4 mb-5 Filters'>
      <div className='nav'>
        <p className='inter logo'>
        <Link className='no-deco' to='/'> Storyscope</Link> 
        </p>
      </div>
      <div className='container'>
        <p className='helvetica headline-2 text-center'>Meilleurs Agences de <span className='blue'>{props.category.display_name}</span> à {props.city} </p>
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
                {categories.map((category, index) => (
                  <a key={index} href={'/' +category.slug + '/paris'}> {category.name} </a>
              ))}
                    

                </div>
            </div>
            <div className="drop-down col-md-4 mb-4">
            <button className="dropbtn">
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='inter'>Filtre</span>  <span className='arrow-bottom'>⌄</span>
                    </div>
                </button>
                <div className="dropdown-content">
                    <a href="#" id='Best' onClick={onSelect}>Mieux notés</a>
                    <a href="#" id='Most' onClick={onSelect}>Avec le plus de votes</a>
                    <a href="#" id='AZ' onClick={onSelect}>Ordre Alphabetique</a>
                </div>
            </div>
            <div className="col-md-4">
              <div className="width mx-auto" onMouseOver={onOver} onClick={onClick} onMouseLeave={onLeave}>
                <ReactSearchAutocomplete showIcon={false}
                showItemsOnFocus={true}
                onSelect={handleOnSelect}
                items={cities}
                maxResults={7}
                placeholder={"Ville"}
                styling={{  zIndex: 4,
                            display: "block",
                            borderRadius: "0px",
                            boxShadow: "none"}} 
                />
              </div>
                  
            </div>
        </div>
      </div>
    </div>
  )
}
