"use client";

import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import dataProvider from "@refinedev/simple-rest";

const API_URL = "/api";

export const RefineContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <RefineKbarProvider>
      <Refine
        routerProvider={routerProvider}
        dataProvider={dataProvider(API_URL)}
        resources={[
          {
            name: "burs-basvuru",
            list: "/admin/burs-basvuru",
          },
          {
            name: "uyelik-basvuru",
            list: "/admin/uyelik-basvuru",
          },
        ]}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
        }}
      >
        {children}
        <RefineKbar />
      </Refine>
    </RefineKbarProvider>
  );
};

