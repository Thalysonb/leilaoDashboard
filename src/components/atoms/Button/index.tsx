import React, { FC } from "react";
import fbIcon from "../../../assets/icon/facebook.svg";
import gIcon from "../../../assets/icon/google.svg";
import "./styles.css";

type ButtonProps = {
  label: string;
  type: "primary" | "facebook" | "google" | "logo";
  disabled?: boolean;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ label, type, disabled, onClick }) => {
  return (
    <div className="button-container">
      {type === "primary" && (
        <button
          className="button"
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
        >
          {label}
        </button>
      )}
      {type === "google" && (
        <>
          <span className="btn-icon">
            <img src={gIcon} />
          </span>
          <button disabled={disabled} className="btn-google">
            {label}
          </button>
        </>
      )}
      {type === "facebook" && (
        <>
          <span className="btn-icon">
            <img src={fbIcon} />
          </span>
          <button disabled={disabled} className="btn-facebook">
            {label}
          </button>
        </>
      )}
      {type === "logo" && (
        <button disabled={disabled} className="btn-logo">
          {label}
        </button>
      )}
    </div>
  );
};

export default Button;
