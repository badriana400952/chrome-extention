import Footer from "./Footer";

import NavItems from "./NavItems";
import { icons } from "./icons";
import useVaultStore from "../store/vault";
import { useNavigate } from "react-router-dom";

function Items() {
   const { items } = useVaultStore();
   const navigate = useNavigate();
   return (
      <div className="flex flex-col min-h-screen bg-[#EDF2F7]">
         <NavItems />
         <div className="m-2 gap-3 flex-grow">
            <p className="text-sm m-1">Items</p>

            {icons.map((item) => (
               <div
                  className="shadow-sm types bg-gray-50 border  rounded-md cursor-pointer hover:bg-gray-200 mb-2"
                  onClick={() => {
                     navigate(`/itemLists/${item.name.toLowerCase()}`);
                  }}
               >
                  <div className="p-2 flex items-center gap-2">
                     {item.icon}
                     <p className="text-sm">{item.name}</p>
                     <p className="grow text-right text-sm">
                        {
                           items.filter(
                              (i) => i.type === item.name.toLowerCase()
                           ).length
                        }
                     </p>
                     <p className="text-right text-sm">{">"}</p>
                  </div>
               </div>
            ))}
         </div>

         <div>
            <Footer />
         </div>
      </div>
   );
}

export default Items;
