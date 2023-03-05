import './featured.css'
import Company from '../company/Company'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Featured() {
  return (
    <div className='Featured'>
      <p className='helvetica featuredTitle text-center'><span className='blue'>Agence </span>en vedette</p>
      <div className='container'>
        {/*large and medium screens*/}
        <div className='row d-none d-sm-flex justify-content-center'>
            <Company className='inter col-4 my-4' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
            <Company className='inter col-4 my-4' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
            <Company className='inter col-4 my-4' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
        </div>
        {/*small screens */}
        <CarouselProvider totalSlides={3} infinite={true} isIntrinsicHeight={true} className='d-sm-none company-carousel mx-auto'>
          <Slider>
            <Slide index={0}>
            <Company className='inter col-4 my-4' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
            </Slide>
            <Slide index={1}>
              <Company className='inter col-4 my-4' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
            </Slide>
            <Slide index={2}>
              <Company className='inter col-4 my-4' companyName='ZeeGroup' location='Paris' compType='Agence Branding' numWorkers='60' cost='5000€' projCount='58'/>
            </Slide>
          </Slider>
          <DotGroup className='text-center circle'/>
        </CarouselProvider>
      </div>
    </div>
  )
}
