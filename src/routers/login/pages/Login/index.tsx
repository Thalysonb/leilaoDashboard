import React, { FC } from "react";
import { Footer, Header } from "../../../../components/molecules";
import { LoginForm } from "../../../../components/organisms";

const Login: FC = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default Login;
