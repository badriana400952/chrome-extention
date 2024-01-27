import { Box, Button, Card, Container, Flex, Input, Text, Textarea, useToast, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, } from "@chakra-ui/react";

import React, { useEffect, useRef, useState } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useVaultStore from "../../store/vault";
const ItemNote = ({ itemData }: any) => {

    const [isOpen, setIsOpen] = useState(false);
    const { deleteItem } = useVaultStore();
    const [message, setMessage] = React.useState({ text: "", type: "" });
    const toast = useToast()
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
    const onClose = () => {
        setIsOpen(false);
    };

    const onOpen = () => {
        setIsOpen(true);
    };

    const leastDestructiveRef = useRef(null);
    return (

        <>
        <Box h={"100vh"} background={"#EDF2F7"}>
            <Flex justifyContent={"space-between"} fontSize={'xs'} alignItems={"center"} background={'#1F2937'} width={"100%"}>
                <Button background={'transparent'} fontSize={'xs'} color={'white'} _active={{ borderColor: "transparent" }} _hover={{ borderColor: "transparent" }}>
                    <Link to={`/itemLists/${itemData?.type}`}>Back</Link>
                </Button>
                <Text background={'transparent'} color={'white'}>Note Item</Text>
                <Button background={'transparent'} fontSize={'xs'} color={'white'} _active={{ borderColor: "transparent" }} _hover={{ borderColor: "transparent" }}>
                    <Link to={{ pathname: 'edit' }} state={{ itemData }}>Edit</Link>
                </Button>
            </Flex>
            <Container fontSize={"xs"} maxW="container.lg" h={"full"}>
                <Text py="4" fontSize={'md'}>NOTE INFORMATION</Text>
                <Box mt={2} m='auto'>
                    <Card background={"white"} p="2">
                        <Text >Name</Text>
                        <Input
                            p={0}
                            h="20px"
                            value={itemData!.name}
                            _focus={{ borderColor: "red" }}
                            _active={{ borderColor: "transparent" }}
                            borderColor="transparent"
                            _hover={{ borderColor: "transparent" }}
                            variant="unstyled"
                            contentEditable={false}
                        />
                    </Card>

                    <Card display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" mt={2} background="white" p="2">
                        <Box>
                            <Text>Username</Text>
                            <Textarea value={itemData.note} minW={"250px"} border="none" p={0} _focus={{ borderColor: "red" }} fontSize={"xs"} _active={{ borderColor: "transparent" }} borderColor="transparent" _hover={{ borderColor: "transparent" }} variant="unstyled" />
                        </Box>
                    </Card>
                </Box>

                <Box mt={8} pb={5}>
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

            </Container>
            </Box>
        </>
    )
}

export default ItemNote
