import React from 'react';
import HomePage from '../src/homePage/HomePage'
export default function Home({result}) {

  return <HomePage props={result}/>
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
const featured = await feat.json()
const result = {categories: categories, featured:featured}
return {props:{result}}
}