import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { genreId, platformId } = gameQuery;
  const selectedGenre = useGenre(genreId);
  const selectedPlatform = usePlatform(platformId);
  return (
    <Heading as="h1" size="2xl">
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  );
};

export default GameHeading;
