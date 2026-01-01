"use client";

import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import dataProvider from "@refinedev/simple-rest";
import { 
  useNotificationProvider, 
  ThemedLayout, 
  ThemedTitle,
  RefineThemes 
} from "@refinedev/mantine";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const API_URL = "/api";

export const RefineContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <RefineKbarProvider>
      <MantineProvider theme={RefineThemes.Green as unknown as MantineThemeOverride} defaultColorScheme="light">
        <Notifications />
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(API_URL)}
          notificationProvider={useNotificationProvider}
          resources={[
            {
              name: "burs-basvuru",
              list: "/admin/burs-basvuru",
              meta: {
                label: "Burs Başvuruları",
              },
            },
            {
              name: "uyelik-basvuru",
              list: "/admin/uyelik-basvuru",
              meta: {
                label: "Üyelik Başvuruları",
              },
            },
          ]}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          <ThemedLayout
            Title={(props) => (
              <ThemedTitle {...props} text="TKB Bursa" />
            )}
          >
            {children}
          </ThemedLayout>
          <RefineKbar />
        </Refine>
      </MantineProvider>
    </RefineKbarProvider>
  );
};

