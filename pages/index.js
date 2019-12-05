import React from 'react'
import Head from 'next/head'

// This will render on the server just fine, but not on the browser
const environment = process.env;
const isProduction = environment.NODE_ENV === "production";

const Home = () => (
  <div>
    <Head>
      {/*
          Included so the browser doesn't hit a 404 attempting to GET
          /favicon.ico, which would cause a render of _error.js on the server,
          causing potential confusion
        */}
      <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
    </Head>
    <h1>Home {isProduction ? "production" : "other"}</h1>
  </div>
)

export default Home
