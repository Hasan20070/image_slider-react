import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react"
import './App.css'

type ImageSliderProps = {
  imageUrls: string[]
}

export default function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0
      else return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length - 1
      else return index - 1
    })
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>

      <div style={{ height:"100%", width: '100%', display: 'flex', overflow: "hidden" }}>   
        {imageUrls.map(url => (
          <img key={url} src={url}
          className="img-slider-img"
          style={{translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

        <button 
        onClick={showPrevImage} 
        className="img-slider-btn" 
        style={{ left: "0" }}
        aria-label="View Previous Image"
        >
           <ArrowBigLeft />
        </button>
        
        <button 
          onClick={showNextImage} 
          className="img-slider-btn" 
          style={{ right: "0" }}
          aria-label="View Next Image"
        >
            <ArrowBigRight /> 
        </button>

        <div style={{ 
          position: "absolute",
          bottom: "0.5rem",
          left: "50%",
          translate: "-50%",
          display: 'flex',
          gap: ".25rem"
        }}>
          {imageUrls.map((_, index) => (
            <button 
              key={index} 
              className="image-slider-dot-btn" 
              aria-label= {`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
            >
                  {index === imageIndex ? <CircleDot /> : <Circle /> }
            </button>
          ))}
        </div>

    </div>
  )
}
