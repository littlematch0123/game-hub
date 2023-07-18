import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input
        value={inputValue}
        onBlur={() => onSearch(inputValue)}
        onChange={(e) => setInputValue(e.target.value)}
        borderRadius="20px"
        placeholder="Search games..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
