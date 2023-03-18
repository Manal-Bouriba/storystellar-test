import React, { useRef } from 'react'
import './results.css'
import Company from '../company/Company'
import useLazyLoad from '../utils/useLazyLoad'

export default function Results(props) {

  let slug = props.category.category.category.slug
  let city = props.category.city
  let order = props.order
  if (!order) {order = 'Best'}
  const triggerRef = useRef(null)
  const {data, loading, hasMore} = useLazyLoad({triggerRef, slug, city, order})
  return (
    <div>
        <div className='container text-center'>
        {/*large and medium screens*/}
        <div className='row justify-content-center'>
            {data.map((agency, index) => {
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
        <div ref={triggerRef} className={ "text-center" + (hasMore ? 'd-none' : 'd-block')}></div>
        <div className={ "text-center "+ (!hasMore ? 'd-none' : 'd-block') }>Loading...</div>
        <div className={ "text-center "+ (hasMore ? 'd-none' : 'd-block') }>End of results.</div>

      </div>
    </div>
  )
}
