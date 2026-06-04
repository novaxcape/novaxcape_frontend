import React from 'react';
import './css/FeaturedAttractions.css';
import { FaStar, FaRegStar, FaStarHalfAlt, FaClock } from 'react-icons/fa';

const FeaturedAttractions = () => {
  return (
    <section className="featured-section">
      <div className="section-header">
        <h2 className="section-title">Featured Attractions</h2>
        <p className="section-subtitle">Discover the most popular tourism centres across Nigeria</p>
      </div>

      <div className="attractions-grid">
        
        <div className="attraction-card">
          <div className="card-image-wrapper">
            <img src="/src/assets/lekki.png" alt="Lekki Conservation Centre" className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Lekki Conservation Centre</h3>
            <p className="card-location">Lagos</p>
            <div className="card-meta">
              <div className="rating-container">
                <div className="stars-wrapper">
                  <FaStar className="star-icon filled" />npm ru
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                </div>
                <span className="rating-text">5.0 <span className="reviews-count">(167)</span></span>
              </div>
              <div className="time-container">
                <FaClock className="time-icon" />
                <span className="time-text">8:30 AM - 5:00 PM</span>
              </div>
            </div>
            <div className="card-footer">
              <div className="price-container">
                <span className="price-label">From</span>
                <span className="price-value">2500</span>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        </div>

        
        <div className="attraction-card">
          <div className="card-image-wrapper">
            <img src="/src/assets/olumo.png" alt="Olumo Rock" className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Olumo Rock</h3>
            <p className="card-location">Abeokuta</p>
            <div className="card-meta">
              <div className="rating-container">
                <div className="stars-wrapper">
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaRegStar className="star-icon empty" />
                </div>
                <span className="rating-text">4.0 <span className="reviews-count">(66)</span></span>
              </div>
              <div className="time-container">
                <FaClock className="time-icon" />
                <span className="time-text">9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="card-footer">
              <div className="price-container">
                <span className="price-label">From</span>
                <span className="price-value">2000</span>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        </div>

        
        <div className="attraction-card">
          <div className="card-image-wrapper">
            <img src="/src/assets/omu.png" alt="Mapo Hall" className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Mapo Hall</h3>
            <p className="card-location">Ibadan</p>
            <div className="card-meta">
              <div className="rating-container">
                <div className="stars-wrapper">
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStarHalfAlt className="star-icon filled" />
                </div>
                <span className="rating-text">4.9 <span className="reviews-count">(70)</span></span>
              </div>
              <div className="time-container">
                <FaClock className="time-icon" />
                <span className="time-text">8:30 AM - 5:00 PM</span>
              </div>
            </div>
            <div className="card-footer">
              <div className="price-container">
                <span className="price-label">From</span>
                <span className="price-value">1500</span>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        </div>

        
        <div className="attraction-card">
          <div className="card-image-wrapper">
            <img src="/src/assets/net.png" alt="Green Legacy Resort" className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Green Legacy Resort</h3>
            <p className="card-location">Ogun State</p>
            <div className="card-meta">
              <div className="rating-container">
                <div className="stars-wrapper">
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaRegStar className="star-icon empty" />
                </div>
                <span className="rating-text">4.0 <span className="reviews-count">(434)</span></span>
              </div>
              <div className="time-container">
                <FaClock className="time-icon" />
                <span className="time-text">8:30 AM - 10:00 PM</span>
              </div>
            </div>
            <div className="card-footer">
              <div className="price-container">
                <span className="price-label">From</span>
                <span className="price-value">1500</span>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        </div>

        
        <div className="attraction-card">
          <div className="card-image-wrapper">
            <img src="/src/assets/yankari.png" alt="Yankari National Park" className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Yankari National Park</h3>
            <p className="card-location">Bauchi</p>
            <div className="card-meta">
              <div className="rating-container">
                <div className="stars-wrapper">
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                </div>
                <span className="rating-text">5.0 <span className="reviews-count">(70)</span></span>
              </div>
              <div className="time-container">
                <FaClock className="time-icon" />
                <span className="time-text">8:30 AM - 7:00 PM</span>
              </div>
            </div>
            <div className="card-footer">
              <div className="price-container">
                <span className="price-label">From</span>
                <span className="price-value">2000</span>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        </div>

        
        <div className="attraction-card">
          <div className="card-image-wrapper">
            <img src="/src/assets/obudu.png" alt="Obudu Mountain Resort" className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Obudu Mountain Resort</h3>
            <p className="card-location">Cross River</p>
            <div className="card-meta">
              <div className="rating-container">
                <div className="stars-wrapper">
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                </div>
                <span className="rating-text">5.0 <span className="reviews-count">(90)</span></span>
              </div>
              <div className="time-container">
                <FaClock className="time-icon" />
                <span className="time-text">10:30 AM - 5:00 PM</span>
              </div>
            </div>
            <div className="card-footer">
              <div className="price-container">
                <span className="price-label">From</span>
                <span className="price-value">3000</span>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        </div>

          
        <div className="attraction-card">
          <div className="card-image-wrapper">
            <img src="/src/assets/mil.png" alt="Millennium Park" className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Millennium Park</h3>
            <p className="card-location">Abuja</p>
            <div className="card-meta">
              <div className="rating-container">
                <div className="stars-wrapper">
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                </div>
                <span className="rating-text">5.0 <span className="reviews-count">(643)</span></span>
              </div>
              <div className="time-container">
                <FaClock className="time-icon" />
                <span className="time-text">8:30 AM - 8:30 PM</span>
              </div>
            </div>
            <div className="card-footer">
              <div className="price-container">
                <span className="price-label">From</span>
                <span className="price-value">2500</span>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        </div>

        
        <div className="attraction-card">
          <div className="card-image-wrapper">
            <img src="/src/assets/nike.png" alt="Nike Art Gallery" className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Nike Art Gallery</h3>
            <p className="card-location">Lagos</p>
            <div className="card-meta">
              <div className="rating-container">
                <div className="stars-wrapper">
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaRegStar className="star-icon empty" />
                  <FaRegStar className="star-icon empty" />
                </div>
                <span className="rating-text">3.0 <span className="reviews-count">(307)</span></span>
              </div>
              <div className="time-container">
                <FaClock className="time-icon" />
                <span className="time-text">8:30 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="card-footer">
              <div className="price-container">
                <span className="price-label">From</span>
                <span className="price-value">1500</span>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        </div>

        
        <div className="attraction-card">
          <div className="card-image-wrapper">
            <img src="/src/assets/green.png" alt="Agodi Garden and Zoo" className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Agodi Garden and Zoo</h3>
            <p className="card-location">Ibadan</p>
            <div className="card-meta">
              <div className="rating-container">
                <div className="stars-wrapper">
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                  <FaStar className="star-icon filled" />
                </div>
                <span className="rating-text">5.0 <span className="reviews-count">(167)</span></span>
              </div>
              <div className="time-container">
                <FaClock className="time-icon" />
                <span className="time-text">8:00 AM - 5:00 PM</span>
              </div>
            </div>
            <div className="card-footer">
              <div className="price-container">
                <span className="price-label">From</span>
                <span className="price-value">1500</span>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedAttractions;
