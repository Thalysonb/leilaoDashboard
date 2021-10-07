import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, RouteProps } from "react-router-dom";

const LoginModule = lazy(
  () => import(/* webpackChunkName: "login" */ "./login")
);

const SignUpModule = lazy(
  () => import(/* webpackChunkName: "login" */ "./signUp")
);

const DashboardModule = lazy(
  () => import(/* webpackChunkName: "login" */ "./dashboard")
);



const Routes = () => {
  return (
    <Suspense fallback={<div />}>
    <BrowserRouter>
      <Route path="/" component={LoginModule} />
      <Route path="/signup" component={SignUpModule} />
      <Route path="/dashboard" component={DashboardModule} />
    </BrowserRouter>

    </Suspense>
  );
};

export default Routes;
