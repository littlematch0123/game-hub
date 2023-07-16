import { Alert, ListItem, UnorderedList } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

function GameGrid() {
  const { error, games } = useGames();
  return (
    <>
      {error && <Alert status="error">{error}</Alert>}
      <UnorderedList>
        {games.map((game) => (
          <ListItem key={game.id}>{game.name}</ListItem>
        ))}
      </UnorderedList>
    </>
  );
}

export default GameGrid;
