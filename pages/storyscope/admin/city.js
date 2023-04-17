import React from 'react';
import { useRouter } from 'next/router'
import DashboardCity from '../../../src/dashboard/DashboardCity'
import { getCategories, getCities } from '../../../src/utils/api'

export default function CityAdmin({result}) {
  const router = useRouter()
  //const { params } = router.query
  return <DashboardCity props={result}/>
}

export async function getServerSideProps(context) {
    let categories = await getCategories()
    let cities = await getCities()
    let result = {type: Object.keys(cities)[0], data: cities.cities, categories: categories.categories}
    return {props:{result}}
}