import NavAddItem from "./NavAddItem";
import ModalCreateItem from "./add-item";

function AddItem() {
   return (
      <div className="flex flex-col min-h-screen ">
         <NavAddItem />
         <ModalCreateItem />
      </div>
   );
}

export default AddItem;
