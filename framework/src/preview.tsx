/// <reference types="@docusaurus/theme-classic" />

import React from "react";
import type { DecoratorFn } from "@storybook/react";
import LayoutProvider from "@theme/Layout/Provider";
import { RouteContextProvider } from "@docusaurus/core/lib/client/routeContext";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

if (window?.docusaurus == null) {
  window.docusaurus = {
    prefetch: () => false,
    preload: () => false,
  };
}

export const decorators: DecoratorFn[] = [
  (Story) => (
    <HelmetProvider>
      <BrowserRouter>
        <RouteContextProvider
          value={{
            plugin: {
              name: "storybook-framework-docusaurus",
              id: "storybook-framework-docusaurus",
            },
          }}
        >
          <LayoutProvider>
            <Story />
          </LayoutProvider>
        </RouteContextProvider>
      </BrowserRouter>
    </HelmetProvider>
  ),
];
