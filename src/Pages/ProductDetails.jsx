
import {
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaCheckCircle,
  FaHeart,
} from "react-icons/fa";
import "../Styles/Product.css";
import Header from "../components/Header";
const ProductDetails=() => {
  return (
    <div className="page">
   
<Header />
      <div className="container">
        
        <h1 className="title">Lekki Conservation Centre</h1>

        <div className="meta">
          <span>
            <FaMapMarkerAlt /> Lekki, Lagos State
          </span>

          <span>
            <FaClock /> Daily 8AM - 6PM
          </span>

          <span className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            5.0 (567)
          </span>
        </div>

        
        <div className="tags">
          <span>Nature trails</span>
          <span>Picnic Areas</span>
          <span>Wildlife Viewing</span>
          <span>Canopy Walkway</span>
        </div>


        <div className="gallery">
          <div className="main-image">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt=""
            />
          </div>

          <div className="side-images">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
              alt=""
            />
          </div>
        </div>

   
        <div className="features">
          <div className="feature">
            <FaCheckCircle />
            <div>
              <h4>Duration</h4>
              <p>1 day</p>
            </div>
          </div>

          <div className="feature">
            <FaCheckCircle />
            <div>
              <h4>Activity Level</h4>
              <p>Topnotch</p>
            </div>
          </div>

          <div className="feature">
            <FaCheckCircle />
            <div>
              <h4>Includes</h4>
              <p>Ticket, Transportation, Equipment</p>
            </div>
          </div>
        </div>

    
        <div className="description-section">
          <div className="description">
            <h2>Description</h2>

            <p>
              Lekki Conservation Centre is nestled on the scenic Lekki
              Peninsula in Lagos. It is a beautiful natural conservation area
              dedicated to preserving Nigeria's biodiversity.
            </p>

            <p>
              The centre is home to Africa's longest canopy walkway stretching
              above the lush mangrove forest.
            </p>

            <div className="actions">
              <button className="book-btn">Book Now</button>

              <button className="fav-btn">
                Add a favorite <FaHeart />
              </button>
            </div>
          </div>

          <div className="map">
            <img
              src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png"
              alt=""
            />
          </div>
        </div>

   
        <section className="reviews">
          <h2>View all Reviews</h2>

          <div className="review-grid">
            <div className="review-card">
              <h4>Nnaneme D.</h4>
              <p>
                Absolutely loved the canopy walkway. The view was breathtaking.
              </p>
            </div>

            <div className="review-card">
              <h4>Tunde S.</h4>
              <p>
                Perfect for a family outing. The boardwalks are clean and safe.
              </p>
            </div>

            <div className="review-card">
              <h4>Salewa Ahmed</h4>
              <p>
                Beautiful and peaceful. Saw monkeys and birds throughout the
                visit.
              </p>
            </div>
          </div>
        </section>

    
        <section className="recommendations">
          <h2>Destinations you may also like</h2>

          <div className="destination-grid">
            <div className="destination-card">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt=""
              />

              <div className="card-content">
                <h4>Lekki Conservation Centre</h4>
                <p>Lagos</p>

                <div className="card-footer">
                  <span>From ₦2500</span>
                  <button>Book Now</button>
                </div>
              </div>
            </div>

            <div className="destination-card">
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969"
                alt=""
              />

              <div className="card-content">
                <h4>Olumo Rock</h4>
                <p>Abeokuta</p>

                <div className="card-footer">
                  <span>From ₦2000</span>
                  <button>Book Now</button>
                </div>
              </div>
            </div>

            <div className="destination-card">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2"
                alt=""
              />

              <div className="card-content">
                <h4>Mapo Hall</h4>
                <p>Ibadan</p>

                <div className="card-footer">
                  <span>From ₦1500</span>
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      <footer className="footer">
        <div>
          <h3>NOVAXCAPE</h3>
          <p>
            Your trusted platform for discovering and booking amazing tourism
            experiences.
          </p>
        </div>

        <div>
          <h4>For Tourist</h4>
          <p>Discover Attractions</p>
          <p>My Bookings</p>
          <p>Support</p>
        </div>

        <div>
          <h4>Subscribe</h4>

          <div className="subscribe">
            <input placeholder="example@gmail.com" />
            <button>Submit</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default ProductDetails;