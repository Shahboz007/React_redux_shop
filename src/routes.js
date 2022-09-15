import Home from "./components/Home";
import { HOME_ROUTE } from "./util/const";

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    element: <Home />
  }
]