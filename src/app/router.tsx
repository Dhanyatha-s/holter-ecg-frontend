import { createBrowserRouter, Navigate } from "react-router-dom";
import AppShell from "../layouts/AppShell";
import DashboardPage from "../pages/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "patients",
        element: <PlaceholderPage title="Patients" />,
      },
      {
        path: "sessions",
        element: <PlaceholderPage title="Holter Sessions" />,
      },
      {
        path: "analysis",
        element: <PlaceholderPage title="Analysis" />,
      },
      {
        path: "settings",
        element: <PlaceholderPage title="Settings" />,
      },
    ],
  },
]);

function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="placeholder-page">
      <p className="page-eyebrow">Clinical Workstation</p>
      <h1>{title}</h1>
      <p>This workspace is being prepared.</p>
    </section>
  );
}