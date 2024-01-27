import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup
//    .object({
//       email: yup.string().email().required("Email is required"),
//       password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
//    })
//    .required();

// enum EItemType {
//    card = "card",
//    login = "login",
//    note = "note",
// }

// interface IItemValidation {
//    type: EItemType;

// }

const useItemForm = () => {
   return useForm({
      reValidateMode: "onBlur",
      mode: "onBlur",
      shouldUnregister: true,
   });
};

export default useItemForm;
