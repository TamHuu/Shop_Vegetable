import HomePage from "./pages/user/homePage";
import MasterLayout from "./pages/user/homePage/theme/masterLayout";
import ProfilePage from "./pages/user/profilePage";
import { ROUTERS } from "./utils/route";
import { Routes, Route } from "react-router-dom";
const renderUserRouter = () => {
  const userRouters = [
    { path: ROUTERS.USER.HOME, component: <HomePage /> },
    { path: ROUTERS.USER.PROFILE, component: <ProfilePage /> },
  ];
  console.log(">>>check route", userRouters);
  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((route, key) => (
          <Route key={key} path={route.path} element={route.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouteCustom = () => {
  return renderUserRouter();
};
export default RouteCustom;
