import images from './imgs/index'
import ImagesSlider from './ImagesSlider'

  const IMAGES = [images.car1, images.car2, images.car3, images.car4, images.car5]

function App() {
  return (
    <div style={{maxWidth: "1200px", width: '100%',  aspectRatio: '10 / 6', margin: "9 auto"}}>

      <ImagesSlider imageUrls={IMAGES}/>

    </div>
  )
}

export default App
