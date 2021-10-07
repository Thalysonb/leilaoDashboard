import React, { forwardRef } from "react";
import eyeIcon from "../../../assets/icon/eye.svg";
import "./styles.css";
import searchIcon from "../../../assets/icon/search.svg";

type InputProps = {
  type: "text" | "password" | "search";
  placeholder: string;
  name: string;
  error?: string;
  icon?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, error, icon, type }, ref) => {
    return (
      <>
        <div className="input-container">
          {icon && type !== "search" && (
            <span className="icon-left">
              <img src={icon} />
            </span>
          )}
          <input
            className={type === "search" ? "input input-search-color" : "input input-color" }
            placeholder={placeholder}
            ref={ref}
            name={name}
            type={type}
          />
          {type === "password" && (
            <span className="icon-right">
              <img src={eyeIcon} />
            </span>
          )}
          {type === "search" && (
            <span className="icon-search">
              <div className='divider'></div>
              <img src={searchIcon} />
            </span>
          )}
          {error && <span style={{ color: "red" }}>{error}</span>}
        </div>
      </>
    );
  }
);

export default Input;
