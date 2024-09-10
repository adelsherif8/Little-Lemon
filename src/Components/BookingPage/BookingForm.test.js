import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('should render the form with all input fields', () => {
  render(
    <BookingForm
      date="2023-09-01"
      setDate={jest.fn()}
      time="17:00"
      setTime={jest.fn()}
      guests={1}
      setGuests={jest.fn()}
      occasion="Birthday"
      setOccasion={jest.fn()}
      availableTimes={["17:00", "18:00", "19:00"]}
      submitForm={jest.fn()}
    />
  );

  // Check if all inputs exist
  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
});

test('submit button should be disabled if form is invalid', () => {
  render(
    <BookingForm
      date=""
      setDate={jest.fn()}
      time=""
      setTime={jest.fn()}
      guests={0}
      setGuests={jest.fn()}
      occasion="Birthday"
      setOccasion={jest.fn()}
      availableTimes={[]}
      submitForm={jest.fn()}
    />
  );

  const submitButton = screen.getByTestId('submit-button');
  expect(submitButton).toBeDisabled(); // Check if the button is disabled
});

test('submit button should be enabled if form is valid', () => {
  render(
    <BookingForm
      date="2023-09-01"
      setDate={jest.fn()}
      time="17:00"
      setTime={jest.fn()}
      guests={2}
      setGuests={jest.fn()}
      occasion="Birthday"
      setOccasion={jest.fn()}
      availableTimes={['17:00']}
      submitForm={jest.fn()}
    />
  );

  const submitButton = screen.getByTestId('submit-button');
  expect(submitButton).toBeEnabled(); // Check if the button is enabled
});

test('should call submitForm with correct data on valid form submission', () => {
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      date="2023-09-01"
      setDate={jest.fn()}
      time="17:00"
      setTime={jest.fn()}
      guests={2}
      setGuests={jest.fn()}
      occasion="Birthday"
      setOccasion={jest.fn()}
      availableTimes={['17:00']}
      submitForm={mockSubmitForm}
    />
  );

  const submitButton = screen.getByTestId('submit-button');
  fireEvent.click(submitButton);

  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: '2023-09-01',
    time: '17:00',
    guests: 2,
    occasion: 'Birthday',
  });
});
