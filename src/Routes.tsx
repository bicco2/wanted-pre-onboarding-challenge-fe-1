import SignUpPage from "pages/SignUpPage";
import { lazy } from "react";
import GlobalLayout from "./pages/_layout";

const TodoPage = lazy(() => import("./pages/TodoPage"));
const UserPage = lazy(() => import("./pages/UserPage"));

const test = localStorage.getItem("accessToken");

export const routes = [
  {
    path: "/",
    element: <GlobalLayout tokenCheck={test} />,
    children: [
      { path: "/todo", element: <TodoPage /> },
      { path: "/auth", element: <UserPage /> },
    ],
  },

  { path: "/signup", element: <SignUpPage /> },
];
