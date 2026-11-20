import { Flex, Link } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

const Links: React.FC = () => {
  const { push } = useRouter();
  const forgottenPasswordUrl = "/esqueci-a-senha";

  const handleClick = () => {
    push(forgottenPasswordUrl);
  };

  return (
    <Flex justifyContent="right">
      <Link
        color="gray.400"
        textStyle="sm"
        onClick={handleClick}
        href={forgottenPasswordUrl}
      >
        Esqueceu a senha?
      </Link>
    </Flex>
  );
};

export default Links;
