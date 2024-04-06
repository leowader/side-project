import { Route, Routes } from "react-router-dom";
import { routes } from "./RouterConfig";
import { routeType } from "../interfaces/routeType";

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route: routeType, index: number) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
