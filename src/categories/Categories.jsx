import './categories.css'
import Card from "../card/Card";
import Camera from '../assets/camera.png'
import Device from '../assets/device.png'
import Stats from '../assets/stats.png'
import Motion from '../assets/motion.png'
import Social from '../assets/social.png'
import Vector from '../assets/vectore.png'
import Rp from '../assets/rp.png'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Categories() {
  return (
      <div className='Categories bg-gray'>
        <p className='inter credits text-center'>Annuaire créé par Storystellar</p>
        <div className='container'>
          {/* medium and large screens */}
          <div className='row d-sm-flex d-none justify-content-center'>
            <Card picUrl={Camera} className='col-md-4 mb-5' text='Agence de production vidéo'/>
            <Card picUrl={Device} className='col-md-4 mb-5' text='Agence de developpement'/>
            <Card picUrl={Stats}  className='col-md-4 mb-5' text='Agence SEO'/>
            <Card picUrl={Motion} className='col-md-4 mb-5'text='Agence motion design'/>
            <Card picUrl={Social} className='col-md-4 mb-5' text='Agence Social Media'/>
            <Card picUrl={Vector} className='col-md-4 mb-5' text='Agence de Graphisme'/>
            <Card picUrl={Rp} className='col-md-4 mb-5'text='Agence RP'/>
            <Card picUrl={Stats} className='col-md-4 mb-5' text='Agence Branding'/>
            <Card picUrl={Camera} className='col-md-4 mb-5' text='Agence de Production vidéo'/>
          </div>
          {/* small screens*/}
          <CarouselProvider totalSlides={3} infinite={true} isIntrinsicHeight={true} className='d-sm-none card-carousel mx-auto'>
          <Slider>
            <Slide index={0}>
              <Card picUrl={Camera} className='col-md-4 col-sm-3' text='Agence de production vidéo'/>
            </Slide>
            <Slide index={1}>
              <Card picUrl={Camera} className='col-md-4 col-sm-3' text='Agence de production vidéo'/>
            </Slide>
            <Slide index={2}>
              <Card picUrl={Camera} className='col-md-4 col-sm-3' text='Agence de production vidéo'/>
            </Slide>
          </Slider>
          <DotGroup className='text-center circle'/>
          </CarouselProvider>
        </div>
      </div>
  )
}
