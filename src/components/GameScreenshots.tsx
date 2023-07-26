import noImage from "../assets/no-image-placeholder.webp";
import { useParams } from "react-router-dom";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import getCroppedImageUrl from "../services/image-url";
const GameScreenshots = () => {
  const { slug } = useParams();
  const { data, isFetching, error } = useScreenshots(slug!);
  if (isFetching) <Spinner />;
  if (error || !data || data.length === 0) return;
  return (
    <SimpleGrid
      as="section"
      columns={{
        base: 1,
        md: 2,
      }}
      marginY="10px"
      spacing="10px"
    >
      {data?.map(({ id, image }, index) => (
        <Image
          width="100%"
          key={id}
          alt={`${slug || ""}-${index}`}
          src={getCroppedImageUrl(image)}
          fallbackSrc={noImage}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
