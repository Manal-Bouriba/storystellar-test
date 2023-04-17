import React from 'react';
import { useRouter } from 'next/router'
import CategoryPage from '../../../src/categoryPage/CategoryPage'
import { getCategories, getCategory, getCities, getCity, getReviews } from '../../../src/utils/api'

export default function Category({result}) {
  const router = useRouter()
  //const { params } = router.query
  return <CategoryPage props={result}/>
}

export async function getServerSideProps(context) {
        const category = context.params.slug
        const city  = context.params.city
        let cityobj = await getCity(city).catch((error)=> {return error})
        let categoriesList = await getCategories()
        let cities = await getCities()
        let rating = await getReviews()
        let res = await getCategory(category)
        let result = {city: cityobj.city.name, category: res, categories: categoriesList, cities: cities, rating: rating}
        return {props:{result}}
}