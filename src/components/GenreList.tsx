import {
  Alert,
  HStack,
  Heading,
  Image,
  Text,
  Box,
  SkeletonCircle,
  Skeleton,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenres from "../hooks/useGenres";
const GenreList = () => {
  const { error, data, isLoading } = useGenres();
  const skeletons = new Array(19).fill(0);
  return (
    <>
      <Box as="dl">
        <Heading as="dt" size="lg" marginBottom="10px">
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
          <HStack as="dd" key={genre.id} paddingY="4px">
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text color="gray.500">{genre.name}</Text>
          </HStack>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
