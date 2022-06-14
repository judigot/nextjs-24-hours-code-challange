import React from "react";
import { FormEventHandler, useRef, useState } from "react";

import styled from "styled-components";
import styles from "../styles/Home.module.css";

import { useAuth0 } from "@auth0/auth0-react";

const Content = styled.div`
  margin-top: 100px;
  text-align: center;
  font-size: 20px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  @media (min-width: 200px) {
    max-width: 200px;
  }
  @media (min-width: 300px) {
    max-width: 400px;
  }
  @media (min-width: 700px) {
    max-width: 700px;
  }
`;

const UserInfo = styled.div`
  @media (min-width: 200px) and (max-width: 700px) {
    display: none;
  }
`;

const Table = styled.table`
  text-align: center;
  border: 1px solid black;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid black;
`;

const TableData = styled.td`
  border: 1px solid black;
`;

interface Props {}

interface Form {
  city?: string;
}

interface Forecast {
  date?: string;
  temp?: number;
  desc?: string;
  main?: string;
  pressure?: number;
  humidity?: number;
}

export const UserHome = (props: Props) => {
  const { user } = useAuth0();
  const cityRef = useRef<HTMLInputElement>(null!);

  const [weatherForecast, setWeatherForecast] = useState<Forecast>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form values
    const city: Form["city"] = cityRef.current.value;

    let APIKey = "46d085bb91e21de943adb6068339a05e";
    let CORS = "https://cors-anywhere.herokuapp.com/";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}`;

    fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      // body: { firstName: "First Name", lastName: "Lastname" }, // For POST requests only
    })
      .then((response) => response.json())
      .then((result) => {
        const d = new Date(result.dt * 1000);
        const month = d.getMonth() + 1;
        const day = d.getDate();
        const year = d.getFullYear();

        // Date
        const date = `${month < 10 ? 0 : ""}${month}/${day}/${year}`;
        const temp = result.main.temp;
        const desc = result.weather[0].description;
        const main = result.weather[0].main;
        const pressure = result.main.pressure;
        const humidity = result.main.humidity;

        setWeatherForecast({
          date,
          temp,
          desc,
          main,
          pressure,
          humidity,
        });
      })
      .catch((error) => {
        // Failure
      });
  };

  const handleBack = () => {
    setWeatherForecast({});
  };

  const weather = (
    <Content>
      <Table>
        <tr>
          <TableHeader className="xxxxxxxxxxxxxx">
            Date (mm/dd/yyyy)
          </TableHeader>
          <TableHeader className={styles["hide-on-mobile"]}>
            Temp (F)
          </TableHeader>
          <TableHeader className={styles["show-on-mobile"]}>
            Temperature (F)
          </TableHeader>
          <TableHeader className={styles["hide-on-mobile"]}>
            Description
          </TableHeader>
          <TableHeader className={styles["hide-on-mobile"]}>Main</TableHeader>
          <TableHeader className={styles["hide-on-mobile"]}>
            Pressure
          </TableHeader>
          <TableHeader className={styles["hide-on-mobile"]}>
            Humidity
          </TableHeader>
        </tr>
        <tr>
          <TableData>{weatherForecast.date}</TableData>
          <TableData>{weatherForecast.temp}</TableData>
          <TableData className={styles["hide-on-mobile"]}>
            {weatherForecast.desc}
          </TableData>
          <TableData className={styles["hide-on-mobile"]}>
            {weatherForecast.main}
          </TableData>
          <TableData className={styles["hide-on-mobile"]}>
            {weatherForecast.pressure}
          </TableData>
          <TableData className={styles["hide-on-mobile"]}>
            {weatherForecast.humidity}
          </TableData>
        </tr>
      </Table>
      <br />
      <button onClick={handleBack}>Back</button>
    </Content>
  );

  const form = (
    <Content>
      <UserInfo>
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
      </UserInfo>
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
    </Content>
  );

  return !Object.keys(weatherForecast).length ? <>{form}</> : <>{weather}</>;
};
