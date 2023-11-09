import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {  Route } from "react-router-dom";



const PrivateRouter = ({ path, exact, children }) => {
  const Navigate = useNavigate();
  const user = useSelector((state) => state.users);
  const isUserLoggedIn = user.isUserLoggedIn;
  return isUserLoggedIn ? (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
