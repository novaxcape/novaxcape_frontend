import React from 'react'

const Spec = () => {
  return (
    <>
           <section className="specs-indicator-row">
          <div className="spec-unit-box">
            <span className="checkmark-circle-orange">✓</span>
            <div className="spec-labels-stack">
              <span className="spec-title">Duration</span>
              <span className="spec-detail-value">1 day</span>
            </div>
          </div>
          <div className="spec-unit-box">
            <span className="checkmark-circle-orange">✓</span>
            <div className="spec-labels-stack">
              <span className="spec-title">Activity Level</span>
              <span className="spec-detail-value">Topnotch</span>
            </div>
          </div>
          <div className="spec-unit-box">
            <span className="checkmark-circle-orange">✓</span>
            <div className="spec-labels-stack">
              <span className="spec-title">Includes</span>
              <span className="spec-detail-value">
                Ticket, Transportation, Equipment
              </span>
            </div>
          </div>
        </section>

        {/* NARRATIVE SUMMARY AND VECTOR MAP */}
        <section className="narrative-split-layout">
          <div className="left-narrative-block">
            <h2 className="block-section-heading">Description</h2>
            <p className="narrative-paragraph">
              Lekki Conservation Centre is nestled on the scenic Lekki Peninsula
              in Lagos. The Lekki Conservation Centre is a beautiful 78-hectare
              natural conservation area dedicated to preserving Nigeria's rich
              biodiversity.
            </p>
            <p className="narrative-paragraph">
              The centre is famously home to the longest canopy walkway in
              Africa, stretching an impressive 401 meters above the lush
              mangrove forest. As you walk across this elevated pathway, you'll
              enjoy breathtaking panoramic views of the swampy forest below, a
              truly unforgettable experience that feels like floating through
              the treetops. <span className="read-more-trigger">Read more</span>
            </p>
            <div className="narrative-action-buttons">
              <button className="primary-orange-cta">Book Now</button>
              <button className="hollow-light-cta">Add to favorite</button>
            </div>
          </div>

          <div className="right-map-block">
            <div className="vector-map-wrapper">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800"
                alt="Location Map"
              />
            </div>
          </div>
        </section>
    </>
  )
}

export default Spec
