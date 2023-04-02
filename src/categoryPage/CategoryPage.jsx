import Filters from '../filters/Filters'
import Results from '../results/Results'
import Footer from '../footer/Footer'
import { getCategories, getCategory, getCities, getCity, getReviews } from '../utils/api'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import "./categoryPage.css"

export default function CategoryPage() {
  const [order, setOrder] = useState('')
  const loaderData = useLoaderData();
  return (
    <div>
        <Filters category={loaderData.category.category} city={loaderData.city} cities={loaderData.cities} rating={loaderData.rating} categories={loaderData.categories} onOrder={setOrder}/>
        <Results category={loaderData} order={order}/>
        <Footer/>
    </div>
  )
}



export async function categoryLoader({ params }) {
  const category = params.slug
  const city  = params.city
  let cityobj = await getCity(city).catch((error)=> {return error})
  let categoriesList = await getCategories()
  let cities = await getCities()
  let rating = await getReviews()
  let res = getCategory(category).then((data) => {
    let res = {city: cityobj.city.name, category: data, categories: categoriesList, cities: cities, rating: rating}
    return res
  })
  return res
}