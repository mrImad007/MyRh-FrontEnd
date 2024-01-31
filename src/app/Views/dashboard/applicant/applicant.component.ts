import { Component } from '@angular/core';
import { NavbarComponent } from '../../../Components/navbar/navbar.component';
import { FooterComponent } from '../../../Components/footer/footer.component';
import { TableComponent } from '../../../Components/table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applicant',
  standalone: true,
  templateUrl: './applicant.component.html',
  styleUrl: './applicant.component.scss',
  imports: [NavbarComponent, FooterComponent, TableComponent,CommonModule]
})
export class ApplicantDashboard {

}
