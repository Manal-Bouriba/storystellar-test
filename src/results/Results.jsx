import React, { useState, useEffect } from 'react'
import {Helmet} from "react-helmet";
import Company from '../company/Company'
import { addReview, getReviews } from '../utils/api'
import { Rating } from 'react-simple-star-rating'
import StructuredData from 'react-google-structured-data'
// import useLazyLoad from '../utils/useLazyLoad'
import { getAgencies } from "../utils/api";
import slugify from 'slugify';
const UniqueSet = require('@sepiariver/unique-set'); 
let storystellar = {id:1, name:'Storystellar', logo:'https://storystellar.com/wp-content/uploads/2022/01/1572265180649.jpg', rating:5, reviews: 134, website: 'https://www.storystellar.com/?utm_source=GMBlisting&utm_medium=organic', 
                    category: {name:'Agence de production audiovisuelle'}, city:{name:'Paris'}}
                    let array = []
  array.push(storystellar)
export default function Results(props) {
  let order = props.order
  let rating = props.rating
  const [reviews, setReviews] = useState(rating.rating)
  const [count, setCount] = useState(rating.count)
  const [pageNum, setPageNum] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [data, setData] = useState(()=>{
    if (props.category.city === 'Paris') {
      return []
    } 
    else if (props.category.category.category.id === 2 && props.category.city !=='Paris' ) {
      if (order ==='AZ') return []
      else {return array}
    }

  })
  const [loading, setLoading] = useState(false)

  
  let display_name = props.category.category.category.display_name.toLowerCase()
  async function handleRating(rate) {
    await addReview(rate)
    let refresh = await getReviews()
    setReviews(refresh.rating)
    setCount(count + 1)
  }

  async function loadMore(slug, city, pageNum, order) {
    setLoading(true)
    let s = await getAgencies(slug, slugify(city.toLowerCase()), pageNum, order);
    let res = [...array,...s.agencies]
    if (pageNum===1) {
      if (city === 'Paris' || order === 'AZ') {setData(s.agencies)}
      else setData(res)
    }
    else {
    setData([...data, ...s.agencies]) }
    setPageNum(pageNum + 1)
    setTotalPages(s.pages)
    setLoading(false)
  }
  useEffect(()=>{
    loadMore(slug, city, pageNum, order)
  }, [])
  
  useEffect(()=>{
    setData([])
    setPageNum(1)
    loadMore(slug, city, 1, order)
  }, [order])
  let slug = props.category.category.category.slug
  let city = props.category.city
  if (!order) {order = 'Best'}
  {/*const triggerRef = useRef(null)
const {data, loading, hasMore} = useLazyLoad({triggerRef, slug, city, order})*/}
  let total = totalPages*6
  let dataSet = new UniqueSet(data)
  let name = props.category.category.category.name
  let title = 'Les ' + total  + ' Meilleures Agences de ' + props.category.category.category.display_name +  ' à ' + city
  return (
    <div className='results'>
        <Helmet>
          <meta
            name="description"
            content={"Vous avez besoin d'une agence de " + display_name + " ? Vous êtes au bon endroit ! Découverez les " + total + " meilleures agences de " + display_name + " à " +  city}
          />
          <title>{title.replace('audio', 'Audio')}</title>
        </Helmet>
      <StructuredData
        type='Product'
        data={{
            "name": name,
            "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": reviews,
            "reviewCount": count
            }
          }}
      />
        <div className='container text-center'>
        {/*large and medium screens*/}
        <div className='row justify-content-center'>
            {Array.from(dataSet).map((agency, index) => {
                let name = ''
                if (agency.name.includes('-')) {
                  name = agency.name.substring(0, agency.name.indexOf("-"))
                }
                else if (agency.name.includes('_')) {
                  name = agency.name.substring(0, agency.name.indexOf("_"))
                }
                else if (agency.name.includes('|')) {
                  name = agency.name.substring(0, agency.name.indexOf("|"))
                }
                else if (agency.name.includes('.')) {
                  name = agency.name.substring(0, agency.name.indexOf("."))
                }
                else if (agency.name.includes('(')) {
                  name = agency.name.substring(0, agency.name.indexOf("("))
                }
                else if (agency.name.includes('⎮')) {
                  name = agency.name.substring(0, agency.name.indexOf("⎮"))
                }
                else name = agency.name
                return <Company key={index} className='inter col-md-4 col-sm-6 my-4' reviews={agency.reviews} companyName={ name } websiteUrl={agency.website} logo={agency.logo} rating={agency.rating} location={agency.city.name} compType={agency.category.name} numWorkers='60' cost='5000€' projCount='58'/>
              }
            )}
        </div>
        <div className={ "loading text-center "+ (!loading ? 'd-none' : 'd-block') }>Chargement...</div>
        {/*<div ref={triggerRef} className={ "text-center" + (hasMore ? 'd-none' : 'd-block')}></div>*/}
        <a role='button' className={(pageNum > totalPages || loading? 'd-none': 'd-block')} onClick={()=>{if (pageNum<=totalPages) { loadMore(slug, city, pageNum, order)}}}>Afficher plus</a>
        {/*<div className={ "text-center "+ (!hasMore ? 'd-none' : 'd-block') }>Loading...</div>
        <div className={ "text-center "+ (hasMore ? 'd-none' : 'd-block') }>End of results.</div>*/}

      </div>
      <hr/>
      <div className='text-center'><Rating className='pb-2 my-0 mb-1' initialValue={reviews} size={30} onClick={handleRating}/> 
       <span className='count'>({count})</span> 
       </div>
    </div>
  )
}
