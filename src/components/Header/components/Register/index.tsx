import React from "react";
import { usePrefetch } from "@/hooks";
import { PAGE } from "@/constants/page";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/contexts";

const Register: React.FC = () => {
  const { user } = useUserContext();
  const { push } = useRouter();
  usePrefetch(PAGE.REGISTER);

  return !user ? (
    <Button size="md" p="4" onClick={() => push(PAGE.REGISTER)}>
      Cadastrar-se
    </Button>
  ) : null;
};

export default Register;
