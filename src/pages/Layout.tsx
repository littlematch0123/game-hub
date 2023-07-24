import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box as="main" p="10px">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
