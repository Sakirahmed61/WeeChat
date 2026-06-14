import React, { createContext, useContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within AuthContextProvider"
    );
  }

  return context;
}  

export const AuthContextProvider = ({ children }) => {

  const [authUser, setAuthUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("weechat-user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      localStorage.removeItem("weechat-user");
      return null;
    }
  });

  return (
    <AuthContext.Provider value={{authUser, setAuthUser}}>
      {children}
    </AuthContext.Provider>
  )
} 
