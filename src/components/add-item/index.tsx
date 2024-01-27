import {
   Button,
   FormControl,
   FormErrorMessage,
   FormLabel,
   HStack,
   Select,
   Spinner,
   Text,
   VStack,
   useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Controller, FieldValues } from "react-hook-form";
import useLoading from "../../hooks/useLoading";
import useItemForm from "../../hooks/validation/createItemValidation";
import useAuthStore from "../../store/auth";
import useVaultStore, { IVaultItem } from "../../store/vault";
import itemType from "../../utils/constant/itemType";
import CardForm from "./CardForm";
import LoginForm from "./LoginForm";
import Note from "./Note";

interface IModalCreateItem {}

const ModalCreateItem: React.FC<IModalCreateItem> = () => {
   const { control, handleSubmit, watch, unregister } = useItemForm();
   const { loading, toggleLoadingOn, toggleLoadingOff } = useLoading();
   const { addItem } = useVaultStore();
   const { user } = useAuthStore();
   const [message, setMessage] = React.useState({ text: "", type: "" });
   const toast = useToast()

   const renderForm = () => {
      switch (watch("type")) {
         case "note":
            return <Note control={control} />;
         case "card":
            return <CardForm control={control} watch={watch} />;
         default:
            return <LoginForm control={control} />;
      }
   };

   const resetForm = () => {
      unregister();
   };

   const handleClose = () => {
      resetForm();
   };

   const onSubmit = async (data: FieldValues) => {
      toggleLoadingOn();
      try {
         data.owner = user!.email;
         // console.log(data, user);

         await addItem(data as IVaultItem);
         setMessage({ text: "Item added successfully", type: "success" });
         handleClose();
         toast({
            title: 'Salin.',
            description: "Berhasil Tambah.",
            status: 'success',
            duration: 1000,
            isClosable: true,
        })
      } catch (error: any) {
         // console.log(error);
         setMessage({ text: error.message, type: "error" });
      } finally {
         toggleLoadingOff();
      }
   };

   useEffect(() => {
      setMessage({ text: "", type: "" });
   }, []);

   return (
      <form className="px-4">
         <VStack spacing={"4"} pt={4}>
            <Controller
               control={control}
               defaultValue={"login"}
               name="type"
               rules={{ required: true, value: "login" }}
               render={({ field, fieldState }) => (
                  <FormControl isInvalid={!!fieldState?.error?.message}>
                     <FormLabel
                        fontWeight={"medium"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={1}
                     >
                        What type of item is this?
                     </FormLabel>
                     <Select {...field}>
                        {itemType.map((type) => (
                           <option key={type.value} value={type.value}>
                              {type.name}
                           </option>
                        ))}
                     </Select>
                     {!!fieldState?.error?.message && (
                        <FormErrorMessage>
                           {fieldState?.error?.message}
                        </FormErrorMessage>
                     )}
                  </FormControl>
               )}
            />

            {renderForm()}
         </VStack>
         <Text color={message.type === "success" ? "green.500" : "red.500"}>
            {message.text}
         </Text>
         <HStack my={"4"} justifyContent={"flex-end"}>
            <Button
               colorScheme="blue"
               mr={3}
               onClick={handleSubmit(onSubmit)}
               size={"sm"}
               disabled={loading}
            >
               Submit
               {loading && <Spinner />}
            </Button>
         </HStack>
      </form>
   );
};

export default ModalCreateItem;
