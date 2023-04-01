import React, { useRef, useState, useEffect } from 'react'
import './results.css'
import Company from '../company/Company'
import useLazyLoad from '../utils/useLazyLoad'
import { getAgencies } from "../utils/api";
const UniqueSet = require('@sepiariver/unique-set'); 
export default function Results(props) {
  const [pageNum, setPageNum] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  let order = props.order
  async function loadMore(slug, city, pageNum, order) {
    setLoading(true)
    let s = await getAgencies(slug, city, pageNum, order);
    if (pageNum===1) {
      setData(s.agencies)
    }
    else {
    setData([...data, ...s.agencies]) }
    setPageNum(pageNum + 1)
    setTotalPages(s.pages)
    setLoading(false)
  }
  useEffect(()=>{
    setData([])
    loadMore(slug, city, pageNum, order)
  }, [])
  
  useEffect(()=>{
    setData([])
    setPageNum(1)
    loadMore(slug, city, 1, order)
  }, [order])
  let slug = props.category.category.category.slug
  let city = props.category.city
  if (!order) {order = 'Best'}
  {/*const triggerRef = useRef(null)
const {data, loading, hasMore} = useLazyLoad({triggerRef, slug, city, order})*/}

  let dataSet = new UniqueSet(data)
  return (
    <div>
        <div className='container text-center'>
        {/*large and medium screens*/}
        <div className='row justify-content-center'>
            {Array.from(dataSet).map((agency, index) => {
                let name = ''
                if (agency.name.includes('-')) {
                  name = agency.name.substring(0, agency.name.indexOf("-"))
                }
                else if (agency.name.includes('_')) {
                  name = agency.name.substring(0, agency.name.indexOf("_"))
                }
                else if (agency.name.includes('|')) {
                  name = agency.name.substring(0, agency.name.indexOf("|"))
                }
                else if (agency.name.includes('.')) {
                  name = agency.name.substring(0, agency.name.indexOf("."))
                }
                else if (agency.name.includes('(')) {
                  name = agency.name.substring(0, agency.name.indexOf("("))
                }
                else if (agency.name.includes('⎮')) {
                  name = agency.name.substring(0, agency.name.indexOf("⎮"))
                }
                else name = agency.name
                return <Company key={index} className='inter col-md-4 col-sm-6 my-4' reviews={agency.reviews} companyName={ name } websiteUrl={agency.website} logo={agency.logo} rating={agency.rating} location={agency.city.name} compType={agency.category.name} numWorkers='60' cost='5000€' projCount='58'/>
              }
            )}
        </div>
        <div className={ "text-center "+ (!loading ? 'd-none' : 'd-block') }>Loading...</div>
        {/*<div ref={triggerRef} className={ "text-center" + (hasMore ? 'd-none' : 'd-block')}></div>*/}
        <a role='button' className={(pageNum > totalPages || loading? 'd-none': 'd-block')} onClick={()=>{if (pageNum<=totalPages) { loadMore(slug, city, pageNum, order)}}}>load more</a>
        {/*<div className={ "text-center "+ (!hasMore ? 'd-none' : 'd-block') }>Loading...</div>
        <div className={ "text-center "+ (hasMore ? 'd-none' : 'd-block') }>End of results.</div>*/}

      </div>
    </div>
  )
}
