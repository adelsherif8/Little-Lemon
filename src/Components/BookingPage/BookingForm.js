// src/Components/BookingForm/BookingForm.js
import React from 'react';

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
  submitForm, // Destructure the submitForm function passed via props
}) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    // Call submitForm with the form data
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      <label>
        Time:
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </label>

      <label>
        Guests:
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          min="1"
          max="10"
        />
      </label>

      <label>
        Occasion:
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </label>

      <button type="submit">Submit Booking</button>
    </form>
  );
};

export default BookingForm;
