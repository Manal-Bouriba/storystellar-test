import Categories from "../categories/Categories";
import NavBar from "../navBar/NavBar";
import Featured from "../featured/Featured";
import About from "../about/About";
import Footer from '../footer/Footer';
import { getCategories, getFeaturedAgencies } from '../utils/api';
import { useLoaderData } from 'react-router-dom';
import  "./homePage.css"


export default function HomePage() {
  const loaderData = useLoaderData();
  return (
    <div>
        <NavBar/>
        <Categories categories={loaderData.categories}/>
        <Featured featured={loaderData.featured}/>
        <About/>
        <Footer/>
    </div>
  )
}

export async function loader() {
  let featured = await getFeaturedAgencies()
  let res = await getCategories().then((data) => {
    let res = {featured: featured, categories: data}
    return res
  })
  return res
}
