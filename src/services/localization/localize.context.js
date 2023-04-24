import React, { useState, createContext } from "react";

export const LocalizationContext = createContext();

export const LocalizationContextProvider = ({ children }) => {
  const [localeValue, setLocaleValue] = useState("en");

  return (
    <LocalizationContext.Provider
      value={{ localeValue, setLocaleValue }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
