import React, { createContext, useState } from "react";

const ApiContext = createContext();

const MyContext = ({ children }) => {
  const [name, setName] = useState("Bipul");
  const [work, setWork] = useState();

  return (
    <ApiContext.Provider value={{ name, setName, work, setWork }}>
      {children}
    </ApiContext.Provider>
  );
};

export default MyContext;
export { ApiContext };
