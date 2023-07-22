import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { genreId, platformId } = gameQuery;
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const selectedGenre = genres?.find((genre) => genre.id === genreId);
  const selectedPlatform = platforms?.find(
    (platform) => platform.id === platformId
  );
  return (
    <Heading as="h1" size="2xl">
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  );
};

export default GameHeading;
