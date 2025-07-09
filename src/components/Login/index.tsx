import React from "react";
import { LoginProps } from "./types";
import { useForm } from "react-hook-form";
import { LoginBody } from "@/services/auth/login/types";

import { Action, Form, Links, Root, ThirdParty } from "./components";
import { WaveBackground } from "../Common";

const Login: React.FC<LoginProps> = () => {
  const form = useForm<LoginBody>();

  return (
    <React.Fragment>
      <Root>
        <Form {...form} />
        {/* <Links /> */}
        <Action getValues={form.getValues} />
        {/* <ThirdParty /> */}
      </Root>
      <WaveBackground />
    </React.Fragment>
  );
};

export default Login;
