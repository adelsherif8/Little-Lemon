import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";  // Adjust path if necessary

test("BookingForm handles user submissions", () => {
  // Step 1: Mock functions
  const mockSetDate = jest.fn();
  const mockSetTime = jest.fn();
  const mockSetGuests = jest.fn();
  const mockSetOccasion = jest.fn();
  const mockDispatch = jest.fn();

  // Step 2: Render the component with mock functions
  render(
    <BookingForm
      date="2024-09-05"
      setDate={mockSetDate}
      time="17:00"
      setTime={mockSetTime}
      guests={1}
      setGuests={mockSetGuests}
      occasion="Birthday"
      setOccasion={mockSetOccasion}
      availableTimes={["17:00", "18:00", "19:00"]}
      availableDate={["Birthday", "Anniversary"]}
      dispatch={mockDispatch}
    />
  );

  // Step 3: Simulate user input using fireEvent
  fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2024-09-06" } });
  fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "18:00" } });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: 2 } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Anniversary" } });

  // Step 4: Simulate form submission using fireEvent
  fireEvent.submit(screen.getByRole("button", { name: /Make Your reservation/i }));

  // Step 5: Assert that the mock functions were called with the right values
  expect(mockSetDate).toHaveBeenCalledWith("2024-09-06");
  expect(mockSetTime).toHaveBeenCalledWith("18:00");
  expect(mockSetGuests).toHaveBeenCalledWith(2);
  expect(mockSetOccasion).toHaveBeenCalledWith("Anniversary");
});
