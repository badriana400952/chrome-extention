import {
   Box,
   Button,
   Container,
   FormControl,
   FormErrorMessage,
   HStack,
   Spinner,
   Text,
   VStack,
   useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Controller, FieldValues } from "react-hook-form";
import useLoading from "../../hooks/useLoading";
import useItemForm from "../../hooks/validation/createItemValidation";
import useVaultStore, { IVaultItem } from "../../store/vault";
import CardForm from "./CardForm";
import LoginForm from "./LoginForm";
import Note from "./Note";
import { useLocation,  useParams } from "react-router-dom";
interface IModalCreateItem { }

const ModalCreateItem: React.FC<IModalCreateItem> = () => {
   const { control, handleSubmit, watch, unregister, reset } = useItemForm();
   const { loading, toggleLoadingOn, toggleLoadingOff } = useLoading();
   const { updateItem } = useVaultStore();
   const [message, setMessage] = React.useState({ text: "", type: "" });
   const toast = useToast()
   const params = useParams()
   console.log("params", params)
   
   const lokasi = useLocation();
   const data = lokasi.state.itemData;
   console.log("data ini use location", data);
   useEffect(() => {
      reset(data);
   }, [])
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
   const onSubmit = async (values: FieldValues) => {
      toggleLoadingOn();
      try {
         console.log("values", values);
         
         await updateItem(data, values as IVaultItem);
         setMessage({ text: "Item added successfully", type: "success" });
         toast({
            title: 'Salin.',
            description: "Berhasil Edit.",
            status: 'success',
            duration: 1000,
            isClosable: true,
        })
         handleClose();
         window.history.back();
      } catch (error: any) {
         setMessage({ text: error.message, type: "error" });
      } finally {
         toggleLoadingOff();
      }
   };

   useEffect(() => {
      setMessage({ text: "", type: "" });
   }, []);

   return (
      <>
      <Container maxW={"2xl"} background={"#EDF2F7"} h={"100vh"}>

      <Box >
      <form >
         <VStack  >
            <Controller
               control={control}
               defaultValue={"login"}
               name="type"
               rules={{ required: true, value: "login" }}
               render={({  fieldState }) => (
                  <FormControl isInvalid={!!fieldState?.error?.message}>
                    
                   
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
         <HStack mt={5} justifyContent={"flex-end"}>
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
          
      </Box>
      </Container>
      </>
   );
};

export default ModalCreateItem;
