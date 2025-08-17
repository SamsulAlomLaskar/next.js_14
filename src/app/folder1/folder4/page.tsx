import Link from "next/link";
import React from "react";

const Folder4 = () => {
  return (
    <>
      <h1>Folder4 Page</h1>
      <div>
        <Link href="/folder1/folder3">Folder 3</Link>
        <br />
        <Link href="/about">About</Link>
      </div>
    </>
  );
};

export default Folder4;
