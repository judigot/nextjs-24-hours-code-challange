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

    const date = new Date();
    const day = date.getDate();

    let APIKey = "46d085bb91e21de943adb6068339a05e";
    let CORS = "https://cors-anywhere.herokuapp.com/";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}`;

    fetch(CORS + url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      // body: { firstName: "First Name", lastName: "Lastname" }, // For POST requests only
    })
      .then((response) => response.json())
      .then((result) => {
        alert(JSON.stringify(result));
      })
      .catch((error) => {
        // Failure
      });
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
