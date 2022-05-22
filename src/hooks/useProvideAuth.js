import { useState } from "react";
import { fakeAuth } from "../utils/fakeApi";

export function useProvideAuth() {
  const [user, setUser] = useState(null);
  const signIn = (cb) => {
    return fakeAuth.signIn(() => {
      // Временные данные, которые будут доступны приложению
      setUser({ id: 123, name: "Anton" });
      cb();
    });
  };

  const signOut = (cb) => {
    return fakeAuth.signOut(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signIn,
    signOut,
  };
}
