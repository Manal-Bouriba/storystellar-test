import React from 'react'
import './results.css'
import SponsoredCompany from '../sponsoredCompany/SponsoredCompany'
export default function Results(props) {
  return (
    <div>
        <div className='container'>
        {/*large and medium screens*/}
        <div className='row justify-content-center'>
            <SponsoredCompany className='inter col-md-4 col-sm-6 my-4' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
            <SponsoredCompany className='inter col-md-4 my-4 col-sm-6' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
            <SponsoredCompany className='inter col-md-4 my-4 col-sm-6' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
            <SponsoredCompany className='inter col-md-4 my-4 col-sm-6' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
            <SponsoredCompany className='inter col-md-4 my-4 col-sm-6' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>

        </div>
        {/*small screens */}

      </div>
    </div>
  )
}
