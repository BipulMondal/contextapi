import React from "react";

const Array = () => {
  const arr = ["bipul", "Shyam", "Ram"];
  //   const arr = [1, 8, 6, 4, 9, 3, 2];

  let res = arr.find((item) => item === "Ram");
  return (
    <div>
      <h3>{res}</h3>
    </div>
  );
};

export default Array;
