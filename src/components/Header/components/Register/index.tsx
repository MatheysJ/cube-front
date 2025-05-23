import { PAGE } from "@/constants/page";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const Register: React.FC = () => {
  const { push } = useRouter();

  return (
    <Button size="md" p="4" onClick={() => push(PAGE.REGISTER)}>
      Cadastrar-se
    </Button>
  );
};

export default Register;
