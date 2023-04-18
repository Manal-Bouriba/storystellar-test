
import React from 'react'
import Link  from 'next/link'
export default function Card(props) {
  return (
    <Link className='no-deco-card' href={props.url}>
    <div className='crd mb-4'>
        <img className='ico' src={props.picUrl} alt='icon'/>
        <p className='crd-txt inter'>{props.text}</p>
    </div>
    </Link>
  )
}
