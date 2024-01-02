import { Component } from '@angular/core';
import { CardComponent } from "../../Components/card/card.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { PopupComponent } from "../../Components/popup/popup.component";


@Component({
    selector: 'app-offers',
    standalone: true,
    templateUrl: './offers.component.html',
    styleUrl: './offers.component.scss',
    imports: [CardComponent, NavbarComponent, FooterComponent, PopupComponent]
})
export class OffersComponent {
}
