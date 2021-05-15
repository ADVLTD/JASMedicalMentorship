import React from "react";
import closeIcon from "../Images/Svgs/closeIcon.svg";
import loading from "../Images/Pngs/loading.png";

export default function BookingForm({ closeBookingFunc }) {
  return (
    <div className="bookingForm">
      <div className="bookingContent">
        <div className="bookingClose" onClick={closeBookingFunc}>
          <img width="12" src={closeIcon} alt="" />
        </div>

        <h2>Book a time</h2>
        <p>
          Almost there... You are being automatically redirected to booking
          service that you can make your booking.
        </p>
        <img width="30" src={loading} alt="" />
        <button>Go to Calendly</button>
      </div>
    </div>
  );
}