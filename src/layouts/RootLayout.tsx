import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../store/auth";

const RootLayout: React.FC = () => {
   const { isLogin } = useAuthStore();

   return isLogin ? <Outlet /> : <Navigate to={"/login"} />;
};

export default RootLayout;
