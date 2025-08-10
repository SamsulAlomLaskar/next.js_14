import React from "react";

const Docs = ({ params }: { params: { slug: string[] } }) => {
  {
    if (params.slug?.length === 2) {
      return (
        <h1>
          Viewing Docs on Home Page for features {params.slug[0]} and concept{" "}
          {params.slug[1]}
        </h1>
      );
    } else if (params.slug?.length === 1) {
      return <h1>Viewing Docs on Home Page for feature {params.slug[0]}</h1>;
    } else {
      return <h1>Viewing Docs on Home Page</h1>;
    }
  }
};
export default Docs;
