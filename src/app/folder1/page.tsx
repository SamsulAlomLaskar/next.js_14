import Link from "next/link";
import React from "react";

const Folder1 = () => {
  return (
    <>
      <h1>Folder1 Page</h1>
      <div>
        <Link href="/folder1/folder2">Folder 2</Link>
      </div>
    </>
  );
};

export default Folder1;
