import './featured.css'
import SponsoredCompany from '../sponsoredCompany/SponsoredCompany'

export default function Featured(props) {
  let featured = props.featured.agencies
  return (
    <div className='Featured'>
      <p className='helvetica featuredTitle text-center'><span className='blue'>Agence </span>en vedette</p>
      <div className='container'>
        {/*large and medium screens*/}
        <div className='row d-flex justify-content-center'>
        {featured.map((agency, index) => {
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
                else name = agency.name
                return <SponsoredCompany key={index} className='inter col-md-4 col-sm-6 my-4' reviews={agency.reviews} companyName={ name } websiteUrl={agency.website} logo={agency.logo} rating={agency.rating} location={agency.city.name} numWorkers='60' cost='5000€' projCount='58'/>
              }
            )}
        </div>
        {/*small screens */}
      </div>
    </div>
  )
}
