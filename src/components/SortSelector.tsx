import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  selectedSortOrder: string;
  onSelectedSortOrder: (sortOrder: string) => void;
}
const SortSelector = ({ selectedSortOrder, onSelectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", slug: "Relevance" },
    { value: "-added", slug: "Date added" },
    { value: "name", slug: "Name" },
    { value: "-released", slug: "Release date" },
    { value: "-metacritic", slug: "Popularity" },
    { value: "-rating", slug: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSortOrder?.slug || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map(({ value, slug }) => (
            <MenuItem onClick={() => onSelectedSortOrder(value)} key={slug}>
              {slug}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
