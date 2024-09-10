import { render, screen, fireEvent } from "@testing-library/react"; 
import BookingPage from "./BookingPage";
import BookingForm from "./BookingForm";
const mockSubmitForm = jest.fn();

beforeEach(() => {
  render(
    <BookingPage
      date=""
      setDate={() => {}}
      time="17:00"
      setTime={() => {}}
      guests={1}
      setGuests={() => {}}
      occasion="Birthday"
      setOccasion={() => {}}
      availableTimes={["17:00", "18:00", "19:00"]}
      availableDate={["Birthday", "Anniversary"]}
      dispatch={() => {}}
    />
  );
});

test('Checks if the header "Make a Reservation" exists', () => {
  const header = screen.getByText(/Make a Reservation/i);
  expect(header).toBeInTheDocument();
});

test('Checks if the "Number of guests" label exists', () => {
  const guestsLabel = screen.getByLabelText(/Guests/i);
  expect(guestsLabel).toBeInTheDocument();
});

test("should render the Date input with required attribute", () => {
  const dateInput = screen.getByLabelText(/Date/i);
  expect(dateInput).toBeRequired();
});

test("should render the Time input with required attribute", () => {
  const timeInput = screen.getByLabelText(/Time/i);
  expect(timeInput).toBeRequired();
});

test("should render the Guests input with required attribute", () => {
  const guestsInput = screen.getByLabelText(/Guests/i);
  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute("min", "1");
});

test("should render the Occasion input", () => {
  const occasionInput = screen.getByLabelText(/Occasion/i);
  expect(occasionInput).toBeInTheDocument(); // Check if the occasion input exists
});