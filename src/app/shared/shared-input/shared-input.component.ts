import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-input.component.html',
  styleUrl: './shared-input.component.css'
})
export class SharedInputComponent {
  @Input() name: string = 'input';
  @Input() label: string = 'Input';
  @Input() placeholder: string = 'Input';
  @Input() required: boolean = false;
  @Input() isTheLast: boolean = false;
  @Input() type: 'text' | 'email' | 'password' = 'text';
}
