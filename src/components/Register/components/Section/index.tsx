import { Flex } from "@chakra-ui/react";
import { SectionProps } from "./types";

const Section: React.FC<SectionProps> = ({ children, ...flexProps }) => {
  return (
    <Flex flexDirection="column" p="8" {...flexProps}>
      {children}
    </Flex>
  );
};

export default Section;
