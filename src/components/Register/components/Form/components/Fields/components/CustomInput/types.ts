export interface CustomInputProps {
  label: string;
  type?: "default" | "password";
  invalid: boolean;
  errorMessage: string | undefined;
}
