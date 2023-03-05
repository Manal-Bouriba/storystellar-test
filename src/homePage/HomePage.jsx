import React, { Component } from 'react'
import Categories from "../categories/Categories";
import NavBar from "../navBar/NavBar";
import Featured from "../featured/Featured";
import About from "../about/About";
import Footer from '../footer/Footer';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Categories/>
        <Featured/>
        <About/>
        <Footer/>
      </div>
    )
  }
}
