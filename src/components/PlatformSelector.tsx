import {
  Alert,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameStore from "../store";
const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();
  const setPlatformId = useGameStore((s) => s.setPlatformId);
  const platformId = useGameStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);
  return (
    <>
      {error && <Alert status="error">{error.message}</Alert>}

      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
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
              onClick={() => setPlatformId(platform.id)}
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
