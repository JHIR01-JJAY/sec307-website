import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cyber-predators">Cyber Predators</Link>
      <Link to="/victim-stories">Victim Stories</Link>
      <Link to="/crime-impact">Crime Impact</Link>
      <Link to="/laws">Laws</Link>
      <Link to="/help">Help for Victims</Link>
    </nav>
  )
}
