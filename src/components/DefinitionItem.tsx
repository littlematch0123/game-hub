import { Box, Heading } from "@chakra-ui/react";
interface Props {
  children: React.ReactNode | React.ReactNode[];
  term?: string;
}
const DefinitionItem = ({ children, term }: Props) => {
  return (
    <Box as="dl">
      <Heading as="dt" marginBottom="6px" color="gray.600" size="lg">
        {term}
      </Heading>
      <Box as="dd">{children}</Box>
    </Box>
  );
};

export default DefinitionItem;
