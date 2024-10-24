import { Component } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { SharedButtonComponent } from '../../shared/shared-button/shared-button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {}
