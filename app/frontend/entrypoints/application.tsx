import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import "./index.css";
const pages = import.meta.glob("../Pages/**/*.tsx");

async function resolvePage(name: string) {
  const page = pages[`../Pages/${name}.tsx`];
  if (!page) {
    throw new Error(
      `Unknown page ${name}. Is is located under Pages with tsx extension ?`
    );
  }
  const content = await page();
  return content.default;
}
createInertiaApp({
  resolve: resolvePage,
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />);
  },
});
