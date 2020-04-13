import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Hero>
      <Banner title="Rooms" subtitle="great rooms starting at $199">
        <Link to="/rooms" className="btn-primary">
          See Rooms
        </Link>
      </Banner>
    </Hero>
  );
}
