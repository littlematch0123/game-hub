import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameStore from "../store";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const SearchInput = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [inputValue, setInputValue] = useState("");
  const setGenreId = useGameStore((state) => state.setGenreId);
  const setPlatformId = useGameStore((state) => state.setPlatformId);
  const setSearchText = useGameStore((state) => state.setSearchText);
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            if (params.slug) {
              setGenreId(undefined);
              setPlatformId(undefined);
            }
            navigate("/");
            setSearchText(inputValue);
            setInputValue("");
          }
        }}
        borderRadius="20px"
        placeholder="Search games..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
