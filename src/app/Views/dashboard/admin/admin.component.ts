import { Component } from '@angular/core';
import { NavbarComponent } from "../../../Components/navbar/navbar.component";
import { FooterComponent } from "../../../Components/footer/footer.component";
import { TableComponent } from "../../../Components/table/table.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, TableComponent,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminDashboardComponent {

}
