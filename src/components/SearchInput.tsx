import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useGameStore from "../store";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const setSearchText = useGameStore((state) => state.setSearchText);
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input
        value={inputValue}
        onBlur={() => setSearchText(inputValue)}
        onChange={(e) => setInputValue(e.target.value)}
        borderRadius="20px"
        placeholder="Search games..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
