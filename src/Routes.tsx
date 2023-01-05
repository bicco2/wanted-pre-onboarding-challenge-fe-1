import { lazy } from "react";
import GlobalLayout from "./pages/_layout";

const TodoPage = lazy(() => import("./pages/TodoPage"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <TodoPage /> },
      { path: "/todo", element: <TodoPage /> },
    ],
  },
];
