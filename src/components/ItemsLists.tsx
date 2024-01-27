import {  useNavigate, useParams } from "react-router-dom";
import useVaultStore from "../store/vault";
import Footer from "./Footer";
import NavItems from "./NavItems";
import { icons } from "./icons";

const ItemsLists = () => {
   const types = useParams();
   const { items } = useVaultStore();

   const navigate = useNavigate();
   const handleClick = (itemId:any, data:any) => {
      // Menyertakan data type dalam navigasi
      navigate(`/item/${itemId}`, { state: { data} });
    };
   return (
      <div className="flex flex-col min-h-screen bg-[#EDF2F7] ">
         <NavItems />
         <div className="m-2 gap-3 flex-grow">
            <p className="text-sm m-1">Items</p>

            {items
               .filter((i) => i.type === types.type!.toLowerCase())
               // .filter((i) => i.type === 'card')
               .map((item) => (
                  <div className="shadow-sm types border  rounded-sm cursor-pointer hover:bg-gray-200 mb-2 bg-gray-50">
                     <div
                        className="p-2 flex items-center gap-2"
                        onClick={() => handleClick(item.$id, item)}
                     >
                        {
                           icons.find(
                              (icon) =>
                                 icon.name.toLowerCase() === types.type!.toLowerCase()
                           )?.icon
                        }
                        <p className="text-sm">{item.name} </p>
                        <p className="grow text-right text-sm"></p>
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
};

export default ItemsLists;
