import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";

test('Checks if the header "Make a Reservation" exists', () => {
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

    // Check for the presence of the "Make a Reservation" heading
    const header = screen.getByText(/Make a Reservation/i);
    expect(header).toBeInTheDocument();
});

test('Checks if the "Number of guests" label exists', () => {
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

    // Check for the presence of the "Number of guests" label
    const guestsLabel = screen.getByLabelText(/Guests/i); // Assuming the label for guests input is "Guests"
    expect(guestsLabel).toBeInTheDocument();
});
