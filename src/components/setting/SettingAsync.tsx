import { Button, Container, HStack, Text, VStack } from "@chakra-ui/react"
import NavSetting from "../NavSettings"
import Footer from "../Footer"


const SettingAssync = () => {
  return (
    <div>
      <NavSetting />
      <Container maxW={"container.2xl"} h={"86vh"} background={"#EDF2F7"}>
      <VStack minH="100vh" align="center" justify="center">
          <HStack align="center" justifyContent="center" >
            <Button colorScheme="teal" w={'250px'}>Async fult now</Button>
          </HStack>
            <Text fontSize={'xs'}>Last async 1/24/24 11:03:20PM</Text>
        </VStack>
      </Container >
      <Footer />
    </div>
  )
}

export default SettingAssync
