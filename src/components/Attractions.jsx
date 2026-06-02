import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { LuTrendingUp } from 'react-icons/lu';
import { FiTrendingUp } from 'react-icons/fi';
import './css/Attractions.css';

const Attractions = () => {
  return (
    <div className="attractionsSection">
      <div className="attractionsHeader">
        <div className="sectionMainTitle">
          <LuTrendingUp className="titleTrendIcon" />
          Top Attractions
        </div>
        <div className="sectionSubDescription">
          Most visited and highly rated tourism centres this month
        </div>
      </div>

      <div className="attractionsGrid">
        <div className="attractionCard">
          <div className="cardImageWrapper">
            <div className="trendingBadgeTag">
              <FiTrendingUp className="badgeTrendIcon" />
              Trending
            </div>
            <img src="/src/assets/lekki.png" alt="Lekki Conservation Centre" className="cardDisplayImage" />
          </div>
          <div className="cardDetailsContent">
            <div className="attractionItemTitle">Lekki Conservation Centre</div>
            <div className="attractionItemLocation">Lagos</div>
            <div className="ratingFlexGroup">
              <div className="starsRow">
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
              </div>
              <div className="ratingNumericalValue">5.0</div>
              <div className="reviewsCountTotal">(567)</div>
            </div>
          </div>
        </div>

        <div className="attractionCard">
          <div className="cardImageWrapper">
            <div className="trendingBadgeTag">
              <FiTrendingUp className="badgeTrendIcon" />
              Trending
            </div>
            <img src="/src/assets/yankari.png" alt="Yankari National Park" className="cardDisplayImage" />
          </div>
          <div className="cardDetailsContent">
            <div className="attractionItemTitle">Yankari National Park</div>
            <div className="attractionItemLocation">Bauchi</div>
            <div className="ratingFlexGroup">
              <div className="starsRow">
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
              </div>
              <div className="ratingNumericalValue">4.0</div>
              <div className="reviewsCountTotal">(213)</div>
            </div>
          </div>
        </div>

        <div className="attractionCard">
          <div className="cardImageWrapper">
            <img src="/src/assets/olumo.png" alt="Olumo Rock" className="cardDisplayImage" />
          </div>
          <div className="cardDetailsContent">
            <div className="attractionItemTitle">Olumo Rock</div>
            <div className="attractionItemLocation">Abeokuta</div>
            <div className="ratingFlexGroup">
              <div className="starsRow">
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
              </div>
              <div className="ratingNumericalValue">5.0</div>
              <div className="reviewsCountTotal">(400)</div>
            </div>
          </div>
        </div>

        <div className="attractionCard">
          <div className="cardImageWrapper">
            <div className="trendingBadgeTag">
              <FiTrendingUp className="badgeTrendIcon" />
              Trending
            </div>
            <img src="/src/assets/obudu.png" alt="Obudu Mountain Resort" className="cardDisplayImage" />
          </div>
          <div className="cardDetailsContent">
            <div className="attractionItemTitle">Obudu Mountain Resort</div>
            <div className="attractionItemLocation">Cross River</div>
            <div className="ratingFlexGroup">
              <div className="starsRow">
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
              </div>
              <div className="ratingNumericalValue">4.5</div>
              <div className="reviewsCountTotal">(200)</div>
            </div>
          </div>
        </div>

        <div className="attractionCard">
          <div className="cardImageWrapper">
            <img src="/src/assets/green.png" alt="Green Legacy Resort" className="cardDisplayImage" />
          </div>
          <div className="cardDetailsContent">
            <div className="attractionItemTitle">Green Legacy Resort</div>
            <div className="attractionItemLocation">Abeokuta</div>
            <div className="ratingFlexGroup">
              <div className="starsRow">
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
              </div>
              <div className="ratingNumericalValue">4.0</div>
              <div className="reviewsCountTotal">(122)</div>
            </div>
          </div>
        </div>

        <div className="attractionCard">
          <div className="cardImageWrapper">
            <div className="trendingBadgeTag">
              <FiTrendingUp className="badgeTrendIcon" />
              Trending
            </div>
            <img src="/src/assets/omu.png" alt="Omu resort" className="cardDisplayImage" />
          </div>
          <div className="cardDetailsContent">
            <div className="attractionItemTitle">Omu resort</div>
            <div className="attractionItemLocation">Lagos</div>
            <div className="ratingFlexGroup">
              <div className="starsRow">
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
                <AiFillStar className="starIcon" />
              </div>
              <div className="ratingNumericalValue">5.0</div>
              <div className="reviewsCountTotal">(567)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attractions;
