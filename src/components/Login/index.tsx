import React from "react";
import { useForm } from "react-hook-form";
import { LoginBody } from "@/services/auth/login/types";

import { Action, Form, Root } from "./components";
import { WaveBackground } from "../Common";

const Login: React.FC = () => {
  const form = useForm<LoginBody>();

  return (
    <React.Fragment>
      <Root>
        <Form {...form} />
        <Action getValues={form.getValues} />
      </Root>
      <WaveBackground />
    </React.Fragment>
  );
};

export default Login;
