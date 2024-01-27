import { Box, Checkbox, Container, Flex, Select, Stack, Text } from "@chakra-ui/react"
import Footer from "../Footer"
import NavSetting from "../NavSettings"
import { CiShare1 } from "react-icons/ci";

const AutoFillId = () => {
  return (
    <div>
      <NavSetting />
      <Container maxW={"container.2xl"} h={"100vh"} background={"#EDF2F7"} fontSize={"md"}>
        <Box py={1}>
          <Flex justifyContent={"space-between"} p={2} background={'gray.50'} mt={2} rounded={'lg'}>
            <Text >Auto-fill ID Settings</Text>
            <CiShare1 />
          </Flex>
          <Text p={1} fontSize={'xs'}>The auto-fill shorcut is: Ctrl+ShittL. Change this in the browser's settings</Text>
         
          <Box p={1} background={'gray.50'} mt={2} rounded={'lg'}>
            <Text p={1} fontSize={'xs'}>Show auto-fill menu on from fileds</Text>
            <Flex justifyContent={"space-between"} >
              <Stack spacing={3}>

                <Select  size={'md'}>
                  <option value='option1'>Off</option>
                  <option value='option2'>When filed is selected (on focus)</option>
                  <option value='option3'>When auto-fill icon is selected</option>
                </Select>

              </Stack>
            </Flex>
          </Box>

          <Text p={1} fontSize={'xs'}>Applies to all logged in accounts.</Text>
          <Text p={1} fontSize={'xs'}>Turn off your browser's built in password manager settings to avoid conflicts. Edit browser settings.</Text>

          <Flex justifyContent={"space-between"} p={2} background={'gray.50'} mt={2} rounded={'lg'}>
            <Text >Auto-fill on page load</Text>
            <Checkbox defaultChecked />
          </Flex>
          <Text p={1} fontSize={'xs'}>If a login form is detected, auto-fill when the web page loads. WARNING: Compromised or untrusted websites can exploit auto-fill on page load. Learn more about auto-fill.</Text>

          <Box p={1} background={'gray.50'} mt={2} rounded={'lg'}>
            <Text p={1} fontSize={'xs'}>Default autofill setting for login items</Text>
            <Flex justifyContent={"space-between"} >
              <Stack spacing={3}>

                <Select  size={'md'} disabled>
                  <option value='option2'>Auto-fill on page load</option>
                  <option value='option1'>Off</option>
                  <option value='option3'>When auto-fill icon is selected</option>
                </Select>

              </Stack>
            </Flex>
          </Box>
          <Text p={1} fontSize={'xs'}>You can turn off auto-fill on page load for individual login items from the item's Edit view.</Text>

          <Box p={1} background={'gray.50'} mt={2} rounded={'lg'}>
            <Text p={1} fontSize={'xs'}>Default URI match detection</Text>
            <Flex justifyContent={"space-between"} >
              <Stack spacing={3}>

                <Select  size={'md'} w={'257px'} >
                  <option value='option2'>Base domain</option>
                  <option value='option1'>Host</option>
                  <option value='option1'>Starts with</option>
                  <option value='option1'>Regular expresoin</option>
                  <option value='option1'>Exac</option>
                  <option value='option1'>Never</option>
                </Select>

              </Stack>
            </Flex>
          </Box>
          <Text p={1} fontSize={'xs'}>Choose the default way that URI match detection is handled for logins when performing actions such as auto-fill.</Text>
        </Box>
      </Container >
      <Footer />
    </div >
  )
}

export default AutoFillId
