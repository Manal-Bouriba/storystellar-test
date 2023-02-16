import './company.css'
import Logo from '../assets/logo.png'
import Projects from '../assets/projects.png'
import Workers from '../assets/workers.png'
import Cost from '../assets/cost.png'


import { Rating } from 'react-simple-star-rating'
const rating = 4
const readonly = true
const size = 17.25
export default function Company(props) {
  return (
    <div className='card text-center border-0 px-0 my-4'>
        <div class="card-header bg-gray border-0">
            <span className='title'>{props.compType}</span>
        </div>
        <img className="img-top mx-auto mt-4" src={Logo} alt="companylogo"/>
        <div className="card-body px-0">
            <h5 className="card-title mb-2">{props.companyName}</h5>
            <p className="card-text my-2">{props.location}</p>
            <Rating className='text-center mb-3' initialValue={rating} readonly={readonly} size={size}/>
            <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item bg-gray py-3 pl-2"> <img src={Workers} alt='icon'/> {props.numWorkers} personnes dans leur équipe</li>
                <li className="list-group-item bg-gray py-3"><img src={Cost} alt='icon '/>  A partir de {props.cost} par project</li>
                <li className="list-group-item bg-gray py-3"> <img src={Projects} alt='icon' />  {props.projCount} réalisations</li>
            </ul>
            <a href={props.websiteUrl} className="d-block btn btn-primary mx-3">visiter le site</a>
        </div>
    </div>
  )
}
