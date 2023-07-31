import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom";

import LoginPage from "./Pages/Login.tsx";
import RegisterPage from "./Pages/Register.tsx";
import ErrorPage from "./Pages/404.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <div>Hello World👋</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];

const rootElement = document.getElementById("root");

if (rootElement) { // Check jika elemen rootElement tidak null
  const router = createBrowserRouter(routes);

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found."); // Tambahkan pesan kesalahan jika elemen tidak ditemukan
}
