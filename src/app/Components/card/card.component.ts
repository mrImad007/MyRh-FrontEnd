import { Component, OnInit } from '@angular/core';
import { JobOffer } from '../../Models/Interfaces/JobOffer';
import { JobOfferService } from '../../Services/JobOffer/job-offer.service';
import { CommonModule } from '@angular/common';
import { PopupComponent } from "../popup/popup.component";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { JobApplicantService } from '../../Services/JobApplicant/job-applicant.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    imports: [CommonModule, PopupComponent, FormsModule, MatInputModule,ReactiveFormsModule]
})
export class CardComponent implements OnInit {

  constructor(private jobOffer: JobOfferService, private formBuilder: FormBuilder,private jobApplicantService: JobApplicantService) { }

  public offers: JobOffer[] = [];
  public applicationForms: FormGroup[] = [];
  public applicationForm !: FormGroup;

  ngOnInit(): void {
    this.getOffers();
    this.initializeForms();
  }

  getOffers() {
    this.jobOffer.getAllOffers().subscribe(
      (offers: JobOffer[]) => {
        this.offers = offers;
        console.log(this.offers);
        console.log(this.applicationForms);
      },
      (error) => {
        console.error('Error fetching offers:', error);
      }
    );
  }

  // PopUp  ==================================
  // formData = {
  //   name: '',
  //   email: '',
  //   phone: '',
  //   resume: null,
  //   id: 0,
  // };

  private initializeForms() {
    this.applicationForms = this.offers.map((offer) => {
      return this.formBuilder.group({
        name: this.formBuilder.control('', [Validators.required]),
        email: this.formBuilder.control('', [Validators.required]),
        phone: this.formBuilder.control('', [Validators.required]),
        resume: this.formBuilder.control(null, [Validators.required]),
        id: this.formBuilder.control(offer.company.id, [Validators.required]),
      });
    });
  }

  onSubmit(index: number) {
    const formValues = this.applicationForms[index].value;
    
    // Call the createApplication method here
    this.jobApplicantService.createApplication({
      applicant_id: 0,
      jobOffer_id: formValues.id,
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone
    }).subscribe(
      (response) => {
        // Handle success response
        console.log('Application created successfully:', response);
        Swal.fire({
          title: 'Success!',
          text: 'Application created successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      },
      (error) => {
        // Handle error
        console.error('Error creating application:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Application creation failed.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    );
  }

  onFileSelected(event: any, index: number) {
    this.applicationForms[index].get('resume')?.setValue(event.target.files[0]);
  }
  
 // PopUp  ==================================
}
