import { Component } from '@angular/core';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [FooterComponent]
})
export class HomeComponent {

}
