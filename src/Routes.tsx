import SignUpPage from "pages/SignUpPage";
import { lazy } from "react";
import GlobalLayout from "./pages/_layout";

const TodoPage = lazy(() => import("./pages/TodoPage"));
const UserPage = lazy(() => import("./pages/UserPage"));

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/auth", element: <UserPage /> },
      { path: "/todo", element: <TodoPage /> },
      { path: "/signup", element: <SignUpPage /> },
    ],
  },
];
