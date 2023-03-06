import Categories from "../categories/Categories";
import NavBar from "../navBar/NavBar";
import Featured from "../featured/Featured";
import About from "../about/About";
import Footer from '../footer/Footer';
import { getCategories } from '../utils/api';
import { useLoaderData } from 'react-router-dom';



export default function HomePage() {
  const loaderData = useLoaderData();
  return (
    <div>
        <NavBar/>
        <Categories categories={loaderData}/>
        <Featured/>
        <About/>
        <Footer/>
    </div>
  )
}

export function loader() {
  return getCategories()
}
