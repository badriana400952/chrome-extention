import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";

function NavItems() {
   return (
      <div className="shadow-md bg-gray-800 rounded text-white">
         <div className="flex p-2 mx-2">
            <Link
               to={"/"}
               className="justify-items-center content-center text-sm text-white"
            >
               Items
            </Link>
            <p className="grow text-center"></p>
            <Link to={"/addItem"}>
               <p className="justify-items-center content-center text-sm">
                  <CiSquarePlus size={24} />
               </p>
            </Link>
         </div>
      </div>
   );
}

export default NavItems;
