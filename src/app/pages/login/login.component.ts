import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignInService } from '../services/sign-in.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(
    private signInService: SignInService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  user = {
    email: '',
    fullName: '',
    address: '',
    cellPhone: '',
    observations: '',
    password: '',
    vehicle: '',
  };

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}

  submit(): void {
    // Llamo a la funcion que permite logear el usuario
    this.login(this.form.value.email, this.form.value.password);
    // Reseteo el form
    this.form.reset();
  }
  login(email: string, pass: string) {
    this.signInService.login(email, pass).subscribe(
      (resp) => {
        // Guardo nombre e ID
        localStorage.setItem('user', JSON.stringify(resp.fullName));
        localStorage.setItem('userId', JSON.stringify(resp.id));
        // Muestro snackBar con el resultado
        this.openSnackBar('Logeado correctamente', 2000);
        // Vuelvo al HOME
        this.router.navigate(['/home']);
      },
      (error) => {
        // Muestro snackBar con el resultado
        this.openSnackBar('Correo o contraseña incorrectos', 20000);
      }
    );
  }

  openSnackBar(message: string, duration: number) {
    this.snackBar.open(message, 'Ok', { duration: duration });
  }
}
