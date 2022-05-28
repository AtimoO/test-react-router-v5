import { Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { fakeAuth } from "../../utils/fakeApi";

export function ProtectedRoute({ children, ...rest }) {
  // let { getUser, ...auth } = useAuth();
  // const [isUserLoaded, setUserLoaded] = useState(false);

  // const init = async () => {
  //   await getUser();
  //   setUserLoaded(true);
  // };

  // useEffect(() => {
  //   init();
  // }, []);

  // if (!isUserLoaded) {
  //   return null;
  // }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
              // В from сохраним текущий маршрут
            }}
          />
        )
      }
    />
  );
}
