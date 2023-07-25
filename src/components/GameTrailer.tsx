import { useParams } from "react-router-dom";
import useTrailers from "../hooks/useTrailers";
import { Box, Spinner } from "@chakra-ui/react";
const GameTrailer = () => {
  const { slug } = useParams();
  const { data: details, isFetching, error } = useTrailers(slug!);
  if (isFetching) <Spinner />;
  if (error || !details || details.length === 0) return;
  const { data, preview } = details[0];
  return (
    <Box as="section" marginY="10px">
      <video width="100%" controls poster={preview}>
        <source src={data[480]} type="video/mp4" />
      </video>
    </Box>
  );
};

export default GameTrailer;
