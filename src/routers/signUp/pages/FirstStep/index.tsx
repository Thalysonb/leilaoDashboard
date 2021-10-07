import React, { FC } from "react";
import { Footer, Header } from "../../../../components/molecules";
import { SignUpForm } from "../../../../components/organisms";

const FirstStep: FC = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
};

export default FirstStep;
