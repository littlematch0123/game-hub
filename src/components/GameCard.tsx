import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  const { name, background_image: img, parent_platforms, metacritic } = game;

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(img)} />
      <CardBody>
        <Heading size="lg">{name}</Heading>
        <HStack justifyContent="space-between">
          <PlatFormIconList
            platforms={parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
