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
  selectedPlatformId?: number;
  onSelectedPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({
  selectedPlatformId,
  onSelectedPlatform,
}: Props) => {
  const { data, error, isLoading } = usePlatforms();
  const selectedPlatform = data?.find(
    (platform) => platform.id === selectedPlatformId
  );
  return (
    <>
      {error && <Alert status="error">{error.message}</Alert>}

      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {isLoading && (
            <MenuItem>
              <Spinner />
            </MenuItem>
          )}
          {data?.map((platform) => (
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
