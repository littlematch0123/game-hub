import {
  Alert,
  HStack,
  Heading,
  List,
  ListItem,
  Image,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
const GenreList = () => {
  const { error, genres } = useGenres();
  return (
    <>
      {error && <Alert status="error">{error}</Alert>}
      <Heading size="lg" marginBottom="10px">
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} p="6px">
            <HStack>
              <Image
                w="40px"
                h="40px"
                borderRadius="10px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
