import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Footer = () => {
   const navigate = useNavigate();
   return (
      <footer className="bg-gray-800 text-white p-4">
         <div className="flex justify-center space-x-4 gap-8">
            <button
               className="hover:text-gray-500 focus:outline-none"
               onClick={() => navigate("/")}
            >
               <GoHome size={24} />
            </button>
            <button
               className="hover:text-gray-500 focus:outline-none"
               onClick={() => navigate("/items")}
            >
               <MdLockOutline size={24} />
            </button>
            {/* <button
               className="hover:text-gray-500 focus:outline-none"
               onClick={() => navigate("/generator")}
            >
               <GiPerspectiveDiceSixFacesRandom size={24} />
            </button> */}
            <button
               className="hover:text-gray-500 focus:outline-none"
               onClick={() => navigate("/setting")}
            >
               <IoSettingsOutline size={24} />
            </button>
         </div>
      </footer>
   );
};

export default Footer;
