import Swal from 'sweetalert2';
import { Component , OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicantService } from '../../../Services/Applicant/applicant.service';
import { Router } from '@angular/router';
import { Applicant } from '../../../Models/Interfaces/Applicants';


@Component({
  selector: 'app-applicant',
  standalone: true,
  templateUrl: './applicant.component.html',
  styleUrl: './applicant.component.scss',
  imports: [FormsModule, ReactiveFormsModule]
})
export class ApplicantComponent implements OnInit{
  public authForm !: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private applicantService : ApplicantService ,
    private router : Router
    ){}

 
  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.authForm = this.formBuilder.group({
      email : this.formBuilder.control('', [Validators.required]),
      password : this.formBuilder.control('', [Validators.required])
    });
  }

  onSubmit() {
    const {
      email, 
      password
    } = this.authForm.value;

    this.applicantService.authentication(this.authForm.value).subscribe(
      (applicant: Applicant) => {
        Swal.fire({
          title: 'Success!',
          text: `Welcome ${applicant.name} admin.`,
          icon: 'success',
          confirmButtonText: 'OK',
        });
        this.router.navigate(['/dashboard'], { state: { applicant } });
      },(_error) => {
        Swal.fire({
          title: 'Error!',
          text: `Authentication failed. Try again`,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    )
    
  }

  
}
