import React from "react";
import { FormEventHandler, useRef, useState } from "react";

import styles from "../styles/Home.module.css";

import styled from "styled-components";

const Title = styled.div`
  font-size: 30px;
`;

interface Props {}

interface Form {
  username?: string;
  password?: string;
}

export const Navbar = (props: Props) => {
  return (
    <>
      <div className={styles.navbar}>
        <a className={styles.active} href="#">
          <Title>
            <i className="fa-solid fa-cloud"></i>{" "}
            <span className={styles.title}>Weather Forecast</span>
          </Title>
        </a>
      </div>
    </>
  );
};
