import Link from "next/link";
import React from "react";

const Folder5 = () => {
  return (
    <>
      <h1>Folder5 Page</h1>
      <div>
        <Link href="/folder1/folder2">Folder 2</Link>
      </div>
    </>
  );
};

export default Folder5;
