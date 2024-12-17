import React, { useState } from 'react';
import './About.css'; 

const About = () => {
  const [showMore, setShowMore] = useState(false); // State per te menaxhuar shfaqjen e me shume te dhenave

  const toggleShowMore = () => {
    setShowMore(!showMore); // Ndryshon gjendjen e shfaqjes se me shume te dhenave
  };

  return (
    <div className="page-container">
      <section className="about-section">
        <h1 className="main-heading">About this space</h1>
        <p className="description">
        Spacious country house with a green garden all year round, in a quiet area, with a Mediterranean climate (2800 hours of sunshine/year), and with hardworking people and not far from the city of Lushnja and Fier, the airport "Mother Teresa". and the capital Tirana, the Byzantine Monastery of Ardenica (1282), the Archaeological Park of Apollonia, the National Park of Llogara, the lagoon of Karavasta and Narta, the numerous sandy and shingle beaches, the ancient city of Durrës and Berat, ...
<hr/><b>The space</b>  <br/>
The house is built on a property of 800 m2 with a construction area of ​​200 m2. There are two bedrooms, a living room, a kitchen, a bathroom, a veranda, an attic. In the outdoor environment filled with grass and flowers, there is a wood-fired oven, a barbecue, a motorized skewer for roasting meat at the size of a lamb or kid. You can also find swings, hammocks, sunbeds, beach umbrellas, a basketball backboard with a rim and a net, mini fields for playing football and volleyball, open and covered parking.
<hr/><b>Guest access</b>   <br/>
Guests can use all the space of the house.
<hr/><b>Other things to note</b>   <br/>
The house is located in a very green, peaceful and working village environment, in the heart of the largest field in Albania, Myzeqe. Bio products, over 2800 hours of sunshine per year, with temperatures of the Mediterranean lowland climate, the proximity to the beaches of the Adriatic and Ionian seas make this area one of the most suitable for living in the world.
        </p>
      </section>
{/* Hapesira midis karuselit dhe tabeles */}
<div className="space-between"></div>
      <section className="amenities-section">
        <h2 className="section-heading">What this place offers</h2>

        {/* Informacione qe shfaqen gjithmone */}
        <div className="amenities-grid">
          <div className="amenity">
            <span className="icon">🌳</span> Garden view
          </div>
          <div className="amenity">
            <span className="icon">🌸</span> Courtyard view
          </div>
          <div className="amenity">
            <span className="icon">🛁</span> Bathroom
          </div>
          <div className="amenity">
            <span className="icon">💨</span> Hair dryer
          </div>
          <div className="amenity">
            <span className="icon">🧴</span> Cleaning products
          </div>

          {/* Kur butoni eshte shtypur, shfaqen keto te dhena */}
          {showMore && (
            <>
              <div className="amenity">
                <span className="icon">🧴</span> Pantene shampoo
              </div>
              <div className="amenity">
                <span className="icon">🧴</span> Haier conditioner
              </div>
              <div className="amenity">
                <span className="icon">🧼</span> Dove body soap
              </div>
              <div className="amenity">
                <span className="icon">🚿</span> Bidet
              </div>
              <div className="amenity">
                <span className="icon">🚿</span> Outdoor shower
              </div>
              <div className="amenity">
                <span className="icon">🔥</span> Hot water
              </div>
              <div className="amenity">
                <span className="icon">🧴</span> Shower gel
              </div>
              <div className="amenity">
                <span className="icon">🧺</span> Free washer – In building
              </div>
              <div className="amenity">
                <span className="icon">🛏️</span> Extra pillows and blankets
              </div>
              <div className="amenity">
                <span className="icon">🛋️</span> Iron
              </div>
              <div className="amenity">
                <span className="icon">📚</span> Books and reading material
              </div>
              <div className="amenity">
                <span className="icon">🎮</span> Board games
              </div>
              <div className="amenity">
                <span className="icon">📶</span> Ethernet connection
              </div>
              <div className="amenity">
                <span className="icon">📺</span> 65 inch HDTV
              </div>
              <div className="amenity">
                <span className="icon">🏋️‍♂️</span> Exercise equipment: workout bench
              </div>
              <div className="amenity">
                <span className="icon">🧸</span> Children’s books and toys
              </div>
              <div className="amenity">
                <span className="icon">🛋️</span> Central air conditioning
              </div>
              <div className="amenity">
                <span className="icon">🔥</span> Indoor fireplace
              </div>
              <div className="amenity">
                <span className="icon">🛡️</span> Security camera overlooking patio
              </div>
              <div className="amenity">
                <span className="icon">🧑‍⚖️</span> First aid kit
              </div>
              <div className="amenity">
                <span className="icon">📶</span> Fast wifi – 57 Mbps
              </div>
              <div className="amenity">
                <span className="icon">🖥️</span> Dedicated workspace
              </div>
              <div className="amenity">
                <span className="icon">🍽️</span> Kitchen
              </div>
              <div className="amenity">
                <span className="icon">🍞</span> Dining table
              </div>
              <div className="amenity">
                <span className="icon">🛋️</span> Private patio or balcony
              </div>
              <div className="amenity">
                <span className="icon">🔥</span> Fire pit
              </div>
              <div className="amenity">
                <span className="icon">🍴</span> Outdoor dining area
              </div>
              <div className="amenity">
                <span className="icon">🏖️</span> Beach towels, umbrella, beach blanket
              </div>
              <div className="amenity">
                <span className="icon">🚗</span> Free parking garage – 2 spaces
              </div>
            </>
          )}
        </div>

        {/* Butoni per te shfaqur me shume ose me pak */}
        <button className="show-more-btn" onClick={toggleShowMore}>
          {showMore ? 'Show less' : 'Show all amenities'}
        </button>
      </section>
    </div>
  );
};

export default About;


