import { CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  const {
    name,
    slug,
    background_image: img,
    parent_platforms,
    metacritic,
    rating_top,
  } = game;

  return (
    <>
      <Image src={getCroppedImageUrl(img)} />
      <CardBody paddingX="16px">
        <HStack justifyContent="space-between" marginBottom="8px">
          <PlatFormIconList
            platforms={parent_platforms?.map(({ platform }) => platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
        <HStack>
          <Heading size="md">
            <Link to={`/games/${slug}`}>{name}</Link>
          </Heading>
          <Emoji rating={rating_top} />
        </HStack>
      </CardBody>
    </>
  );
};

export default GameCard;
