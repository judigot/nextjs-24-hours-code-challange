import React from "react";
import { FormEventHandler, useRef, useState } from "react";

import styled from "styled-components";

import { LoginButton } from "../components/LoginButton";

const Content = styled.div`
  margin-top: 100px;
  font-size: 20px;
  width: auto;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;

  @media (min-width: 200px) {
    max-width: 200px;
  }
  @media (min-width: 300px) {
    max-width: 300px;
  }
  @media (min-width: 700px) {
    max-width: 700px;
  }
`;

interface Props {}

interface Form {
  username?: string;
  password?: string;
}

export const Public = (props: Props) => {
  return (
    <Content>
      <p>
        Welcome to the <b>Weather Forecast</b> web application. Please login
        with your <b>GitHub</b> user to use the application and view the weather
        in your city.
      </p>
      <div>
        <LoginButton>Login</LoginButton>
      </div>
    </Content>
  );
};
