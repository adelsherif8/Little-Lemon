import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/Homepage';
import BookingPage from './Components/BookingPage/BookingPage';
import ConfirmedBooking from './Components/ConfirmedBooking/ConfirmedBooking';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Helper function to generate times
export const generateTimes = (startHour, endHour) => {
  let times = [];
  for (let i = startHour; i <= endHour; i++) {
    const hour = i % 24;
    const formattedHour = hour < 10 ? `0${hour}:00` : `${hour}:00`;
    times.push(formattedHour);
  }
  return times;
};

// Get available times based on the date
export const getAvailableTimes = (date) => {
  const day = new Date(date).getDay(); // Get the day of the week for the provided date
  if (day >= 0 && day <= 4) { // Weekdays (Monday to Thursday)
    return generateTimes(12, 23); // 12 PM to 12 AM
  } else if (day === 5 || day === 6) { // Friday and Saturday (weekend)
    return [...generateTimes(12, 23), ...generateTimes(0, 2)]; // 12 PM to 2 AM
  }
  return [];
};

// Initialize availableTimes with default values or based on the API
export const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0]; // Use today's date if no date is provided
  return getAvailableTimes(today);  // Fallback to getAvailableTimes
};

// Reducer function to update availableTimes
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;  // Set the state to the updated available times
    default:
      return state;
  }
};

function App() {
  const submitAPI = async (formData) => {
    console.log("Submitting form data:", formData);
    // Simulate an API response (you can replace this with actual API call logic)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true); // Simulate a successful response
      }, 1000); // Simulate a delay (1 second)
    });
  };
  // Function to handle form submission
  const submitForm = async (formData) => {
    const response = await submitAPI(formData); // Assuming submitAPI is globally available
    if (response) {
      window.location.href = '/ConfirmedBooking'; // Use window.location.href for navigation
    } else {
      console.log('Form submission failed');
    }
  };

  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Set today's date by default
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Use useReducer for availableTimes, initializing with the current date
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // Handle date change to update available times for any date, not just today
  const handleDateChange = (newDate) => {
    setDate(newDate);
    const newAvailableTimes = getAvailableTimes(newDate); // Dynamically fetch times for selected date
    dispatch({ type: 'UPDATE_TIMES', payload: newAvailableTimes });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              date={date}
              setDate={handleDateChange}
              time={time}
              setTime={setTime}
              guests={guests}
              setGuests={setGuests}
              occasion={occasion}
              setOccasion={setOccasion}
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm} // Pass submitForm to BookingPage
            />
          }
        />
        <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
