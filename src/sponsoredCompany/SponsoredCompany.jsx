import './sponsoredCompany.css'
import Projects from '../assets/projects.png'
import Workers from '../assets/workers.png'
import Cost from '../assets/cost.png'


import { Rating } from 'react-simple-star-rating'

const readonly = true
const size = 17.25
export default function SponsoredCompany(props) {
  return (
    <div className='card border-0 px-0 mb-4 mt-5'>
        <p className='sponsored text-left mt-3'>SPONSORISÉ</p>
        <div className='text-center'>
        <img className="img-top mx-auto mt-4" src={props.logo} alt="companylogo"/>
        <div className="card-body px-0">
            <h5 className="card-title mb-2">{props.companyName}</h5>
            <p className="card-text my-2">{props.location}</p>
            <Rating className='text-center' allowFraction={true} initialValue={props.rating} readonly={readonly} size={size}/> <span className='reviews'>({props.reviews})</span>
            </div>
        </div>
        <div className="card-footer px-0 bg-white pt-0 wrap">
        <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item bg-gray py-3 pl-2"> <img src={Workers} alt='icon'/> {props.numWorkers} personnes dans leur équipe</li>
                <li className="list-group-item bg-gray py-3"><img src={Cost} alt='icon '/>  A partir de {props.cost} par project</li>
                <li className="list-group-item bg-gray py-3"> <img src={Projects} alt='icon' />  {props.projCount} réalisations</li>
            </ul>
            <a href={props.websiteUrl} target="_blank" rel='nofollow' className="d-block btn btn-primary mx-3" >visiter le site</a>
        
        </div>
    </div>
  )
}
