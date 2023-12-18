import React from "react";
import Logo from './movielogo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img src={Logo} className="w-[50px]"/>
      <Link to='/' className="text-red-600">Movies</Link>
      <Link to='/Watchlist' className="text-red-600">WatchList</Link>
    </div>
  );
}

export default Navbar;
