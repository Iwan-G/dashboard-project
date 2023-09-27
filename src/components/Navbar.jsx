import React from "react";
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
  return (
    <section className="nav">
      <div className="title">
        <h4>Hi Iwan,</h4>
        <h1>
          Welcome to <span>MY TAXI DASHBOARD</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </section>
  );
}
