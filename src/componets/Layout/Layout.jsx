import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
        <h3>Layout</h3>

    <Link to="/grammatica">Grammatica</Link>
    <br/>
    <Link to="/exercitationes">Exercitationes</Link>
    <br />
    <Link to="/lectiones">Lectiones</Link>
    </div>
  )
}

export default Layout