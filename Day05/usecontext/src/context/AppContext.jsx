import React, { createContext} from 'react'

// Globel level data
export const AppContext = createContext(); // Good to use the same name in file and const variable name

const ContextProvider = (props) => {
    const phone = "+1 123456789";
    const name = "GreatStack";

  return (
    <AppContext.Provider value={{phone, name}}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;