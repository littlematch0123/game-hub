import { Button, Text, useBoolean } from "@chakra-ui/react";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const ExpandableText = ({
  children,
  ...rest
}: Props & React.ComponentProps<typeof Text>) => {
  const [expanded, setExpanded] = useBoolean();

  return (
    <>
      <Text {...rest} noOfLines={expanded ? 0 : 2}>
        {children}
      </Text>
      <Button
        onClick={setExpanded.toggle}
        colorScheme="yellow"
        marginY="10px"
        size="sm"
        fontWeight="bold"
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </>
  );
};

export default ExpandableText;
