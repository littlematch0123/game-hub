import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameStore from "../store";
export const NavBar = () => {
  const setPlatformId = useGameStore((s) => s.setPlatformId);
  const setGenreId = useGameStore((s) => s.setGenreId);
  const setSearchText = useGameStore((s) => s.setSearchText);
  const setSortOrder = useGameStore((s) => s.setSortOrder);

  return (
    <HStack as="header" p={2.5}>
      <Link
        style={{ flexShrink: 0 }}
        to="/"
        onClick={() => {
          setPlatformId(undefined);
          setGenreId(undefined);
          setSearchText("");
          setSortOrder("");
        }}
      >
        <Image src={logo} boxSize="54px" alt="logo" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
