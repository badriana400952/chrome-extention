import { useLocation } from "react-router-dom";
import useAuthStore from "../../store/auth";
import { IVaultItem } from "../../store/vault";
import ItemCard from "./ItemCard";
import ItemLogin from "./ItemLogin";
import ItemNote from "./ItemNote";

const ItemDetailCard = () => {
   const { user } = useAuthStore();
   const location = useLocation();
   const data: IVaultItem = location.state?.data || {};
   console.log("user", user);
      
   return (
      <>
         
                  {data.type === 'card' ? (
                     <ItemCard itemData={data}  />
                  ) : data.type === 'login' ? (
                     <ItemLogin itemData={data} />
                  ) : data.type === 'note' ? (
                     <ItemNote itemData={data} />
                  ) : null}
               
       
      </>
   )
}

export default ItemDetailCard;
