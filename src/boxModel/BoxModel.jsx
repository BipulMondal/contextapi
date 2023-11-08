import React, { useContext } from "react";
import { ApiContext } from "../contest/MyContext";

const BoxModel = () => {
  const { name, setName, setWork, work } = useContext(ApiContext);

  return (
    <>
      {" "}
      <div>{name}</div>
      <div>{work}</div>
      <button
        onClick={() => {
          setName("Hello World");
          setWork("Welcome to the coding world");
        }}
      ></button>
    </>
  );
};

export default BoxModel;
