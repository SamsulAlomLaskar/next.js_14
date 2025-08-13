import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <Link href="/blog">Blog</Link>
      <br></br>
      <Link href="/products">Products</Link>
    </>
  );
};

export default Home;
