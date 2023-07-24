import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameStore from "../store";
const GameHeading = () => {
  const platformId = useGameStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);
  const genreId = useGameStore((s) => s.gameQuery.genreId);
  const selectedGenre = useGenre(genreId);
  return (
    <Heading as="h1" size="2xl">
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  );
};

export default GameHeading;
