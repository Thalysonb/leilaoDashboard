import React, { FC } from "react";
import "./styles.css";
import "./styles.css";

type TextLinkProps = {
  text?: string;
  link: string;
  onLinkClick?: () => void;
};

const TextLink: FC<TextLinkProps> = ({ text, link, onLinkClick }) => {
  return (
    <>
      {text && (
        <label className="text">
          {text} &nbsp;
          <span
            className="text-underline cp font-bold"
            onClick={() => {
              if (onLinkClick) {
                onLinkClick();
              }
            }}
          >
            {link}
          </span>
        </label>
      )}
      {!text && (
        <label
          className="text text-underline cp"
          onClick={() => {
            if (onLinkClick) {
              onLinkClick();
            }
          }}
        >
          {link}
        </label>
      )}
    </>
  );
};

export default TextLink;
