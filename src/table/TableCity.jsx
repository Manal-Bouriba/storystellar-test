import React, {useState} from 'react'
import {BsFillPencilFill, BsFillTrashFill, BsFillPlusCircleFill, BsWindowStack} from 'react-icons/bs'
import { IconContext } from "react-icons";
import { deleteCity, slugifyCities } from '../utils/api'
import CityModal from '../Modal/CityModal';
import CityModalUpdate from '../Modal/CityModalUpdate';

export default function TableCity(props) {
    const [idCity, setIdCity] = useState(0)
    const [nameCity, setNameCity] = useState('')
    const [inhabitantsCity, setInhabitantsCity] = useState('')
    let data = props.data
    async function onClick(e) {
        e.preventDefault()
        let response = await deleteCity(e.currentTarget.id)
        if (response.ok) {
            window.location.reload(false)
        }
        }
    async function sluggify(e) {
        e.preventDefault()
        let response = await slugifyCities()
        if (response.response = 'slugified!') {
            window.location.reload(false)
        }
        }
  return (
    <div className='mt-2 w-100'>
        <CityModal idModal="exampleModal"/>
        <CityModalUpdate idModal="exampleModal2" cityId={idCity} cityName={nameCity} cityInhabitants={inhabitantsCity} />
        <IconContext.Provider value={{ size: "1.5em" }}>
            <div className='mx-auto w-75 text-end d-inline-block'>  <a href='#'role='button' data-bs-toggle="modal" data-bs-target="#exampleModal"> <BsFillPlusCircleFill/> Add </a> </div>
            <div className='mx-5 w-75 text-end d-inline'>  <a href='#'role='button' onClick={sluggify}> <BsWindowStack/> Sluggify </a> </div>
        </IconContext.Provider>
        <div className='w-100 height'>

            <table className="table table-hover w-75 mx-auto table-striped">

                <thead>
                    <tr>
                        {Object.keys(data.data[0]).map((title, index) => (
                        <th key={index}>{title}</th>              
                        ))}
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((row, index) => {
                        return <tr key={index}>
                            {Object.values(row).map((column, inde) => {
                                return <td key={inde}>{column}</td>
                        })}
                    <td><a role='button' onClick={onClick} href='#' className='button' id={row.id}> <BsFillTrashFill /></a>
                        <a id={row.id} href='#' role='button' className='button' data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={(e)=> {
                            setIdCity(e.currentTarget.id)
                            setNameCity(row.name)
                            setInhabitantsCity(row.inhabitants)
                        }}> <BsFillPencilFill/></a>
                    </td>
            </tr>
              }
            )}
            </tbody>
        </table>
    </div>
    </div>
  )
}
