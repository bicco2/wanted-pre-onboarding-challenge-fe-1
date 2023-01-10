import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout(props: any) {
  const location = useLocation();

  console.log(location.pathname);

  if (props.tokenCheck === null) {
    if (location.pathname !== "/auth") {
      window.location.replace("/auth");
      alert("로그인이 필요합니다.");
    }
  }

  return (
    <Suspense fallback={"...loading ...loading ...loading"}>
      <Outlet />
    </Suspense>
  );
}
