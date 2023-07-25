import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameStore from "../store";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
  const store = useGameStore();
  const navigate = useNavigate();
  return (
    <HStack as="header" p={2.5}>
      <Image
        onClick={() => {
          store.reset();
          navigate("/");
        }}
        src={logo}
        boxSize="54px"
        alt="logo"
        objectFit="cover"
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
