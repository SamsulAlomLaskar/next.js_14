"use client";
import React, { useState } from "react";
import "./styles.css"; // Assuming you have a styles.css for auth layout

const Template = () => {
  const [userInput, setUserInput] = useState();
  return (
    <>
      <input
        placeholder="Type something..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="border p-2 rounded"
      />
    </>
  );
};

export default Template;
