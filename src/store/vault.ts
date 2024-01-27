import { databases, ID } from "../appwrite";
import { Permission, Query, Role } from "appwrite";
import { create } from "zustand";
import useAuthStore from "./auth";

interface IVaultStore {
   currentVault: string;
   loading: boolean;
   setCurrentVault: (params: string) => void;
   getVaults: () => Promise<any>;
   items: IVaultItem[];
   addItem: (data: IVaultItem) => Promise<any>;
   updateItem: (data: IVaultItem, body: IVaultItem) => Promise<any>;
   deleteItem: (data: IVaultItem) => Promise<any>;
   error: string;
}

export type IVaultItem = IItemLogin | IItemCard | IItemNote;

interface IItemLogin extends IVaultItemDefault {
   username: string;
   password: string;
   email: string;
}

interface IItemCard extends IVaultItemDefault {
   cardholder: string;
   ccnumber: string;
   expiration_month: string;
   expiration_year: string;
   cvv: string;
}

interface IItemNote extends IVaultItemDefault {
   note: string;
}

export interface IVaultItemDefault {
   $id: string;
   name: string;
   type: string;
   owner: string;
   $databaseId: string;
   $collectionId: string;
   $createdAt: string;
   $updatedAt: string;
}

const useVaultStore = create<IVaultStore>((set, get) => ({
   currentVault: "All Vault",
   items: [],
   loading: false,
   error: "",
   setCurrentVault: (val) => {
      set({ currentVault: val });
      get().getVaults();
   },
   currentParams: () => new URLSearchParams(window.location.search),
   async getVaults() {
      try {
         get().loading = true;
         const userId: string = useAuthStore.getState().user!.email;
         console.log(userId);

         const response = await databases.listDocuments(
            import.meta.env.VITE_DATABASE_ID,
            import.meta.env.VITE_ITEMS_COLLECTION_ID,
            [Query.orderDesc("$createdAt"), Query.equal("owner", userId)]
         );

         set({
            items: response.documents as unknown as IVaultItem[],
            loading: false,
         });
      } catch (error: any) {
         console.log(error.message);
         set({
            error: error.message,
            loading: false,
         });
      }
   },
   async addItem(data: IVaultItem) {
      const userId: string = useAuthStore.getState().user!.$id;

      await databases.createDocument(
         import.meta.env.VITE_DATABASE_ID,
         import.meta.env.VITE_ITEMS_COLLECTION_ID,
         ID.unique(),
         data,
         [
            Permission.read(Role.user(userId)),
            Permission.delete(Role.user(userId)),
            Permission.update(Role.user(userId)),
         ]
      );

      await get().getVaults();
   },
   async updateItem(data: IVaultItem, body: IVaultItem) {
      await databases.updateDocument(
         data.$databaseId,
         data.$collectionId,
         data.$id,
        body
      );

      await get().getVaults();
   },
   async deleteItem(data: IVaultItem) {
      await databases.deleteDocument(
         data.$databaseId,
         data.$collectionId,
         data.$id
      );

      await get().getVaults();
   },
}));

export default useVaultStore;
