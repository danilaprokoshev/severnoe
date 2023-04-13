import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./slices/index";
import "./index.css";
import { worker } from "./mocks/browser";

// function for letting the worker registration has finished
async function prepare() {
  if (process.env.NODE_ENV === "development") {
    return await worker.start();
  }

  await Promise.resolve();
}

await prepare().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});
