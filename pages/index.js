import React from 'react'

// This will render on the server just fine, but not on the browser
const environment = process.env;
const isProduction = environment.NODE_ENV === "production";

const Home = () => (
  <h1>Home {isProduction ? "production" : "other"}</h1>
)

export default Home
