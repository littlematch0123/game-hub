import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" p={2.5}>
      <Image src={logo} boxSize="60px" alt="logo" />
      <ColorModeSwitch />
    </HStack>
  );
};
