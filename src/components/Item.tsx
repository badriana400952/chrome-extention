import { IVaultItemDefault } from "../store/vault";
import { icons } from "./icons";

const Item = ({ data }: { data: IVaultItemDefault }) => {
   const icon = icons.find(
      (icon) => icon.name.toLowerCase() === data.type.toLowerCase()
   )?.icon;

   return (
      <div className="shadow-sm bg-gray-50 types rounded-lg cursor-pointer hover:bg-gray-200 mb-2 border-1 border-gray-400">
         <div className="p-2 flex items-center gap-2">
            {icon}
            <p className=" text-sm">{data.name}</p>
            <p className="grow text-right text-sm">{">"}</p>
         </div>
      </div>
   );
};

export default Item;
