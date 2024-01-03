import { CommonModule } from '@angular/common';
import { JobApplicantService } from '../../Services/JobApplicant/job-applicant.service';
import { Component, OnInit } from '@angular/core';
import { JobApplicants } from '../../Models/Interfaces/JobApplicants';
import { FooterComponent } from "../../Components/footer/footer.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";

@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.scss',
    imports: [FooterComponent, NavbarComponent,CommonModule]
})
export class DetailsComponent implements OnInit{

  public id : number | undefined;
  public applications: JobApplicants[] = [];

  constructor(private jobApplicantService :JobApplicantService){}

  ngOnInit(): void {
    this.id = history.state.id;

    if(this.id){
      console.log("this is the details : "+this.id);
      this.findApplicationsByJobId(this.id)
    }
  }

  findApplicationsByJobId(id: number): void {
    this.jobApplicantService.findApplicationsByJobOffer(id).subscribe(
      (applications) => {
        this.applications = applications;
        console.log(this.applications);
      },
      (error) => {
        console.error('Error fetching applications:', error);
      }
    );
  }




}
