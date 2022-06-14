import React from "react";
import { FormEventHandler, useRef, useState } from "react";

import styled from "styled-components";

import { LoginButton } from "../components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const Content = styled.div`
  margin-top: 100px;
  text-align: center;
  font-size: 20px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

interface Props {}

interface Form {
  city?: string;
}

export const UserHome = (props: Props) => {
  const cityRef = useRef<HTMLInputElement>(null!);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form values
    const city: Form["city"] = cityRef.current.value;
    alert(city);
  };

  const { user } = useAuth0();
  return (
    <Content>
      <p>
        <b>{user?.name}</b>
      </p>
      <p>
        <a
          target="_blank"
          href={"https://github.com/" + user?.nickname}
          rel="noreferrer"
        >
          https://github.com/{user?.nickname}
        </a>
      </p>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          autoFocus
          placeholder="City"
          required
          ref={cityRef}
          type="text"
          name="city"
        />
        <br />
        <br />

        <button type="submit">Display Weather</button>
      </form>
      <div>
        <LoginButton>Login</LoginButton>
      </div>
    </Content>
  );
};
