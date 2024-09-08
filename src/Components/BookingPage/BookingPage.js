import React from 'react';
import BookingForm from './BookingForm';

// BookingPage Component
const BookingPage = ({
  date, setDate,
  time, setTime,
  guests, setGuests,
  occasion, setOccasion,
  availableTimes,
  submitForm // No need for unused availableDate and getAvailableTimes
}) => {
  return (
    <>
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
    </>
  );
};

export default BookingPage;
