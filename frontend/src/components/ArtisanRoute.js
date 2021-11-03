import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ArtisanRoute = ({ component: Component, ...rest }) => {
  const clientConnecter = useSelector((state) => state.clientConnecter);
  const { clientInfo } = clientConnecter;

  return (
    <Route
      {...rest}
      render={(props) =>
        clientInfo && clientInfo.isArtisan ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/connecter" />
        )
      }
    ></Route>
  );
};

export default ArtisanRoute;
