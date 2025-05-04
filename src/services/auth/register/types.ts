export interface RegisterService {
  (body: RegisterServiceBody): Promise<void>;
}

export interface RegisterServiceBody {
  name: string;
  mail: string;
  phone: string;
  password: string;
  cpf: string;
}
