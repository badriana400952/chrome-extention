import {
   Box,
   Container,
   FormControl,
   FormErrorMessage,
   FormLabel,
   Input,
   Textarea
} from "@chakra-ui/react";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

interface IPropsNote {
   control: Control<FieldValues>;
}

const Note: React.FC<IPropsNote> = ({ control }) => {
   return (
      <>
      <Container maxW={"2xl"}  width={"full"} h={"full"}>
       
      <Box >
         <Controller
            control={control}
            defaultValue={""}
            name="name"
            rules={{ required: "Name is required!", value: "" }}
            render={({ field, fieldState }) => (
               <FormControl isInvalid={!!fieldState?.error?.message}>
                  <FormLabel
                     fontWeight={"medium"}
                     display={"flex"}
                     alignItems={"center"}
                     gap={1}
                  >
                     Name
                  </FormLabel>
                  <Input type="text" {...field} />
                  {!!fieldState?.error?.message && (
                     <FormErrorMessage>
                        {fieldState?.error?.message}
                     </FormErrorMessage>
                  )}
               </FormControl>
            )}
         />
         <Controller
            control={control}
            defaultValue={""}
            name="note"
            rules={{ value: "" }}
            render={({ field, fieldState }) => (
               <FormControl isInvalid={!!fieldState?.error?.message}>
                  <FormLabel
                     fontWeight={"medium"}
                     display={"flex"}
                     alignItems={"center"}
                     gap={1}
                  >
                     Note
                  </FormLabel>
                  <Textarea rows={4} {...field} />
                  {!!fieldState?.error?.message && (
                     <FormErrorMessage>
                        {fieldState?.error?.message}
                     </FormErrorMessage>
                  )}
               </FormControl>
            )}
         />
      </Box>
      </Container>
         </>
   );
};

export default Note;
