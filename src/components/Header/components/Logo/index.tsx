import React from "react";
import { PAGE } from "@/constants/page";
import { Cube } from "@/components/Common";
import { useRouter } from "next/navigation";
import { Flex, Text } from "@chakra-ui/react";

const Logo: React.FC = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push(PAGE.HOME);
  };

  return (
    <Flex
      as="a"
      gap="4"
      px="6px"
      py="8px"
      tabIndex={1}
      cursor="pointer"
      alignItems="center"
      onClick={handleClick}
    >
      <Cube size={24} x={40} y={135} color="#FFF" spin />
      <Text fontSize="md" display={{ base: "block", smDown: "none" }}>
        Cube
      </Text>
    </Flex>
  );
};
1;
export default Logo;
