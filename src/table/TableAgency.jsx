import React, {useState} from 'react'
import {BsFillPencilFill, BsFillTrashFill,BsRepeat, BsFillPlusCircleFill} from 'react-icons/bs'
import { IconContext } from "react-icons";
import { deleteAgency } from '../utils/api'
import AgencyModal from '../Modal/AgencyModal';
import AgencyModalUpdate from '../Modal/AgencyModalUpdate';
import AgencyModalRefresh from '../Modal/AgencyModalRefresh';
export default function TableAgency(props) {
    const [idAgency, setIdAgency] = useState(0)
    const [nameAgency, setNameAgency] = useState('')
    const [ratingAgency, setRatingAgency] = useState('')
    const [reviewsAgency, setReviewsAgency] = useState('')
    const [cityAgency, setCityAgency] = useState('')
    const [categoryAgency, setCategoryAgency] = useState('')
    const [websiteAgency, setWebsiteAgency] = useState('')
    const [logoAgency, setLogoAgency] = useState('')
    const [featuredAgency, setFeaturedAgency] = useState(false)

    
    let data = props.data.agencies
    async function onClick(e) {
        e.preventDefault()
        let response = await deleteAgency(e.currentTarget.id)
        if (response.ok) {
            window.location.reload(false)
        }
        }
  return (
    <div className='mt-2 w-75'>
        <AgencyModal idModal="exampleModal"/>
        <AgencyModalRefresh idModal="exampleModal3"/>
        <AgencyModalUpdate idModal="exampleModal2" agencyId={idAgency} agencyName={nameAgency} agencyRating={ratingAgency} agencyReviews={reviewsAgency} agencyCity={cityAgency} agencyCategory={categoryAgency} agencyWebsite={websiteAgency} agencyLogo={logoAgency} agencyFeatured={featuredAgency} />
        <IconContext.Provider value={{ size: "1.5em" }}>
            <div className='mx-auto w-75 text-end d-inline-block'>  <a href='#'role='button' data-bs-toggle="modal" data-bs-target="#exampleModal"> <BsFillPlusCircleFill/> Add </a> </div>
            <div className='mx-3 w-75 text-end d-inline'>  <a href='#'role='button' data-bs-toggle="modal" data-bs-target="#exampleModal3"> <BsRepeat/> RefreshData </a> </div>

        </IconContext.Provider>
        <div className='w-100 height'>

            <table className="table table-hover w-75 mx-auto table-striped">

                <thead>
                    <tr>
                        {Object.keys(data[0]).map((title, index) => (
                        <th key={index}>{title}</th>              
                        ))}
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => {
                        return <tr key={index}>
                            {Object.values(row).map((column, index) => {
                                return <td key={index}>{column}</td>
                        })}
                    <td><a role='button' onClick={onClick} href='#' className='button' id={row.id}> <BsFillTrashFill /></a>
                        <a id={row.id} href='#' role='button' className='button' data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={(e)=> {
                            setIdAgency(e.currentTarget.id)
                            setNameAgency(row.name)
                            setRatingAgency(row.rating)
                            setReviewsAgency(row.reviews)
                            setCategoryAgency(row.category_id)
                            setCityAgency(row.city_id)
                            setWebsiteAgency(row.website)
                            setLogoAgency(row.logo)
                            if (row.featured == true)
                            {
                            setFeaturedAgency(true)
                            }
                            else setFeaturedAgency(false)
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
