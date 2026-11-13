import React from "react";
import NextHead from "next/head";


const Head: React.FC = () => (
  <NextHead>
    <title>Cube</title>
    <meta name="description" content="description" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </NextHead>
);

export default Head;
