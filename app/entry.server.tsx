import { PassThrough } from "stream";
import type { EntryContext } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import dotenv from "dotenv";
import type { ReactElement } from "react";
import createEmotionCache from "~/styles/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "~/styles/theme";
import StylesContext from "~/styles/stylesContext";

dotenv.config();

const ABORT_DELAY = 5000;
const cache = createEmotionCache();

const MuiRemixServer = (children: ReactElement) => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  </CacheProvider>
);

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const callbackName = isbot(request.headers.get("user-agent"))
    ? "onAllReady"
    : "onShellReady";

  return new Promise((resolve, reject) => {
    let didError = false;

    const remixServerWithStyles = (
      <StylesContext.Provider value={null}>
        {MuiRemixServer(
          <RemixServer context={remixContext} url={request.url} />
        )}
      </StylesContext.Provider>
    );

    const { pipe, abort } = renderToPipeableStream(remixServerWithStyles, {
      [callbackName]: () => {
        const body = new PassThrough();

        responseHeaders.set("Content-Type", "text/html");

        resolve(
          new Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode,
          })
        );

        pipe(body);
      },
      onShellError: (err: unknown) => {
        reject(err);
      },
      onError: (error: unknown) => {
        didError = true;

        console.error(error);
      },
    });

    setTimeout(abort, ABORT_DELAY);
  });
}
