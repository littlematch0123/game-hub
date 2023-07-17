import {
  Alert,
  HStack,
  Heading,
  List,
  ListItem,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenres from "../hooks/useGenres";
const GenreList = () => {
  const { error, data } = useGenres();
  return (
    <Box p="10px">
      <Heading size="lg" marginBottom="10px">
        Genres
      </Heading>
      {error && <Alert status="error">{error}</Alert>}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} p="6px">
            <HStack>
              <Image
                w="40px"
                h="40px"
                borderRadius="10px"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text color="gray.500">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
