import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <>
      <Skeleton h="200px" w="600px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </>
  );
};

export default GameCardSkeleton;
