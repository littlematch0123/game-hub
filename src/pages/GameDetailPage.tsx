import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { error, isLoading, data } = useGame(slug!);
  console.log("data", error, slug, data);
  if (isLoading) return <Spinner m="10px" />;
  if (error || !data) throw error;
  const { name, description_raw } = data;
  return (
    <>
      <Heading marginY="10px">{name}</Heading>
      <Text>{description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
