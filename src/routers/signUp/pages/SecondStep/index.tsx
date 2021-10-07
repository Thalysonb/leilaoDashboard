import React, { FC } from "react";
import { Footer, Header } from "../../../../components/molecules";
import { SignUpFormStep2 } from "../../../../components/organisms";

const SecondStep: FC = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <SignUpFormStep2 />
      </div>
      <Footer />
    </>
  );
};

export default SecondStep;
