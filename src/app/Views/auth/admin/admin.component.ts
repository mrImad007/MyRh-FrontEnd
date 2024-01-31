import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../Services/Admin/admin.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Admin } from '../../../Models/Interfaces/Admin';
@Component({

  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminAuthComponent implements OnInit{

  public authForm !: FormGroup;
  constructor(private formBuilder: FormBuilder,
     private adminService: AdminService,
     private router: Router){}


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

    this.adminService.authentication(this.authForm.value).subscribe(
      (admin: Admin) => {
        Swal.fire({
          title: 'Success!',
          text: `Welcome ${admin.name} admin.`,
          icon: 'success',
          confirmButtonText: 'OK',
        });
        this.router.navigate(['/dashboard'], { state: { admin } });
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
