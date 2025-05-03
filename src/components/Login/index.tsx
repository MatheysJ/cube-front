import React from "react";
import { LoginProps } from "./types";
import { Action, Form, Links, Root, ThirdParty } from "./components";
import { WaveBackground } from "../Common";

const Login: React.FC<LoginProps> = () => {
  return (
    <React.Fragment>
      <Root>
        <Form />
        <Links />
        <Action />
        <ThirdParty />
      </Root>
      <WaveBackground />
    </React.Fragment>
  );
};

export default Login;
