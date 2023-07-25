import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import useGameStore from "../store";
const SearchTextTag = () => {
  const setSearchText = useGameStore((s) => s.setSearchText);
  const searchText = useGameStore((s) => s.gameQuery.searchText);
  if (!searchText) return;
  return (
    <Tag
      size="lg"
      onClick={() => {
        setSearchText("");
      }}
    >
      <TagLabel>{searchText}</TagLabel>
      <TagCloseButton />
    </Tag>
  );
};

export default SearchTextTag;
