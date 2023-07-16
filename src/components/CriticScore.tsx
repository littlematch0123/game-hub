import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color;
  if (score > 75) color = "green";
  else if (score > 60) color = "yellow";
  else color = "";
  return (
    <Badge fontSize="14px" paddingX="2" borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
