import React from 'react';
import { useRouter } from 'next/router'
import DashboardAgency from '../../../src/dashboard/DashboardAgency'
import { getCategories, getAgenciesAll} from '../../../src/utils/api'

export default function CityAdmin({result}) {
  const router = useRouter()
  //const { params } = router.query
  return <DashboardAgency props={result}/>
}

export async function getServerSideProps(context) {
    let agencies = await getAgenciesAll(context.params.agency)
    let categories = await getCategories()
    let result = {
      agencies: agencies,
      categories: categories.categories
      
    }
    return {props:{result}}
}