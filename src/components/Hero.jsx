import React from 'react'
import Logo from "../Images/Svgs/Logo.svg";
import AppointmentLogo from "../Images/Svgs/appointmantIcon-01.svg";
import docImg from "../Images/Pngs/doctorImg-01.png";
import arrow from "../Images/Pngs/arrow.png";
export default function Hero({ openModal, openBookingFunc }) {
    return (
        <div className="hero flex">
        <div className="leftHero flex">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="heroDetails">
            <h1>
              To take <span>medical teams</span> to the next level through
              <span> mentorship</span> and <span>education</span>.
            </h1>
            <p>
              We help senior medical staff and their teams to build and scale
              business value by defining strategic roadmaps, leveraging existing
              and modern assets.
            </p>
          </div>
          <div className="heroButtons flex">
            <button className="flex"  onClick={openBookingFunc}>
              <img width="40" src={AppointmentLogo} alt="" /> Book a time
            </button>
            <button onClick={openModal}>
              <span>Ask a question</span>
            </button>
          </div>
          <div className="learn">
          <p>
            Learn about Dr. Jamal AlSaab{" "}
            <img width="15" src={arrow} alt="arrow" />
          </p>
          </div>
        </div>
        <div className="rightHero flex">
          <img src={docImg} alt="" />
        </div>
      </div>
    )
}
