import React from 'react'
import './results.css'
import SponsoredCompany from '../sponsoredCompany/SponsoredCompany'
export default function Results(props) {
  let agencies = props.agencies.agencies
  return (
    <div>
        <div className='container'>
        {/*large and medium screens*/}
        <div className='row justify-content-center'>
            {agencies.map((agency, index) => (
              <SponsoredCompany key={index} className='inter col-md-4 col-sm-6 my-4' companyName={agency.name} websiteUrl={agency.website} logo={agency.logo} rating={agency.rating} location={agency.city.name} compType={agency.category.name} numWorkers='60' cost='5000€' projCount='58'/>
            ))}
            

        </div>
        {/*small screens */}

      </div>
    </div>
  )
}
