import {
  Alert,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
interface Props {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();
  return (
    <>
      {error && <Alert status="error">{error}</Alert>}

      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform ? selectedPlatform.name : "Platforms"}
        </MenuButton>
        <MenuList>
          {isLoading && (
            <MenuItem>
              <Spinner />
            </MenuItem>
          )}
          {data.map((platform) => (
            <MenuItem
              onClick={() => onSelectedPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
