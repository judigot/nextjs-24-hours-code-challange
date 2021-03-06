import React from "react";
import { FormEventHandler, useRef, useState } from "react";
import Head from "next/head";

import { useAuth0 } from "@auth0/auth0-react";

import { Navbar } from "../components/Navbar";
import { UserNav as NavbarAuth } from "./NavbarAuth";
import { Public } from "../components/Public";
import { UserHome } from "../components/UserHome";

import styles from "../styles/Home.module.css";

export const App: any = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css"
        ></link>
      </Head>

      {isAuthenticated ? (
        <NavbarAuth isAuth={isAuthenticated} />
      ) : (
        <Navbar isAuth={isAuthenticated} />
      )}

      {/* Dynamic Content */}
      {!isAuthenticated && <Public />}
      {isAuthenticated && <UserHome />}
      {/* Dynamic Content */}
    </div>
  );
};
