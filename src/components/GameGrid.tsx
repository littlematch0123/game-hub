import { Alert, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
function GameGrid({ gameQuery }: Props) {
  const { error, data, isLoading } = useGames(gameQuery);
  const skeletons = new Array(20).fill(0);
  if (error) return <Alert status="error">{error}</Alert>;
  return (
    <SimpleGrid
      as="ul"
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      p="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((_s, i) => (
          <GameCardContainer key={i}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
