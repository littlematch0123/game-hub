import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";
import { Box, GridItem, HStack, Show, SimpleGrid } from "@chakra-ui/react";
import SearchTextTag from "../components/SearchTextTag";

const HomePage = () => {
  return (
    <SimpleGrid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "180px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem as="aside" area="aside" paddingX="10px">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem as="section" area="main">
        <Box as="header" paddingX="10px">
          <GameHeading />
          <HStack wrap="wrap" marginY="16px">
            <PlatformSelector />
            <SortSelector />
            <SearchTextTag />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </SimpleGrid>
  );
};

export default HomePage;
