import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements OnInit{

  hidden : boolean = true;
  @Input() color!: string;
  @Input() name!: string;
  @Input() title!: string;
  @Input() isEditForm : boolean = false;
  @Output() populateUpdateForm = new EventEmitter<void>();

  ngOnInit(): void {
    this.hidden = true;
  }

  constructor(){}

  Toggle() {
    if (this.isEditForm) {
      this.populateUpdateForm.emit();
    }
    this.hidden = !this.hidden;
  }

}
