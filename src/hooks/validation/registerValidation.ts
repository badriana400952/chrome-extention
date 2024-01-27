import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
   .object({
      email: yup.string().email().required("Email is required"),
      name: yup.string().required("Name is required"),
      password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
      confirmPassword: yup.string().required("Please confirm your password"),
   })
   .required();

interface IRegisterInitialValue {
   email: string;
   name: string;
   password: string;
   confirmPassword: string;
}

const useRegisterForm = () => {
   const initialValue: IRegisterInitialValue = {
      confirmPassword: "",
      email: "",
      name: "",
      password: "",
   };

   return useForm<IRegisterInitialValue>({
      defaultValues: initialValue,
      resolver: yupResolver(schema),
      reValidateMode: "onBlur",
      mode: "onBlur",
   });
};

export default useRegisterForm;
