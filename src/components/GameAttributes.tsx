import { List, ListItem, SimpleGrid } from "@chakra-ui/react";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import { Link } from "react-router-dom";
import useGameStore from "../store";
import Game from "../entities/Game";
interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  const { parent_platforms, metacritic, genres, publishers } = game;
  const setPlatformId = useGameStore((s) => s.setPlatformId);
  const setGenreId = useGameStore((s) => s.setGenreId);
  const setSearchText = useGameStore((s) => s.setSearchText);
  return (
    <SimpleGrid as="section" listStyleType="none" columns={2} spacing="10px">
      <DefinitionItem term="Platforms">
        <List>
          {parent_platforms?.map(({ platform: p }) => (
            <ListItem
              textDecoration="underline"
              onClick={() => {
                setPlatformId(p.id);
                setGenreId(undefined);
                setSearchText("");
              }}
              key={p.id}
            >
              <Link to="/">{p.name}</Link>
            </ListItem>
          ))}
        </List>
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={Number(metacritic)} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        <List>
          {genres?.map((g) => (
            <ListItem
              textDecoration="underline"
              onClick={() => {
                setGenreId(g.id);
                setPlatformId(undefined);
                setSearchText("");
              }}
              key={g.id}
            >
              <Link to="/">{g.name}</Link>
            </ListItem>
          ))}
        </List>
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        <List>
          {publishers?.map((p) => (
            <ListItem key={p.id}>{p.name}</ListItem>
          ))}
        </List>
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
