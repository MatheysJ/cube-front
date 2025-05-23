import React from "react";
import { PAGE } from "@/constants/page";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const { push } = useRouter();

  return (
    <Button variant="outline" size="md" p="4" onClick={() => push(PAGE.LOGIN)}>
      Entrar
    </Button>
  );
};

export default Login;
