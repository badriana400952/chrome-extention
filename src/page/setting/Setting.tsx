/* eslint-disable react-refresh/only-export-components */
import { Button, Center, Container, Spinner, Text } from "@chakra-ui/react"
import Footer from "../../components/Footer"
import NavSetting from "../../components/NavSettings"
import { Link } from "react-router-dom";
import { dataSettingManage } from "../../components/icons";
import useAuthStore from "../../store/auth";
import useLoading from "../../hooks/useLoading";




const Setting = () => {
  const { logout } = useAuthStore();
  const { loading, toggleLoadingOff, toggleLoadingOn } = useLoading();
  const logoutHandle = async () => {
    toggleLoadingOn();
    try {
      await logout();
      toggleLoadingOff();

    } catch (error: any) {
      toggleLoadingOff();
    }
  }
  return (
    <>
      <NavSetting />
      <Container maxW={"container.2xl"}  h={"86vh"} background={"#EDF2F7"}>
        <Text p={1}>MANAGE</Text>
        {
          dataSettingManage.map((d, i) => (
            <div key={i} className="shadow-sm bg-gray-50 types rounded-lg cursor-pointer hover:bg-gray-200 mb-2 border-1 border-gray-400">
              <Link to={d.path}>
                <div className="p-2 flex items-center gap-2">
                  <p className=" text-sm">{d.name}</p>
                  <p className="grow text-right text-sm">{">"}</p>
                </div>
              </Link>
            </div>
          ))
        }
        <Center>
          <Button background="#1F2937" color={"white"} mt={5} width="200px" onClick={logoutHandle}> {loading ? <Spinner /> : "Logout"}</Button>
        </Center>

      </Container >
      <Footer />
    </>
  )
}

export default Setting
