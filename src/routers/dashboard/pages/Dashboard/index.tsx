import React, { FC } from "react";
import { Footer, Header } from "../../../../components/molecules";
import { Dashboard } from "../../../../components/organisms";

const DashboardPage: FC = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <Dashboard />
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
