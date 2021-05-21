import React from "react";
import AppointmentLogo from "../Images/Svgs/appointmantIcon-01.svg";

export default function booking({ openBookingFunc }) {
  return (
    <div className="booking flex">
      <div className="bookingLeftSide">
        <h1>
          We believe that <span>every doctor</span> every where should be at the
          top of their game.
        </h1>
        <h1>
          <span>Book a time </span> right now.
        </h1>
      </div>
      <div className="bookingRightSide">
        <div className="heroButtons flex">
          <button className="flex" onClick={openBookingFunc}>
            <img width="40" src={AppointmentLogo} alt="" /> Book a time
          </button>
          <small>20 available slots</small>
        </div>
      </div>
    </div>
  );
}
