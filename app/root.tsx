// noinspection JSUnusedGlobalSymbols

import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  SerializeFrom,
} from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";
import clark_styles from "~/styles/shared.css";
import styles from "~/styles/app.css";
import Header from "~/components/Header";
import React, { useContext } from "react";
import StylesContext from "~/styles/stylesContext";
import Layout from "~/components/layout";
import tremor_styles from "@tremor/react/dist/esm/tremor.css";
import { Analytics } from "@vercel/analytics/react";
import getEnv from "../get-env";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Re.Zero",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "preload", href: clark_styles, as: "style" },
    { rel: "preload", href: styles, as: "style" },
    { rel: "preload", href: tremor_styles, as: "style" },
    //Preload CSS to makes it nonblocking
    { rel: "stylesheet", href: clark_styles },
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: tremor_styles },
  ];
};

const env = getEnv();

export const loader: LoaderFunction = (args) => {
  return rootAuthLoader(
    args,
    ({ request }) => {
      const { userId, sessionId, getToken } = request.auth;
      console.log("Root loader auth:", {
        userId,
        sessionId,
        getToken,
      });
      return {
        message: `Hello from the root loader`,
        ENV: { VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID },
      };
    },
    { loadUser: true }
  );
};

declare global {
  interface Window {
    ENV: SerializeFrom<typeof loader>["ENV"];
  }
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const styleData = useContext(StylesContext);
  const titleText = title ? title : null;
  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
        <title>{titleText}</title>
        {styleData?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(" ")}`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}
      </head>
      <body>
        <Header />
        <Layout>{children}</Layout>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(env?.VERCEL_ANALYTICS_ID)}`,
          }}
        />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
        {process.env.NODE_ENV !== "development" ? (
          <Analytics debug={false} />
        ) : null}
      </body>
    </html>
  );
}

function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <Document title="Error!">
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    </Document>
  );
};

function DefaultCatchBoundary() {
  const caught = useCatch();
  switch (caught.status) {
    case 401:
    case 404:
    case 406:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <div className="w-screen min-h-screen flex items-center justify-center">
            <article className="prose prose-lg prose-blue w-full max-w-lg">
              <h1>
                <span className="font-mono text-blue-500 pr-5">
                  {caught.status}
                </span>
                <br /> {caught.data}
              </h1>
              <pre>
                <code>{JSON.stringify(caught.data, null, 2)}</code>
              </pre>
              <hr />
              <p>
                <Link to="/">Start fresh</Link>
              </p>
            </article>
          </div>
        </Document>
      );

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      );
  }
}

export default ClerkApp(App);

export const CatchBoundary = ClerkCatchBoundary(DefaultCatchBoundary);
