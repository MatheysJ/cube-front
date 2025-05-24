import React from "react";
import { usePrefetch } from "@/hooks";
import { PAGE } from "@/constants/page";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/contexts";

const Login: React.FC = () => {
  const { user } = useUserContext();
  const { push } = useRouter();
  usePrefetch(PAGE.LOGIN);

  return !user ? (
    <Button variant="outline" size="md" p="4" onClick={() => push(PAGE.LOGIN)}>
      Entrar
    </Button>
  ) : null;
};

export default Login;
