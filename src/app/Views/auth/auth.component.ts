import Swal from 'sweetalert2';
import { Company } from './../../Models/Interfaces/Company';
import { CompanyService } from './../../Services/Company/company.service';
import { Component, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  imports: [FormsModule,ReactiveFormsModule],
})
export class AuthComponent implements OnInit{
  

  public authForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private companyService: CompanyService,private router: Router){}

  ngOnInit(): void {
    this.initializeForm();
    this.onSubmit();
    }

    private initializeForm() {
      this.authForm = this.formBuilder.group({
          email: this.formBuilder.control('', [Validators.required]),
          password: this.formBuilder.control('', [Validators.required]),
      });
    }

    onSubmit(){
      const {
        email,
        password
      } = this.authForm.value;

      console.log(this.authForm.value);

      this.companyService.authentication(this.authForm.value).subscribe(
        (company: Company) => {
          Swal.fire({
            title: 'Success!',
            text: `Welcome ${company.name} admin.`,
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.router.navigate(['/dashboard'], { state: { company } });
        },(_error) => {
          Swal.fire({
            title: 'Error!',
            text: `Authentication failed. Try again`,
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      );
      
    }


}
