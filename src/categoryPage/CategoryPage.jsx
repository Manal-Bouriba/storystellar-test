import Filters from '../filters/Filters'
import Results from '../results/Results'
import Footer from '../footer/Footer'
import { getCategories, getCategory, getCities, getCity, getReviews } from '../utils/api'
import { useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./categoryPage.css"
import {Helmet} from "react-helmet";
import ReactGA from 'react-ga4'
export default function CategoryPage() {
  const [order, setOrder] = useState('Best')
  const loaderData = useLoaderData();
  let display_name = loaderData.category.category.display_name
  let city = loaderData.city
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname)
  }, []);
  return (
    <div>
        <Helmet>
          <meta
            name="description"
            content={"Meilleure agencs de " + display_name  + " à " + city}
          />
          <title>Storyscope - Meilleurs agences {loaderData.category.category.display_name} à {loaderData.city}</title>
        </Helmet>
        <Filters category={loaderData.category.category} city={loaderData.city} cities={loaderData.cities} categories={loaderData.categories} onOrder={setOrder} order={order}/>
        <Results category={loaderData} order={order} rating={loaderData.rating}/>
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