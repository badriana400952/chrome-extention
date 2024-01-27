import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Card, Container, Flex, IconButton, Input, InputGroup, Text, useToast, } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";

import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useVaultStore from "../../store/vault";
const ItemCard = ({ itemData }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const toast = useToast()
    const { deleteItem } = useVaultStore();
    const [message, setMessage] = React.useState({ text: "", type: "" });

    console.log("ini item data", itemData)
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
    const onClose = () => {
        setIsOpen(false);
    };

    const onOpen = () => {
        setIsOpen(true);
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
                    <Text background={'transparent'} color={'white'}>Card Item</Text>
                    <Button background={'transparent'} fontSize={'xs'} color={'white'} _active={{ borderColor: "transparent" }} _hover={{ borderColor: "transparent" }}>
                        <Link to={{ pathname: 'edit' }} state={{ itemData }}>Edit</Link>
                    </Button>
                </Flex>
                <Container fontSize={"xs"} maxW="container.lg" >
                    <Text py="4" fontSize={'md'}>CARD INFORMATION</Text>
                    <Box mt={2} m='auto' pb={7}>
                        <Card background={"white"} p="2">
                            <Text >Name</Text>
                            <Text >{itemData.name}</Text>
                        </Card>

                        <Card display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" mt={2} background="white" p="2">
                            <Box>
                                <Text>Cardholder name</Text>
                                <Text>{itemData.name}</Text>
                            </Box>
                            <Box display="flex" justifyContent="center" alignItems="center" height="30px" width="30px" onClick={() => handleCopyClick(itemData!.email)} style={{ cursor: 'pointer' }}>
                                <IoCopyOutline style={{ color: "blue", alignItems: "center", }} size={17} />
                            </Box>
                        </Card>

                        <Card display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"} mt={2} background={"white"} p="2">
                            <Box>
                                <Text >Number</Text>
                                <Input fontSize={'xs'}
                                    p={0}
                                    h="20px"
                                    value={itemData.ccnumber}
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

                        <Card display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" mt={2} background="white" p="2">
                            <Box>
                                <Text>Brand</Text>
                                <Text>Visa</Text>
                            </Box>
                        </Card>
                        <Card display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" mt={2} background="white" p="2">
                            <Box>
                                <Text>Expiration</Text>
                                <Text>{itemData.expiration_month} / {itemData.expiration_year}</Text>
                            </Box>
                        </Card>
                        <Card display={"flex"} justifyContent={"space-between"} alignItems={"center"} flexDirection={"row"} mt={2} background={"white"} p="2">
                            <Box>
                                <Text >Security Code</Text>
                                <Input fontSize={'xs'}
                                    p={0}
                                    h="20px"
                                    value={itemData.cvv}
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

                    </Box>

                    <Box mt={8}>
                        {/* <Card display={'flex'} _hover={{ cursor: "pointer" }} justifyContent={'start'} flexDirection={'row'} p={2} alignItems={'center'} gap={2} >
                        <FiEdit color={'blue'} />
                        <Text color={'blue'}>Auto-fill</Text>
                    </Card> */}

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
                        </Card>
                        <Text color={message.type === "success" ? "green.500" : "red.500"}>
                            {message.text}
                        </Text>
                    </Box>
                    {/* <Box my={8} w={'100%'} h={'80px'}>
                    <Text>Card Card</Text>
                    <Text>Created: Jan 23, 2024, 9:19:30 PM</Text>
                </Box> */}
                </Container>
            </Box>
        </>
    )
}

export default ItemCard
