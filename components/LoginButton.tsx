import React from "react";
import { FormEventHandler, useRef, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

import styled from "styled-components";

const Button = styled.button`
  font-size: 30px;
  background-color: #62aced;
  border: none;
  cursor: pointer;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
`;

export const LoginButton: any = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithRedirect()}>Login</Button>
    )
  );
};
