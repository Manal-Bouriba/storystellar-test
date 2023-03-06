import './categories.css'
import Card from "../card/Card";
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Categories(props) {
  let categories = props.categories.categories
  return (
      <div className='Categories bg-gray'>
        <p className='inter credits text-center'>Annuaire créé par Storystellar</p>
        <div className='container'>
          {/* medium and large screens */}
          <div className='row d-sm-flex d-none justify-content-center'>
            {categories.map((category, index) => (
              <Card key={index} picUrl={category.image} url={category.slug} className='col-md-4 mb-5' text={category.name}/>
              ))}
          </div>

          {/* small screens*/}
          <CarouselProvider totalSlides={categories.length} infinite={true} isIntrinsicHeight={true} className='d-sm-none card-carousel mx-auto'>
          <Slider>
            {categories.map((category, index) => (
              <Slide key={index} index={index}>
                <Card picUrl={category.image} className='col-md-4 mb-5' text={category.name}/>
              </Slide>
              ))}

          </Slider>
          <DotGroup className='text-center circle'/>
          </CarouselProvider>
        </div>
      </div>
  )
}
