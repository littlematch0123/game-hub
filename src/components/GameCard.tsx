import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  const { name, background_image: img, parent_platforms } = game;

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={img} />
      <CardBody>
        <Heading size="lg">{name}</Heading>
        <PlatFormIconList
          platforms={parent_platforms.map(({ platform }) => platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
