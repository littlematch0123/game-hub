import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  const { name, background_image } = game;

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <Heading size="lg">{name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
