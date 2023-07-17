import { Alert, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { error, games, isLoading } = useGames();
  const skeletons = new Array(20).fill(0);
  return (
    <>
      {error && <Alert status="error">{error}</Alert>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        p={2.5}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((_s, i) => (
            <GameCardContainer key={i}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
