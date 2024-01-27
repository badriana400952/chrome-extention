import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Card, Container, Flex, IconButton, Input, InputGroup, Text, useToast, } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FiEdit, FiEye, FiEyeOff } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useVaultStore from "../../store/vault";
const ItemLogin = ({itemData}: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const toast = useToast()
    const { deleteItem } = useVaultStore();
    const [message, setMessage] = React.useState({ text: "", type: "" });

    const onClose = () => {
        setIsOpen(false);
    };

    const onOpen = () => {
        setIsOpen(true);
    };
    const handleCopyClick = (value: string) => {
        navigator.clipboard.writeText(value);

        toast({
            title: 'Salin.',
            description: "Berhasil disalin.",
            status: 'success',
            duration: 1000,
            isClosable: true,
        })
    };

    const handleDelete = async () => {

        try {
            await deleteItem(itemData)
            setMessage({ text: "Item added successfully", type: "success" });
            toast({
                title: 'Salin.',
                description: "Berhasil dihapus.",
                status: 'success',
                duration: 1000,
                isClosable: true,
            })
            return window.history.back();

        } catch (error: any) {
            setMessage({ text: error.message, type: "error" });
        }
    }

    useEffect(() => {
        setMessage({ text: "", type: "" });
    }, []);
    const leastDestructiveRef = useRef(null);
return (
    <>
    <Box h={"100vh"} background={"#EDF2F7"}>

        <Flex justifyContent={"space-between"} fontSize={'xs'} alignItems={"center"} background={'#1F2937'} width={"100%"}>
            <Button background={'transparent'} fontSize={'xs'} color={'white'} _active={{ borderColor: "transparent" }} _hover={{ borderColor: "transparent" }}>
                <Link to={`/itemLists/${itemData?.type}`}>Back</Link>
            </Button>
            <Text background={'transparent'} color={'white'}>Login Item</Text>
            <Button background={'transparent'} fontSize={'xs'} color={'white'} _active={{ borderColor: "transparent" }} _hover={{ borderColor: "transparent" }}>
                <Link to={{ pathname: 'edit' }} state={{ itemData }}>Edit</Link>
            </Button>
        </Flex>
        <Container fontSize={"xs"} maxW="container.lg"  >
            <Text py="4" fontSize={'md'}>LOGIN INFORMATION</Text>
            <Box mt={2} m='auto'>
                <Card background={"white"} p="2">
                    <Text >Name</Text>
                    <Text >localhost</Text>
                </Card>

                <Card display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" mt={2} background="white" p="2">
                    <Box>
                        <Text>Username</Text>
                        <Text>{itemData!.email}</Text>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" height="30px" width="30px" onClick={() => handleCopyClick(itemData!.email)} style={{ cursor: 'pointer' }}>
                        <IoCopyOutline style={{ color: "blue", alignItems: "center", }} size={17} />
                    </Box>
                </Card>

                <Card display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"} mt={2} background={"white"} p="2">
                    <Box>
                        <Text >Password</Text>
                        <Input
                            p={0}
                            h="20px"
                            value={itemData!.password}
                            _focus={{ borderColor: "red" }}
                            _active={{ borderColor: "transparent" }}
                            borderColor="transparent"
                            _hover={{ borderColor: "transparent" }}
                            variant="unstyled"
                            type={visible ? "text" : "password"}
                            contentEditable={false}
                        />
                    </Box>
                    <Box >
                        <InputGroup _hover={{ borderColor: "transparent" }} borderColor={"transparent"}>

                            <Flex >
                                <IconButton _active={{ borderColor: "transparent" }} _hover={{ borderColor: "transparent" }}
                                    onClick={() => setVisible(!visible)}
                                    variant="ghost"
                                    aria-label="visible password"
                                    icon={visible ? <FiEyeOff color={'blue'} /> : <FiEye color={'blue'} />}
                                />
                                <IconButton _active={{ borderColor: "transparent" }} _hover={{ borderColor: "transparent" }}
                                    variant="ghost"
                                    onClick={() => handleCopyClick(itemData!.password)}
                                    aria-label="copy password"
                                    icon={<IoCopyOutline color={'blue'} />}
                                />
                            </Flex>
                        </InputGroup>
                    </Box>
                </Card>

                {/* <Card display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"} mt={5} background={"white"} p="2">
                        <Box>
                            <Text >localhost</Text>
                            <Text >localhost:5173</Text> 

                        </Box>
                        <Box >
                            <InputGroup _hover={{ borderColor: "transparent" }} borderColor={"transparent"}>

                                <Flex >
                                    <IconButton _active={{ borderColor: "transparent" }} _hover={{ borderColor: "transparent" }}
                                        onClick={() => setVisible(!visible)}
                                        variant="ghost"
                                        aria-label="visible password"
                                        icon={<CiShare1 color={'blue'} />}
                                    />
                                    <IconButton _active={{ borderColor: "transparent" }} _hover={{ borderColor: "transparent" }}
                                        variant="ghost"
                                        onClick={() => handleCopyClick(itemData!.email)}
                                        aria-label="copy password"
                                        icon={<IoCopyOutline color={'blue'} />}
                                    />
                                </Flex>
                            </InputGroup>
                        </Box>
                    </Card> */}
            </Box>

            <Box mt={8} pb={5}>
                <Card display={'flex'} _hover={{ cursor: "pointer" }} justifyContent={'start'} flexDirection={'row'} p={2} alignItems={'center'} gap={2} >
                    <FiEdit color={'blue'} />
                    <Button background={'transparent'} fontSize={'xs'} py={0} color={'blue'} _active={{ borderColor: "transparent" }} _hover={{ borderColor: "transparent" }}>fill</Button>
                </Card>

                <Card mt={2} display={'flex'} _hover={{ cursor: "pointer" }} justifyContent={'start'} flexDirection={'row'} p={2} alignItems={'center'} gap={2} >
                    <RiDeleteBin6Line color={'red'} />
                    <Button onClick={onOpen} _hover={{ background: "transparent" }} background={'transparent'} fontSize={'xs'} color={'red'}>Delete item</Button>
                        <AlertDialog
                            isOpen={isOpen}
                            leastDestructiveRef={leastDestructiveRef}
                            onClose={onClose}
                        >
                            <AlertDialogOverlay>
                                <AlertDialogContent>
                                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                        Delete Item
                                    </AlertDialogHeader>

                                    <AlertDialogBody>
                                        Are you sure you want to delete this item? This action cannot be undone.
                                    </AlertDialogBody>

                                    <AlertDialogFooter>
                                        <Button onClick={onClose}>
                                            Cancel
                                        </Button>
                                        <Button colorScheme="red" onClick={handleDelete} ml={3}>
                                            Delete
                                        </Button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialogOverlay>
                        </AlertDialog>
                    <Text color={message.type === "success" ? "green.500" : "red.500"}>
                        {message.text}
                    </Text>
                </Card>
            </Box>

        </Container>
        </Box>

    </>
)
}

export default ItemLogin
