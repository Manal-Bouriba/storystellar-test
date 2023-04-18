import React from 'react';
import { useRouter } from 'next/router'
import DashboardCategory from '../../src/dashboard/DashboardCategory'

export default function CategoryAdmin({result}) {
  const router = useRouter()
  //const { params } = router.query
  return <DashboardCategory props={result}/>
}

export async function getServerSideProps(context) {
    const cat = await fetch('https://storyscope.storystellar.com/api/category', {
      method: "GET" 
    });
  if (!cat.ok) {
      throw new Error({ message: 'Failed to fetch posts.', status:500});
  }
  const categories = await cat.json()
  const feat = await fetch('https://storyscope.storystellar.com/api/agency/featured',{
    method: "GET"
  });
  if (!feat.ok) {
    throw new Error({ message: 'Failed to fetch posts.', status:404});
  }
  const result = {categories: categories}
  return {props:{result}}
  }