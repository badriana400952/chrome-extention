import { Container, HStack, Text, VStack } from "@chakra-ui/react"
import Footer from "../Footer"
import NavSetting from "../NavSettings"


const Follders = () => {
  return (
    <div>
      <NavSetting />
      <Container maxW={"container.2xl"} h={"86vh"} background={"#EDF2F7"}>
        <VStack minH="100vh" align="center" justify="center">
          <HStack align="center" justifyContent="center" p={4}>
            <Text>There are folder to list</Text>
          </HStack>
        </VStack>
      </Container >
      <Footer />
    </div>
  )
}

export default Follders
