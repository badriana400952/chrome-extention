import { ID, account } from "../appwrite";
import { create } from "zustand";

export interface IUser {
   $id: string;
   $createdAt: string;
   $updatedAt: string;
   email: string;
}

interface IRegisterParam {
   email: string;
   name: string;
   password: string;
}

interface IAuthStore {
   isLogin: boolean;
   user: IUser | null;
   login: (email: string, password: string) => Promise<void>;
   register: (param: IRegisterParam) => Promise<any>;
   checkAuth: () => void;
   logout: () => Promise<any>;
}

const useAuthStore = create<IAuthStore>((set) => ({
   isLogin: false,
   user: null,
   login: async (email, password) => {
      await account.createEmailSession(email, password);
      const user = await account.get();

      set({ isLogin: true, user: user as unknown as IUser });
   },
   register: async ({ email, name, password }) => {
      return await account.create(ID.unique(), email, password, name);
   },
   checkAuth: () => {
      account
         .get()
         .then((val) => {
            set({ isLogin: true, user: val });
         })
         .catch((error: any) => {
            console.log(error);
            
            set({ isLogin: false, user: null });
         });
   },
   logout: async () => {
      await account.deleteSessions();
      set({ isLogin: false, user: null });
   },
}));

export default useAuthStore;
