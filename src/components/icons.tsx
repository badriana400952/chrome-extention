import { FaRegAddressCard } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import { CiStickyNote } from "react-icons/ci";
import { GoCreditCard } from "react-icons/go";

export const icons = [
   {
      name: "Login",
      icon: <IoKeyOutline />,
   },
   {
      name: "Card",
      icon: <GoCreditCard />,
   },
   {
      name: "Identity",
      icon: <FaRegAddressCard />,
   },
   {
      name: "Note",
      icon: <CiStickyNote />,
   },
];

export const dataSettingManage: { name: string; path: string }[] = [
   {
     name: "Auto-fill",
     path: "/autofill",
   },
   {
     name: "Folders",
     path: "/folder",
 
   },
   {
     name: "Async",
     path: "/async",
 
   },
   {
     name: "Excluded domains",
     path: "/exluded",
 
   },
 ];
