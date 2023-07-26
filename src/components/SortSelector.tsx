import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import useGameStore from "../store";
const SortSelector = () => {
  const sortOrders = [
    { value: "", slug: "Relevance" },
    { value: "-added", slug: "Date added" },
    { value: "name", slug: "Name" },
    { value: "-released", slug: "Release date" },
    { value: "-metacritic", slug: "Popularity" },
    { value: "-rating", slug: "Average rating" },
  ];
  const setSortOrder = useGameStore((s) => s.setSortOrder);
  const sortOrder = useGameStore((s) => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Order by: {currentSortOrder?.slug || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map(({ value, slug }) => (
            <MenuItem onClick={() => setSortOrder(value)} key={slug}>
              {slug}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
