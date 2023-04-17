import React from "react";
import Card from "../card/Card";
export default function Categories(props) {
  let categories = props.categories.categories
  return (
      <div className='Categories bg-gray'>
        <p className='inter credits text-center'>Annuaire créé par <a className='no-deco'href='https://www.storystellar.com'>Storystellar</a></p>
        <div className='container'>
          <div className='row d-flex justify-content-center'>
            {categories?.map((category, index) => (
              <Card key={index} picUrl={category.image} url={category.slug + '/paris'} className='col-md-4 mb-5' text={category.name}/>
            ))}
          </div>
        </div>
      </div>
  )
}
