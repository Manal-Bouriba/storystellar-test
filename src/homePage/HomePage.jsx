import React, { Suspense, lazy } from 'react';
//import Categories from "../categories/Categories";
import NavBar from "../navBar/NavBar";
import Featured from "../featured/Featured";
import About from "../about/About";
import Footer from '../footer/Footer';
import { getCategories, getFeaturedAgencies } from '../utils/api';
import {
  Await,
  defer,
  useLoaderData,
}from 'react-router-dom';
import  "./homePage.css"


const Categories =  lazy(() => import('../categories/Categories'));
export default function HomePage() {
  
  const loaderData = useLoaderData();
  return (
    <div>
        <NavBar/>
         <React.Suspense
          fallback={<p style={{textAlign: "center", marginLeft:"auto", marginRight:"auto", color:"blue"}}>Chargement...</p>}> 
          <Await
            resolve={loaderData.categories}
            errorElement={
              <p>Une erreur est survenue, veuillez recharger la page!</p>
          }>
          {(categories) => (
              <Categories categories={categories}/>
          )}
        </Await>
          </React.Suspense>
        <React.Suspense
          fallback={
          <div style={{textAlign: "center", marginLeft:"auto", marginRight:"auto"}}>
          <p style={{color:"red"}}>Chargement...</p>
          </div>
          }> 

          <Await
            resolve={loaderData.featured}
            errorElement={
              <p className='text-center text-danger'>Une erreur est survenue, veuillez recharger la page!</p>
          }>
          {(featured) => (
            <Featured featured={featured}/>
          )}
        </Await>
        </React.Suspense>
        <About/>
        <Footer/>
    </div>
  )
}

export async function loader() {
  let featured = await getFeaturedAgencies()
  let res = await getCategories()
  let result = {featured: featured, categories: res}
  return defer(result)
}
