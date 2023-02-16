import './featured.css'
import Company from '../company/Company'

export default function Featured() {
  return (
    <div className='Featured'>
      <p className='helvetica featuredTitle text-center'><span className='blue'>Agence </span>en vedette</p>
      <div className='container'>
        {/*large and medium screens*/}
        <div className='row d-none d-sm-flex'>
            <Company className='inter col-4 my-4' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
            <Company className='inter col-4 my-4' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
            <Company className='inter col-4 my-4' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
        </div>
        {/*small screens */}
        <div id="carouselIndicators2" className="carousel slide d-sm-none" data-bs-ride="true">
            <div class="carousel-indicators mt-3">
              <button type="button" data-bs-target="#carouselIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Company className='inter col-4 my-4' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
              </div>
              <div class="carousel-item">
                <Company className='inter col-4 my-4' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
              </div>
              <div class="carousel-item">
                <Company className='inter col-4 my-4' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
