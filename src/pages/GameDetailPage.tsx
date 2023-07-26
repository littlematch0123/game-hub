import { Box, SimpleGrid } from "@chakra-ui/react";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
import GameTextDetails from "../components/GameTextDetails";

const GameDetailPage = () => {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={"10px"}
    >
      <GameTextDetails />
      <Box>
        <GameTrailer />
        <GameScreenshots />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
