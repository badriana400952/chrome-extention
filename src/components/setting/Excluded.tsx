import { Container, Flex, Text } from "@chakra-ui/react";
import { IoAddCircleOutline } from "react-icons/io5";
import Footer from "../Footer";
import NavSetting from "../NavSettings";


const Excluded = () => {
  return (
    <div>
      <NavSetting />
      <Container maxW={"container.2xl"} h={"86vh"} background={"#EDF2F7"}>
        <Text p={2} color={'gray'} fontSize={'xs'}>Bitwarden will not ask to save login details for these domains for all logged in accounts. You must refresh the page for changes to take effect.</Text>
        <Flex justifyContent={"start"} align={"center"} gap={2} p={2} background={'gray.50'} mt={2} rounded={'lg'}>
          <IoAddCircleOutline />
          <Text >New URI</Text>
        </Flex>


      </Container >
      <Footer />
    </div>
  )
}

export default Excluded
