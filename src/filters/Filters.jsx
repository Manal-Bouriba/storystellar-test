import React, { useState } from 'react'
import {  useEffect} from 'react'
import { BsFillCaretDownFill } from "react-icons/bs";
import slugify from 'slugify';

export default function Filters(props) {
  const [query, setQuery] = useState(props.city)
  const [result, setResult] = useState(props.cities.cities)
  const [filterText, setFilterText] = useState('Mieux Notés')
  function search(item) {
    return item.name.toLowerCase().includes(query.toLowerCase())
  }
  useEffect(()=>{
    setResult(props.cities.cities.filter(search))
    if (query==="" || query===props.city) {
      setResult(props.cities.cities)
    }
  }, [query])
  useEffect(()=>{
  }, [result])
  useEffect(()=>{
    if (props.order==='Best') {
      setFilterText('Mieux notés')
    }
    else if (props.order==='Most') {
      setFilterText('Avec le plus de votes')
    }
    else if (props.order==="AZ") {
      setFilterText('Ordre Alphabetique')
    }
  }, [props.order])


  function onSelect(e) {
    e.preventDefault()
    props.onOrder(e.target.id)
  }
  let name = props.category.name
  let categories = props.categories.categories
  const handleOnChange = (item) => {
    setQuery(item.target.value)
  }
  return (
    <div className='bg-gray pb-4 mb-5 Filters'>

      <header className='nav'>
        <p className='inter logo'>
        <a href='/storyscope' style={{textDecoration:"none", color:"black"}}> Storyscope</a> 
        </p>
      </header>
      <div className='container'>
        <h1 className='helvetica headline-2 text-center'>Meilleurs Agences de <span className='blue'>{props.category.display_name}</span> à {props.city} </h1>
      </div>
      <div>

      </div>
      <hr/>
      <div className="container pt-4 mx-auto">
        <div className="row">
            <div className="drop-down col-md-4 mb-4">
            <button className="dropbtn">
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='inter'>{props.category.name}</span>  <span className='arrow-bottom'><BsFillCaretDownFill size={13}/></span>
                    </div>
                </button>
                <div className="dropdown-content">
                {categories.map((category, index) => (
                  <a key={index} href={'/storyscope/' + category.slug + '/' + slugify(props.city)}> {category.name} </a>
              ))}
                    

                </div>
            </div>
            <div className="drop-down col-md-4 mb-4">
            <button className="dropbtn">
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='inter'>{filterText}</span>  <span className='arrow-bottom'><BsFillCaretDownFill size={13}/></span>
                    </div>
                </button>
                <div className="dropdown-content">
                    <a href="#" id='Best' onClick={onSelect}>Mieux notés</a>
                    <a href="#" id='Most' onClick={onSelect}>Avec le plus de votes</a>
                    <a href="#" id='AZ' onClick={onSelect}>Ordre Alphabetique</a>
                </div>
            </div>
            <div className="col-md-4 drop-down">
            <input type='text' className="dropbtn cityselector" placeholder='Ville' value={query} onChange={handleOnChange}>
            </input>

            <div className="dropdown-content">
                  {result.map((city, index)=>(
                    <a key={index} href={'/storyscope/' + props.category.slug + '/' + city.slug}>{city.name}</a>
                  ))}
                </div>
              {/*<div className="width mx-auto" onMouseOver={onOver} onClick={onClick}>
                <ReactSearchAutocomplete showIcon={false}
                showItemsOnFocus={false}
                inputSearchString={props.city}
                onSelect={handleOnSelect}
                items={cities}
                maxResults={7}
                placeholder={"Ville"}
                styling={{  zIndex: 4,
                            display: "block",
                            borderRadius: "0px",
                            boxShadow: "none"}} 
                />
                </div>*/}

                  
            </div>
        </div>
      </div>
    </div>
  )
}
