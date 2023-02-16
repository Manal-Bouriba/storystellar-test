import './categories.css'
import Card from "../card/Card";
import Camera from '../assets/camera.png'
import Device from '../assets/device.png'
import Stats from '../assets/stats.png'
import Motion from '../assets/motion.png'
import Social from '../assets/social.png'
import Vector from '../assets/vectore.png'
import Rp from '../assets/rp.png'
export default function Categories() {
  return (
      <div className='Categories bg-gray'>
        <p className='inter credits text-center'>Annuaire créé par Storystellar</p>
        <div className='container'>
          {/* medium and large screens */}
          <div className='row d-sm-flex d-none justify-content-center'>
            <Card picUrl={Camera} className='col-md-4' text='Agence de production vidéo'/>
            <Card picUrl={Device} className='col-md-4' text='Agence de developpement'/>
            <Card picUrl={Stats}  className='col-md-4' text='Agence SEO'/>
            <Card picUrl={Motion} className='col-md-4'text='Agence motion design'/>
            <Card picUrl={Social} className='col-md-4' text='Agence Social Media'/>
            <Card picUrl={Vector} className='col-md-4' text='Agence de Graphisme'/>
            <Card picUrl={Rp} className='col-md-4'text='Agence RP'/>
            <Card picUrl={Stats} className='col-md-4' text='Agence Branding'/>
            <Card picUrl={Camera} className='col-md-4' text='Agence de Production vidéo'/>
          </div>
          {/* small screens*/}
          <div id="carouselIndicators" className="carousel slide d-sm-none" data-bs-ride="true">
            <div class="carousel-indicators my-2">
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="8" aria-label="Slide 0"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Card picUrl={Camera} className='col-md-4' text='Agence de production vidéo'/>
              </div>
              <div class="carousel-item">
                <Card picUrl={Device} className='col-md-4' text='Agence de developpement'/>
              </div>
              <div class="carousel-item">
                <Card picUrl={Stats}  className='col-md-4' text='Agence SEO'/>
              </div>
              <div className="carousel-item">
                <Card picUrl={Motion}  className='col-md-4' text='Agence motion design'/>
              </div>
              <div className="carousel-item">
                <Card picUrl={Social}  className='col-md-4' text='Agence Social Media'/>
              </div>
              <div className="carousel-item">
                <Card picUrl={Vector}  className='col-md-4' text='Agence de Graphisme'/>
              </div>
              <div className="carousel-item">
                <Card picUrl={Rp}  className='col-md-4' text='Agence RP'/>
              </div>
              <div className="carousel-item">
                <Card picUrl={Stats}  className='col-md-4' text='Agence Branding'/>
              </div>
              <div className="carousel-item">
                <Card picUrl={Camera}  className='col-md-4' text='Agence de Production vidéo'/>
              </div>
            </div>  
          </div>
        </div>
      </div>
  )
}
