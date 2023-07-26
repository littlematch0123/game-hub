import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, Spinner } from "@chakra-ui/react";
const GameTextDetails = () => {
  const { slug } = useParams();
  const { error, isLoading, data } = useGame(slug!);
  if (isLoading) return <Spinner m="10px" />;
  if (error || !data) throw error;
  const { name, description_raw } = data;
  return (
    <Box>
      <Heading marginY="10px">{name}</Heading>
      <ExpandableText fontSize="lg">{description_raw}</ExpandableText>
      <GameAttributes game={data} />
    </Box>
  );
};

export default GameTextDetails;
