import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { genre, platform } = gameQuery;
  return (
    <Heading as="h1" size="2xl">
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
