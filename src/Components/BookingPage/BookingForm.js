import React, { useState, useEffect } from 'react';

const BookingForm = ({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  submitForm,
}) => {
  const [isFormValid, setIsFormValid] = useState(false);


  useEffect(() => {
    if (date && time && guests >= 1) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [date, time, guests]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const formData = { date, time, guests, occasion };
      submitForm(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <section id='dateSec' className='formCont'>
        <label htmlFor="res-date">Date:</label>
        <input
          id="res-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          aria-required="true" 
          aria-label="Select a date"
        />
        </section>

        <section id='timeSec' className='formCont'>
        <label htmlFor="res-time">Time:</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-required="true"
          aria-label="Select a time"
        >
          <option value="" disabled>
            Select time
          </option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        </section>

        <section id='guestsSec' className='formCont'>
        <label htmlFor="guests">Guests:</label>
        <input
          id="guests"
          type="number"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          min="1"
          max="10"
          required
          aria-required="true"
          aria-label="Select number of guests"
        />
        </section>

        <section id='occasionSec' className='formCont'>
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          aria-label="Select occasion"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        </section>

        <section id='submitSec' className='formCont'>
      <button
        type="submit"
        data-testid="submit-button"
        disabled={!isFormValid}
        aria-label="On Click Submit Booking"
      >
        Submit Booking
      </button>
      </section>
    </form>
  );
};

export default BookingForm;
 