import { Link } from "react-router-dom";

function NavAddItem() {
   return (
      <div className="shadow-md bg-gray-800 rounded text-white">
         <div className="flex p-2 mx-2">
            <Link
               to={"/items"}
               className="justify-items-center content-center text-sm"
            >
               Back
            </Link>
            <p className="grow text-center"></p>
            {/* <Link to={"/addItem"}>
               <p className="justify-items-center content-center text-sm cursor-pointer">
                  Save
               </p>
            </Link> */}
         </div>
      </div>
   );
}

export default NavAddItem;
