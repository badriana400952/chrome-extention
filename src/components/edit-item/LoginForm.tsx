import {
   Container,
   FormControl,
   FormErrorMessage,
   FormLabel,
   HStack,
   IconButton,
   Input,
   InputGroup,
   InputRightElement
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
interface IPropsLoginForm {
   control: Control<any>;
}

const LoginForm: React.FC<IPropsLoginForm> = ({ control }) => {
   const [visible, setVisible] = useState(false);

   return (
      <>
         <Container  fontSize={"xs"} maxW="container.2xl" background={"#EDF2F7"}  width={"100%"} >
               <HStack alignItems={"baseline"} justifyContent={"center"} flexDirection={"column"}>
                  <Controller
                     defaultValue={""}
                     control={control}
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
                           <Input type="text" {...field} backgroundColor={"gray.50"}  background={"gray.50"} />
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
                     name="email"
                     rules={{
                        required: "Email is required!",
                        value: "",
                        pattern: {
                           value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                           message: "Invalid email address!",
                        },
                     }}
                     render={({ field, fieldState }) => (
                        <FormControl isInvalid={!!fieldState?.error?.message}>
                           <FormLabel
                              fontWeight={"medium"}
                              display={"flex"}
                              alignItems={"center"}
                              gap={1}
                           >
                              Email
                           </FormLabel>
                           <Input type="email" {...field} backgroundColor={"gray.50"}  />
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
                     name="username"
                     rules={{ required: "username is required", value: "" }}
                     render={({ field, fieldState }) => (
                        <FormControl isInvalid={!!fieldState?.error?.message}>
                           <FormLabel
                              fontWeight={"medium"}
                              display={"flex"}
                              alignItems={"center"}
                              gap={1}
                           >
                              Username
                           </FormLabel>
                           <Input type="text" {...field} backgroundColor={"gray.50"}  />
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
                     name="password"
                     rules={{ required: "Password is required", value: "" }}
                     render={({ field, fieldState }) => (
                        <FormControl isInvalid={!!fieldState?.error?.message}>
                           <FormLabel
                              fontWeight={"medium"}
                              display={"flex"}
                              alignItems={"center"}
                              gap={1}
                           >
                              Password
                           </FormLabel>
                           <InputGroup>
                              <Input
                                 type={visible ? "text" : "password"}
                                 {...field} backgroundColor={"gray.50"} 
                              />
                              <InputRightElement>
                                 <IconButton
                                    onClick={() => setVisible(!visible)}
                                    isRound
                                    variant={"ghost"}
                                    aria-label="Search database"
                                    icon={visible ? <FiEyeOff /> : <FiEye />}
                                 />
                              </InputRightElement>
                           </InputGroup>
                           {!!fieldState?.error?.message && (
                              <FormErrorMessage>
                                 {fieldState?.error?.message}
                              </FormErrorMessage>
                           )}
                        </FormControl>
                     )}
                  />
               </HStack>
         </Container>

      </>
   );
};

export default LoginForm;
