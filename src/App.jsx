import React, {useState} from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Qualifications from './components/Qualifications'
import QuestionForm from './components/QuestionForm'
import Booking from './components/Booking'
import BookingForm from './components/BookingForm'

export default function App() {
  const [openItem, setOpenItem] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);
  const [closeCookies, setCloseCookies] = useState(true);

  const open = () => setOpenItem(true);
  const close = () => setOpenItem(false);

  const openBookingFunc = () => setOpenBooking(true);
  const closeBookingFunc = () => setOpenBooking(false);

  const acceptCookies = () => setCloseCookies(false);

  return (
    <>
      {closeCookies ? <Nav acceptCookies={acceptCookies} /> : null}
      <Hero openModal={open} openBookingFunc={openBookingFunc} />
      <Qualifications />
      <Booking openBookingFunc={openBookingFunc} />
      <Footer />
      {openItem ? <QuestionForm closeFunc={close} /> : null}
      {openBooking ? <BookingForm closeBookingFunc={closeBookingFunc} /> : null}
    </>
  );
}