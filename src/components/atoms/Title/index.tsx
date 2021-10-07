import React, { FC } from "react";
import "./styles.css";
import './styles.css';

type TitleProps = {
  text: string;
};

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <h4 className="title">{text}</h4>
  );
};

export default Title;
