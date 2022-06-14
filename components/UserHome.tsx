import React from "react";
import { FormEventHandler, useRef, useState } from "react";

import styled from "styled-components";

const LoginButton = styled.button`
  font-size: 30px;
  background-color: #62aced;
  border: none;
  cursor: pointer;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
`;

const Content = styled.div`
  margin-top: 100px;
  text-align: center;
  font-size: 20px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
`;

interface Props {}

interface Form {
  username?: string;
  password?: string;
}

export const UserHome = (props: Props) => {
  return (
    <>
      <Content>
        <p>
          User Home
        </p>
        <div>
          <LoginButton>Login</LoginButton>
        </div>
      </Content>
    </>
  );
};
