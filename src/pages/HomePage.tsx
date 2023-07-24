import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
  return (
    <Grid
      p="10px"
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
      <GridItem as="main" area="main">
        <VStack align={"flex-start"} p="0 0 10px 10px" spacing={"20px"}>
          <GameHeading />
          <HStack>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </VStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
