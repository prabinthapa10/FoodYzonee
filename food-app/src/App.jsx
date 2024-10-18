import React from "react";
import FoodApp from "./Components/FoodApp";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  *{
    background-color: #323234;
    color: white
  }
`;

export default function App() {
  return (
    <div>
      <GlobalStyled />
      <FoodApp />
    </div>
  );
}
