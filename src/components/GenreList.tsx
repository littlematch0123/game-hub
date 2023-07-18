import {
  Alert,
  HStack,
  Heading,
  Image,
  Box,
  SkeletonCircle,
  Skeleton,
  Button,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenres, { Genre } from "../hooks/useGenres";
import genres from "../data/genres";

interface Props {
  selectedGenre: Genre | null;
  onSelectedGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { error, data, isLoading } = useGenres();
  const skeletons = new Array(genres.length).fill(0);
  return (
    <>
      <Box as="dl">
        <Heading as="dt" size="lg" marginY="10px">
          Genres
        </Heading>
        {error && <Alert status="error">{error}</Alert>}
        {isLoading &&
          skeletons.map((_s, i) => (
            <HStack as="dd" key={i} paddingY="4px">
              <SkeletonCircle />
              <Skeleton w="80px" height="14px" />
            </HStack>
          ))}
        {data.map((genre) => (
          <HStack as="dd" key={genre.id} paddingY="6px">
            <Image
              boxSize="36px"
              borderRadius="10px"
              objectFit="cover"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              whiteSpace="normal"
              textAlign="left"
              onClick={() => onSelectedGenre(genre)}
              variant="link"
              color="white.300"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
