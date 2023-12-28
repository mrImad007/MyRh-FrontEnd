import { JobOffer } from "./JobOffer";
import { Applicant } from "./Applicants";
export interface JobApplicants {
    id?: number;
    status: string;
    date: Date;
    jobOffer: JobOffer;
    applicant: Applicant;
  }