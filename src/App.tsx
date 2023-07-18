import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem as="aside" area="aside" paddingX="10px">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem as="main" area="main">
        <Heading>{gameQuery.platform?.name} Games</Heading>
        <HStack marginY="10px">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
