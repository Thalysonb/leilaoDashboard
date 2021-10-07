import React, { FC } from "react";
import "./styles.css";
import fbIcon from "../../../assets/icon/facebook.svg";
import gIcon from "../../../assets/icon/google.svg";

type ButtonProps = {
  label: string;
  type: "primary" | "facebook" | "google" | "logo";
};

const Button: FC<ButtonProps> = ({ label, type }) => {
  return (
    <div className="button-container">
      {type === "primary" && <button className="button">{label}</button>}
      {type === "google" && (
        <>
          <span className="btn-icon">
            <img src={gIcon} />
          </span>
          <button className="btn-google">{label}</button>
        </>
      )}
      {type === "facebook" && (
        <>
          <span className="btn-icon">
            <img src={fbIcon} />
          </span>
          <button className="btn-facebook">{label}</button>
        </>
      )}
      {type === "logo" && <button className="btn-logo">{label}</button>}
    </div>
  );
};

export default Button;
