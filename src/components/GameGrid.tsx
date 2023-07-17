import { Alert, SimpleGrid, Skeleton } from "@chakra-ui/react";
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
          xl: 5,
        }}
        p={2.5}
        spacing={10}
      >
        {isLoading &&
          skeletons.map((_s, i) => (
            <GameCardContainer>
              <GameCardSkeleton key={i} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
