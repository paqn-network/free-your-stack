import React from "react";
import { createRoot } from "react-dom/client";
import FreeYourStack from "@/pages/FreeYourStack";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="max-w-3xl mx-auto px-4 py-8">
      <FreeYourStack />
      <footer className="mt-10 text-center text-[10px] text-gray-500">
        Made by <a className="text-cyan-400 hover:underline" href="https://paqn.network">PAQN CIC</a>. Free software under the AGPL-3.0.
      </footer>
    </main>
  </React.StrictMode>
);
