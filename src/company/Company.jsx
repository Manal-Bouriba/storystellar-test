import { Rating } from 'react-simple-star-rating'
import InitialsAvatar from 'react-initials-avatar';
const readonly = true
const size = 17.25
export default function Company(props) {
  return (
    <div className='card text-center border-0 px-0 my-4'>
        {props.logo? <img className="img-top mx-auto mt-4" src={props.logo} alt="companylogo"/> : <InitialsAvatar className='initials-avatar mx-auto mt-4' name={props.companyName}/>}
        <div className="card-body px-0">
            <h5 className="card-title mb-2">{props.companyName}</h5>
            <p className="card-text my-2">{props.location}</p>
            <Rating className='text-center pt-0 mt-0 mb-1' allowFraction={true} initialValue={props.rating} readonly={readonly} size={size}/> <span className='reviews'>({props.reviews})</span>
            
        </div>
        <div className='card-footer bg-white px-0'>
           {/*<ul className="list-group list-group-flush mb-3">
                <li className="list-group-item bg-gray py-3 pl-2"> <img src={Workers} alt='icon'/> {props.numWorkers} personnes dans leur équipe</li>
                <li className="list-group-item bg-gray py-3"><img src={Cost} alt='icon '/>  A partir de {props.cost} par project</li>
                <li className="list-group-item bg-gray py-3"> <img src={Projects} alt='icon' />  {props.projCount} réalisations</li>
            </ul> */} 
            <a href= {props.websiteUrl} className="d-block btn btn-primary mx-5 mb-2" rel='noreferrer nofollow' target="_blank">Visiter le site</a>
            </div>
    </div>
  )
}
