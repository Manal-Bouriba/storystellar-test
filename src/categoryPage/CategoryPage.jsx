import Filters from '../filters/Filters'
import Results from '../results/Results'
import Footer from '../footer/Footer'
import { useState } from 'react'
import Text from '../text/Text'
export default function CategoryPage(props) {
  const [order, setOrder] = useState('Best')

  return (
    <div>
        <Filters category={props.props.category.category} city={props.props.city} cities={props.props.cities} categories={props.props.categories} onOrder={setOrder} order={order}/>
        <Results category={props.props} order={order} rating={props.props.rating}/>
        <Text category={props.props.category.category.name}/>
        <Footer/>
        
    </div>
  )
}



