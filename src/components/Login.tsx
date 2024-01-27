import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth";
import useLoginForm from "../hooks/validation/loginValidation";
import { useCallback, useState } from "react";
import useLoading from "../hooks/useLoading";
import {
   Box,
   Button,
   Container,
   Divider,
   FormControl,
   FormErrorMessage,
   FormHelperText,
   FormLabel,
   IconButton,
   Input,
   InputGroup,
   InputRightElement,
   Spinner,
   Text,
   useToast,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
   const navigate = useNavigate();
   const { login, isLogin } = useAuthStore();
   const { control, handleSubmit } = useLoginForm();
   const { loading, toggleLoadingOff, toggleLoadingOn } = useLoading();
   const [visible, setVisible] = useState(false);
   const [error, setError] = useState("");
   const toast = useToast()
   const loginHandle = useCallback(async (data: any) => {
      toggleLoadingOn();
      try {
         await login(data.email, data.password);
         navigate("/");
         toggleLoadingOff();
         toast({
            title: 'Salin.',
            description: "Login Berhasil.",
            status: 'success',
            duration: 1000,
            isClosable: true,
        })
      } catch (error: any) {
         toggleLoadingOff();
         setError(error.message);
      }
   }, []);

   const location = useLocation();

   if (isLogin) {
      return <Navigate to={location.state?.from?.pathname || "/"} replace />;
   }

   return (
      <Box w={"full"} minH={"100svh"} >
         <Container centerContent pt={"6"}>
            <Text fontSize={"large"} textAlign={"center"}>
               Log in or create a new account to access your secure vault.
            </Text>

            <Box
               w={"full"}
               rounded={"md"}
               mx={"auto"}
               mt={"12"}
               bgColor={"white"}
               p={"5"}
            >
               <form>
                  <Box
                     display={"flex"}
                     flexDirection={"column"}
                     w={"full"}
                     gap={"3"}
                  >
                     <Controller
                        control={control}
                        name="email"
                        render={({ field, fieldState }) => (
                           <FormControl
                              isInvalid={!!fieldState?.error?.message}
                           >
                              <FormLabel
                                 fontWeight={"bold"}
                                 display={"flex"}
                                 alignItems={"center"}
                                 gap={1}
                              >
                                 Email address{" "}
                                 <Text fontWeight={"light"} fontSize={"xs"}>
                                    (required)
                                 </Text>
                              </FormLabel>
                              <Input type="email" {...field} />
                              {!!fieldState?.error?.message ? (
                                 <FormErrorMessage>
                                    {fieldState?.error?.message}
                                 </FormErrorMessage>
                              ) : (
                                 <FormHelperText>
                                    You will use your email address to login
                                 </FormHelperText>
                              )}
                           </FormControl>
                        )}
                     />
                     <Controller
                        control={control}
                        name="password"
                        render={({ field, fieldState }) => (
                           <FormControl
                              isInvalid={!!fieldState?.error?.message}
                           >
                              <FormLabel
                                 fontWeight={"bold"}
                                 display={"flex"}
                                 alignItems={"center"}
                                 gap={1}
                              >
                                 Password
                              </FormLabel>
                              <InputGroup>
                                 <Input
                                    type={visible ? "text" : "password"}
                                    {...field}
                                 />
                                 <InputRightElement>
                                    <IconButton
                                       onClick={() => setVisible(!visible)}
                                       variant="ghost"
                                       aria-label="visible password"
                                       icon={visible ? <FiEyeOff /> : <FiEye />}
                                    />
                                 </InputRightElement>
                              </InputGroup>
                              {!!fieldState?.error?.message ? (
                                 <FormErrorMessage>
                                    {fieldState?.error?.message}
                                 </FormErrorMessage>
                              ) : (
                                 <FormHelperText>
                                    8 character minimum including number, letter
                                    and symbols{" "}
                                 </FormHelperText>
                              )}
                           </FormControl>
                        )}
                     />
                     <Text>{error}</Text>
                     <Button
                        colorScheme="blue"
                        onClick={handleSubmit(loginHandle)}
                     >
                        {loading ? <Spinner /> : "Login"}
                     </Button>
                  </Box>
               </form>
               <Divider my={"4"} borderWidth={"1px"} borderColor={"gray.300"} />
               {/* <HStack fontSize={"sm"} spacing={1}>
                  <Text>Don't have an account?</Text>
                  <Link to={"/auth/register"}>
                     <Text
                        color="blue.600"
                        _hover={{ textDecoration: "underline" }}
                     >
                        Create account
                     </Text>
                  </Link>
               </HStack> */}
            </Box>
         </Container>
      </Box>
   );
};

export default Login;
