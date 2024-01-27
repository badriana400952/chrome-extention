import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import useVaultStore from "../store/vault";
import Footer from "./Footer";
import Item from "./Item";
import Nav from "./Nav";

function Home() {
   const { currentVault, items, getVaults, loading } = useVaultStore();
   console.log(currentVault, items, loading);

   useEffect(() => {
      getVaults();
   }, []);

   return (
      <div className="flex flex-col min-h-screen bg-[#EDF2F7]">
         <Nav />
         <div className="m-2 gap-3 flex-grow ">
            <p className="text-sm m-1">Recent Items</p>
            {loading ? (
               <Spinner />
            ) : (
               items.slice(-Math.min(3, items.length)).map((item) => {
                  return <Item key={item.$id} data={item} />;
               })
            )}
         </div>
         <div>
            <Footer />
         </div>
      </div>
   );
}

export default Home;
