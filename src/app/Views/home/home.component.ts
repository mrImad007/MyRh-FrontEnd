import { Component } from '@angular/core';
import { FooterComponent } from '../../Components/footer/footer.component';
import { NavbarComponent } from '../../Components/navbar/navbar.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: 
    [FooterComponent,
    NavbarComponent]
})
export class HomeComponent {

}
