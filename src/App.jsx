import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Qualifications from './components/Qualifications'
import QuestionForm from './components/QuestionForm'
import Booking from './components/Booking'
import BookingForm from './components/BookingForm'

export default function app() {
  return (
    <>
      <Nav />
      <Hero />
      <Qualifications/>
      <Booking />
      <Footer />
    </>
  )
}
