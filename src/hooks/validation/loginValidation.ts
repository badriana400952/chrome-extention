import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
   .object({
      email: yup.string().email().required("Email is required"),
      password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
   })
   .required();

interface ILoginInitialValue {
   email: string;
   password: string;
}

const useLoginForm = () => {
   const initialValue: ILoginInitialValue = {
      email: "",
      password: "",
   };

   return useForm<ILoginInitialValue>({
      defaultValues: initialValue,
      resolver: yupResolver(schema),
      reValidateMode: "onBlur",
      mode: "onBlur",
   });
};

export default useLoginForm;
