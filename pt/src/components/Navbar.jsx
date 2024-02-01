import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav style={{display:"flex", justifyContent:"space-between"}}>
            <div>
                <img src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg" style={{height:"40px"}}/>
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly", width:"30vw", marginTop:"15px"}}>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/contact">Contact</Link></div>
                <div><Link to="/registration">Registration Form</Link></div>
            </div>
        </nav>
    </div>
  )
}
export default Navbar