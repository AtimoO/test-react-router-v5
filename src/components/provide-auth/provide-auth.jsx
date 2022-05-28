import React, { createContext, useContext } from "react";
import { useProvideAuth } from "../../hooks/useProvideAuth";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
