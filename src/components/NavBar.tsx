import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
export const NavBar = () => {
  return (
    <HStack p={2.5}>
      <Image src={logo} boxSize="60px" alt="logo" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
