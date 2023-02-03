import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";
import clark_styles from "~/styles/shared.css";
import styles from "./styles/app.css";
import Header from "~/components/Header";
import React from "react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Ot.Zero",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: clark_styles },
    { rel: "stylesheet", href: styles },
  ];
};

export const loader: LoaderFunction = (args) => {
  return rootAuthLoader(
    args,
    ({ request }) => {
      const { userId, sessionId, getToken } = request.auth;
      console.log("Root loader auth:", { userId, sessionId, getToken });
      return { message: `Hello from the root loader :)` };
    },
    { loadUser: true }
  );
};

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default ClerkApp(App);

export const CatchBoundary = ClerkCatchBoundary();
