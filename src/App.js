import React from "react"
import Navbar from "./components/Navbar"
import MainComponent from "./components/MainContent"
import "./style.css"

export default function App() {
  return (
    <div className="container">
      <Navbar />,
      <MainComponent />
    </div>
  )
}
