import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <Grid
      p="10px"
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "180px 1fr",
      }}
    >
      <GridItem as="nav" area="nav">
        <NavBar />
      </GridItem>
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
}

export default App;
