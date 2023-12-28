import { Role } from "../Enum/Role";
export interface Admin {
    id?: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    role: Role;
  }