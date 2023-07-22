import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { useState } from "react";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem as="aside" area="aside" paddingX="10px">
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem as="main" area="main">
        <VStack align={"flex-start"} p="0 0 10px 10px" spacing={"20px"}>
          <GameHeading gameQuery={gameQuery} />
          <HStack>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectedSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </VStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
