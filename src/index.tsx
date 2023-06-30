import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootNode: HTMLElement | null = document.getElementById("root");

ReactDOM.createRoot(rootNode!).render(<App />);
