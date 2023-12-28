import { ContractType } from "../Enum/ContractType";
import { Company } from "./Company";

export interface JobOffer {
    id?: number;
    title: string;
    description: string;
    salary: number;
    location: string;
    date: Date;
    contractType: ContractType;
    company: Company;
  }