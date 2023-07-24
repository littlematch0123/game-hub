import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <HStack as="header" p={2.5}>
      <Link style={{ flexShrink: 0 }} to="/">
        <Image src={logo} boxSize="54px" alt="logo" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
