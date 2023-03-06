import Filters from '../filters/Filters'
import Results from '../results/Results'
import Footer from '../footer/Footer'
import { getAgencies, getCategory } from '../utils/api'
import { useLoaderData } from 'react-router-dom'


export default function CategoryPage() {
  const loaderData = useLoaderData();
  return (
    <div>
        <Filters category='Production audiovisuelle' city='Paris'/>
        <Results agencies={loaderData}/>
        <Footer/>
      </div>
  )
}

export function loader({ params }) {
  const slug = params.slug
  let res = {category: getCategory(slug),
        agencies: getAgencies(slug)
      }
  return getAgencies(slug)
}