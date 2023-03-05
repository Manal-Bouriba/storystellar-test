import React, { Component } from 'react'
import Filters from '../filters/Filters'
import Results from '../results/Results'
import Footer from '../footer/Footer'

export default class CategoryPage extends Component {
  render() {
    return (
      <div>
        <Filters category='Production audiovisuelle' city='Paris'/>
        <Results/>
        <Footer/>
      </div>
    )
  }
}
