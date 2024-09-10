import React from 'react';
import BookingForm from './BookingForm';
import './Booking.css';


const BookingPage = ({
  date, setDate,
  time, setTime,
  guests, setGuests,
  occasion, setOccasion,
  availableTimes,
  submitForm
}) => {
  return (
    <section id="BookingPage">
      <section id="BookingForm">
      <h1>Make a Reservation</h1>
      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        submitForm={submitForm} // Pass submitForm
      />
      </section>
    </section>
  );
};

export default BookingPage;
