import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
        <h3>Layout</h3>

    <Link to="/Grammatica">Grammatica</Link>
    </div>
  )
}

export default Layout