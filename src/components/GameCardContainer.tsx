import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Card
      _hover={{ transform: "scale(1.03)" }}
      transition=".15s transform ease-in"
      as="li"
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Card>
  );
};

export default GameCardContainer;
