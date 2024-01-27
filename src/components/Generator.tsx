import Footer from "./Footer";
import { CiStickyNote } from "react-icons/ci";
import { FaCreditCard } from "react-icons/fa";
import NavGenerator from "./NavGenerator";

function Generator() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-[#EDF2F7]">
      <NavGenerator />
      <div className="m-2 gap-3 flex-grow" >
        <p className="text-sm m-1">Recent Items</p>
        <div className="shadow-sm bg-gray-800 types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <CiStickyNote size={24} />
            <p className=" text-sm">This day will be the best!</p>
            <p className="grow text-right text-sm">{">"}</p>
          </div>
        </div>
        <div className="shadow-sm bg-gray-800 types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <CiStickyNote size={24} />
            <p className="text-sm">It's not...</p>
            <p className="grow text-right text-sm">{">"}</p>
          </div>
        </div>
        <div className="shadow-sm bg-gray-800 types rounded cursor-pointer hover:bg-gray-500 mb-2">
          <div className="p-2 flex items-center gap-2">
            <FaCreditCard size={24} />
            <p className="text-sm">MasterCard</p>
            <p className="grow text-right text-sm">{">"}</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Generator;
