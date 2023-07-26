import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Box, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box as="main" p="10px">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default Layout;
