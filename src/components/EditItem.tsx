import NavAddItem from "./NavAddItem";
import ModalCreateItem from "./edit-item";

function EditItem() {
   return (
      <div className="flex flex-col min-h-screen ">
         <NavAddItem />
         <ModalCreateItem />
      </div>
   );
}

export default EditItem;
