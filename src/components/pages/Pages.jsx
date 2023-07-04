import React from "react"
import { Header } from "../common/Header"
import { BrowserRouter as Routes, Route } from "react-router-dom"
import { Home } from "../home/Home"
import { Footer } from "../common/Footer"
import { Details } from "../home/details/Details"

export const Pages = ({ cartItems }) => {
  return (
    <>
      <Routes>
        <Header />
        
          <Route exact path='/'>
            <Home cartItems={cartItems} />
          </Route>
          <Route exact path='/cart/:id'>
            <Details />
          </Route>
        
        <Footer />
      </Routes>
    </>
  )
}
