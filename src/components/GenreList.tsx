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
import useGenres from "../hooks/useGenres";
import genres from "../data/genres";
import useGameStore from "../store";

const GenreList = () => {
  const genreId = useGameStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameStore((s) => s.setGenreId);
  const { error, data, isLoading } = useGenres();
  const skeletons = new Array(genres.length).fill(0);
  return (
    <>
      <Box as="dl">
        <Heading as="dt" size="lg" marginY="10px">
          Genres
        </Heading>
        {error && <Alert status="error">{error.message}</Alert>}
        {isLoading &&
          skeletons.map((_s, i) => (
            <HStack as="dd" key={i} padding="6px 0 6px 8px">
              <SkeletonCircle />
              <Skeleton w="80px" height="14px" />
            </HStack>
          ))}
        {data?.map((genre) => (
          <HStack
            as="dd"
            key={genre.id}
            padding="6px 0 6px 8px"
            bg={genreId === genre.id ? "teal.300" : "transparent"}
            borderRadius="20px"
          >
            <Image
              boxSize="36px"
              borderRadius="10px"
              objectFit="cover"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              whiteSpace="normal"
              textAlign="left"
              onClick={() => setGenreId(genre.id)}
              variant="link"
              color="white.300"
              fontWeight={genreId === genre.id ? "bold" : "normal"}
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
