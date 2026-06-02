import React from 'react'

const ImageGrid = () => {
  return (
      <section className="media-masonry-layout">
          <div className="large-feature-photo">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80" alt="LCC Aerial view center structure" />
          </div>
          <div className="stacked-photo-slot top-slot">
            <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=500&q=80" alt="Canopy Walkway suspended bridge" />
          </div>
          <div className="stacked-photo-slot bottom-slot">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=80" alt="Scenic river stream among vegetation" />
          </div>
        </section> 
  )
}

export default ImageGrid
