import {
   Container,
   Flex,
   FormControl,
   FormErrorMessage,
   FormLabel,
   HStack,
   IconButton,
   Input,
   InputGroup,
   InputRightElement,
   Select,
   Text
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import {
   Control,
   Controller,
   FieldValues,
   UseFormWatch,
} from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MONTHS } from "../../utils/constant/months";
import { detectCreditCardBrand } from "../../utils/detectCardBrand";

interface IPropsCardForm {
   control: Control<FieldValues, any>;
   watch: UseFormWatch<FieldValues>;
}

const CardForm: React.FC<IPropsCardForm> = ({ control, watch }) => {
   const [visibleNumber, setVisibleNumber] = useState(false);
   const [visibleCVV, setVisibleCVV] = useState(false);

   const getBrand = useMemo(() => {
      const brand = detectCreditCardBrand(watch("ccnumber"));

      return brand;
   }, [watch("ccnumber")]);

   return (
      <Container  backgroundColor={"gray.50"} background={"#EDF2F7"}>
         <Flex w={"full"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
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
                     <Input type="text" width={"full"} {...field} backgroundColor={"gray.50"}  />
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
               name="cardholder"
               rules={{ required: "Cardholder Name is required!", value: "" }}
               render={({ field, fieldState }) => (
                  <FormControl isInvalid={!!fieldState?.error?.message}>
                     <FormLabel
                        fontWeight={"medium"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={1}
                     >
                        Cardholder Name
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
               name="ccnumber"
               rules={{
                  required: "Credit Card Number is required!",
                  value: "",
                  minLength: {
                     value: 16,
                     message: "Credit Card length should be 16",
                  },
                  maxLength: 16,
               }}
               render={({ field, fieldState }) => (
                  <FormControl
                     isInvalid={!!fieldState?.error?.message}
                     w={"full"}
                  >
                     <FormLabel
                        fontWeight={"medium"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={1}
                     >
                        Credit Card Number
                     </FormLabel>
                     <HStack>
                        <InputGroup>
                           <Input
                              type={visibleNumber ? "text" : "password"}
                              {...field} backgroundColor={"gray.50"} 
                              onChange={(e) =>
                                 field.onChange(
                                    e.target.value.replace(/[^\d]/g, "")
                                 )
                              }
                              w={"full"}
                              maxLength={16}
                           />
                           <InputRightElement>
                              <IconButton
                                 onClick={() =>
                                    setVisibleNumber(!visibleNumber)
                                 }
                                 variant="ghost"
                                 aria-label="visible password"
                                 icon={visibleNumber ? <FiEyeOff /> : <FiEye />}
                              />
                           </InputRightElement>
                        </InputGroup>
                        {getBrand !== "UNKNOWN" && <Text>{getBrand}</Text>}
                     </HStack>
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
               name="expiration_month"
               rules={{
                  required: "Expiration month is required!",
                  value: "01",
               }}
               render={({ field, fieldState }) => (
                  <FormControl
                     isInvalid={!!fieldState?.error?.message}
                     w={"full"}
                  >
                     <FormLabel
                        fontWeight={"medium"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={1}
                     >
                        Expiration Month
                     </FormLabel>
                     <Select {...field} backgroundColor={"gray.50"}  w={"full"}>
                        <option value={""}>--Select Month--</option>
                        {MONTHS.map((item, i) => (
                           <option value={item.value} key={i}>
                              {item.value} - {item.name}
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
            <Controller
               control={control}
               defaultValue={""}
               name="expiration_year"
               rules={{
                  required: "Expiration year is required!",
                  value: "",
               }}
               render={({ field, fieldState }) => (
                  <FormControl
                     isInvalid={!!fieldState?.error?.message}
                     w={"full"}
                  >
                     <FormLabel
                        fontWeight={"medium"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={1}
                     >
                        Expiration Year
                     </FormLabel>
                     <Input
                        type="text"
                        {...field} backgroundColor={"gray.50"} 
                        onChange={(e) =>
                           field.onChange(e.target.value.replace(/[^\d]/g, ""))
                        }
                        w={"full"}
                        maxLength={4}
                     />
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
               name="cvv"
               rules={{
                  value: "",
               }}
               render={({ field, fieldState }) => (
                  <FormControl isInvalid={!!fieldState?.error?.message} w={"full"}>
                     <FormLabel
                        fontWeight={"medium"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={1}
                     >
                        Security Code (CVV)
                     </FormLabel>
                     <InputGroup>
                        <Input
                           type={visibleCVV ? "text" : "password"}
                           {...field} backgroundColor={"gray.50"} 
                           onChange={(e) =>
                              field.onChange(e.target.value.replace(/[^\d]/g, ""))
                           }
                           w={"full"}
                           maxLength={4}
                        />
                        <InputRightElement>
                           <IconButton
                              onClick={() => setVisibleCVV(!visibleCVV)}
                              variant="ghost"
                              aria-label="visible password"
                              icon={visibleCVV ? <FiEyeOff /> : <FiEye />}
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
         </Flex>
      </Container>
   );
};

export default CardForm;
