import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}


export function AppContextProvider({ children }) {    
    const valueFromWindow =JSON.parse(window.name);
    console.log(valueFromWindow.email,valueFromWindow,"sharedValue")
  const [sharedValue, setSharedValue] = useState(valueFromWindow.email);  
 
  return (
    <AppContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </AppContext.Provider>
  );
}
