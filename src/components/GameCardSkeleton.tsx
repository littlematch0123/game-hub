import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  console.log("abc");

  return (
    <Card>
      <Skeleton h="200px" w="600px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
