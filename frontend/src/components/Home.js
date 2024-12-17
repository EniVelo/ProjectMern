import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CRUD/Home.css';

const Home = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [clientName, setClientName] = useState("");
  const [datesList, setDatesList] = useState([]);
  const [message, setMessage] = useState("");

  const handleCheckInChange = (event) => setCheckInDate(event.target.value);
  const handleCheckOutChange = (event) => setCheckOutDate(event.target.value);
  const handleClientNameChange = (event) => setClientName(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!clientName) {
      setMessage("Please enter the client's name.");
      return;
    }

    if (new Date(checkOutDate) < new Date(checkInDate)) {
      setMessage("Check-out date cannot be before Check-in date.");
      return;
    }

    if (new Date(checkInDate) < new Date()) {
      setMessage("Check-in date cannot be in the past.");
      return;
    }

    const newReservation = {
      clientName,
      checkIn: checkInDate,
      checkOut: checkOutDate,
    };

    setDatesList([...datesList, newReservation]);
    setCheckInDate("");
    setCheckOutDate("");
    setClientName("");
    setMessage("Reservation added successfully!");
  };

  const handleDeleteReservation = (index) => {
    setDatesList(datesList.filter((_, i) => i !== index));
  };

  // Shtetet per secionet qe do te shfaqen ose fshihen
  const [showHouseRules, setShowHouseRules] = useState(false);
  const [showSafety, setShowSafety] = useState(false);
  const [showCancellation, setShowCancellation] = useState(false);
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Country House Bubullime Albania</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:5000/images/slide1.jpeg"
            alt="First slide"
            
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Enjoy serene views and a peaceful atmosphere.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:5000/images/slide2.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Relax in our beautiful countryside retreat.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:5000/images/slide3.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Perfect for families and couples alike.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="mt-5">
        <form onSubmit={handleSubmit} className="p-4 border rounded">
          <h4 className="mb-3">Book Your Stay</h4>
          {message && <div className="alert alert-info">{message}</div>}
          <div className="mb-3">
            <label htmlFor="clientName" className="form-label">Client Name:</label>
            <input
              type="text"
              id="clientName"
              value={clientName}
              onChange={handleClientNameChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="checkInDate" className="form-label">Check-in Date:</label>
            <input
              type="date"
              id="checkInDate"
              value={checkInDate}
              onChange={handleCheckInChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="checkOutDate" className="form-label">Check-out Date:</label>
            <input
              type="date"
              id="checkOutDate"
              value={checkOutDate}
              onChange={handleCheckOutChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Add Reservation</button>
        </form>
      </div>

      {datesList.length > 0 && (
        <div className="mt-5">
          <h4 className="mb-3">Reservations</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Check-in Date</th>
                <th>Check-out Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {datesList.map((reservation, index) => (
                <tr key={index}>
                  <td>{reservation.clientName}</td>
                  <td>{reservation.checkIn}</td>
                  <td>{reservation.checkOut}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteReservation(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      )}
     <div>
     {/* Things to know section */}
     <div className="things-to-know">
        {/* House Rules Section */}
        <div className="things-section">
          <h3>Things to know</h3>
          <h4>House rules</h4>
          <p>Check-in: 1:00 PM - 12:00 AM</p>
          <p>Checkout before 10:00 AM</p>
          <p>8 guests maximum</p>
          <button
            className="show-more"
            onClick={() => setShowHouseRules(!showHouseRules)}
          >
            {showHouseRules ? "Show less" : "Show more"} &rarr;
          </button>
          {showHouseRules && (
            <div className="extra-details">
              <h4>House rules</h4>
              <p>
                You'll be staying in someone's home, so please treat it with care
                and respect.
              </p>
              <h5>Checking in and out</h5>
              <p>Check-in: 1:00 PM - 12:00 AM</p>
              <p>Checkout before 10:00 AM</p>
              <h5>During your stay</h5>
              <p>8 guests maximum</p>
              <p>No pets</p>
              <p>Quiet hours: 9:00 PM - 7:00 AM</p>
              <p>Commercial photography allowed</p>
            </div>
          )}
        </div>

        {/* Safety & Property Section */}
        <div className="things-section">
          <h4>Safety & property</h4>
          <p>No carbon monoxide alarm</p>
          <p>No smoke alarm</p>
          <p>Exterior security cameras on property</p>
          <button
            className="show-more"
            onClick={() => setShowSafety(!showSafety)}
          >
            {showSafety ? "Show less" : "Show more"} &rarr;
          </button>
          {showSafety && (
            <div className="extra-details">
              <h4>Safety & property</h4>
              <p>
                Avoid surprises by looking over these important details about
                your Host's property.
              </p>
              <h5>Safety devices</h5>
              <p>Exterior security cameras on property</p>
              <p>
                “Security camera overlooking patio and entrance. Security
                cameras can be turned off if the guests feel like it, except the
                camera that is facing the main gate.”
              </p>
              <p>No carbon monoxide alarm</p>
              <p>No smoke alarm</p>
              <h5>Property info</h5>
              <p>
                Potential for noise: “Since the house is in the countryside,
                during the day there may be agricultural work, the noise of
                machines or domestic animals in the surrounding houses.”
              </p>
              <p>
                Amenity limitations: “The state power line is disconnected in
                some cases, but the house has a generator that can be easily put
                into use for emergency uses.”
              </p>
            </div>
          )}
        </div>

        {/* Cancellation Policy Section */}
        <div className="things-section">
          <h4>Cancellation policy</h4>
          <p>Free cancellation before 1:00 PM on Dec 17.</p>
          <p>Cancel before check-in on Dec 18 for a partial refund.</p>
          <button
            className="show-more"
            onClick={() => setShowCancellation(!showCancellation)}
          >
            {showCancellation ? "Show less" : "Show more"} &rarr;
          </button>
          {showCancellation && (
            <div className="extra-details">
              <h4>Cancellation policy</h4>
              <p>
                Make sure you’re comfortable with this Host’s policy. In rare
                cases, you may be eligible for a refund outside of this policy
                under Airbnb’s Major Disruptive Events Policy.
              </p>
              <h5>Full refund</h5>
              <p>Before Dec 17, 1:00 PM - Get back 100% of what you paid.</p>
              <h5>Partial refund</h5>
              <p>
                Before Dec 18, 1:00 PM - Get back every night but the first one.
                No refund of the first night or the service fee.
              </p>
              <p>
                Cleaning fees are refunded if you cancel before check-in.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  
     
   
  

   </div>
  );
};

export default Home;


