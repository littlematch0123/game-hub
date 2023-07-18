import { CardBody, HStack, Heading, Image } from "@chakra-ui/react";
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
    <>
      <Image src={getCroppedImageUrl(img)} />
      <CardBody paddingX="16px">
        <HStack justifyContent="space-between" marginBottom="8px">
          <PlatFormIconList
            platforms={parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading size="md">{name}</Heading>
      </CardBody>
    </>
  );
};

export default GameCard;
