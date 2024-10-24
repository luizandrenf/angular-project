import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.css'
})
export class SharedButtonComponent {
  @Input() text: string = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: string = 'bg-blue-500';
  @Input() hoverColor: string = 'hover:bg-blue-600';
}
