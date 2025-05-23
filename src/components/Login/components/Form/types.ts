import { UseFormReturn } from "react-hook-form";
import { LoginBody } from "@/services/auth/login/types";

export type FormProps = UseFormReturn<LoginBody>;
