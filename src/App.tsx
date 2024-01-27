/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AddItem from "./components/AddItem";
import Items from "./components/Items";
import Generator from "./components/Generator";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Login from "./components/Login";
import useAuthStore from "./store/auth";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import ItemsLists from "./components/ItemsLists";
import EditItem from "./components/EditItem";
import ItemDetailCard from "./components/itemDetail";
import Setting from "./page/setting/Setting";
import AutoFillId from "./components/setting/AutoFillId";
import Follders from "./components/setting/Follders";
import SettingAssync from "./components/setting/SettingAsync";
import Excluded from "./components/setting/Excluded";

function App() {
   const { checkAuth } = useAuthStore();
   const [checkingAuth, setCheckingAuth] = useState(false);
   useEffect(() => {
      setCheckingAuth(true);
      checkAuth();
      setCheckingAuth(false);
   }, []);

   return checkingAuth ? (
      <Spinner />
   ) : (
      <Routes>
         <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="items" element={<Items />} />
            <Route path="autofill" element={<AutoFillId />} />
            <Route path="folder" element={<Follders />} />
            <Route path="async" element={<SettingAssync />} />
            <Route path="exluded" element={<Excluded />} />
            <Route path="setting" element={<Setting />} />
            <Route path="generator" element={<Generator />} />
            <Route path="about" element={<About />} />
            <Route path="addItem" element={<AddItem />} />
            <Route path="itemLists/:type" element={<ItemsLists />} />
            <Route path="item/:id"  >
               <Route path="edit" element={<EditItem />} />
               <Route index element={<ItemDetailCard />} />
            </Route>
         </Route>
         <Route path="/login" element={<Login />} />
      </Routes>
   );
}

export default App;
