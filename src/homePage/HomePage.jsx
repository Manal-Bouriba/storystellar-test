import React from 'react';
import NavBar from "../navBar/NavBar";
import Featured from "../featured/Featured";
import About from "../about/About";
import Footer from '../footer/Footer';
import {Helmet} from "react-helmet";
import Categories from  '../categories/Categories'




export default function HomePage(props) {

  return (
    <div>
            <Helmet>
                <meta
                  name="description"
                  content="Trouvez l'agence de marketing et communication qu'il vous faut en France grâce à notre annuaire complet. Découvrez les meilleurs experts du secteur."
                />
                <title>Annuaire des agences marketing et communication en France</title>
            </Helmet>
        <NavBar/>
        <Categories categories={props.props?.categories}/>
        <Featured featured={props.props?.featured}/>
        <About/>
        <Footer/>
    </div>
  )
}

