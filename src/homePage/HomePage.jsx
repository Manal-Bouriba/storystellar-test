import React, {lazy } from 'react';
import NavBar from "../navBar/NavBar";
import Featured from "../featured/Featured";
import About from "../about/About";
import Footer from '../footer/Footer';
import {Helmet} from "react-helmet";
import { getCategories, getFeaturedAgencies } from '../utils/api';
import {
  Await,
  defer,
  useLoaderData,
} from 'react-router-dom';
import  "./homePage.css"


const Categories =  lazy(() => import('../categories/Categories'));

export default function HomePage() {
  const loaderData = useLoaderData();
  return (
    <div>
            <Helmet>
                <meta
                  name="description"
                  content="Trouvez la meilleur agence communication/marketing selon vos besoins"
                />
                <title>Storyscope - Accueil</title>
            </Helmet>
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


          <Await
            resolve={loaderData.featured}
            errorElement={
              <p className='text-center text-danger'>Une erreur est survenue, veuillez recharger la page!</p>
          }>
          {(featured) => (
            <Featured featured={featured}/>
          )}
        </Await>
        <About/>
        <Footer/>
        </React.Suspense>

    </div>
  )
}

export async function loader() {
  let featured = await getFeaturedAgencies()
  let res = await getCategories()
  let result = {featured: featured, categories: res}
  return defer(result)
}
