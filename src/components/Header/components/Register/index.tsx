import React from "react";
import { usePrefetch } from "@/hooks";
import { PAGE } from "@/constants/page";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const { push } = useRouter();
  usePrefetch(PAGE.REGISTER);

  return (
    <Button size="md" p="4" onClick={() => push(PAGE.REGISTER)}>
      Cadastrar-se
    </Button>
  );
};

export default Register;
