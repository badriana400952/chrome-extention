import { account } from "../appwrite";
import { useNavigate } from "react-router-dom";

const useCheckAuth = () => {
   const navigate = useNavigate();

   const checkAuth = () => {
      account
         .get()
         .then((val) => {
            console.log("value", val);
            navigate("/");
         })
         .catch((err) => {
            console.log("err", err);
            navigate("/auth/login");
         });
   };

   return { checkAuth };
};

export default useCheckAuth;
