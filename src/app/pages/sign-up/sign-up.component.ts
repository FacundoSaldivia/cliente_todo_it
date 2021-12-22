import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpService } from '../services/sign-up.service';
import { Rol } from 'src/app/models/rol';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private signUpService: SignUpService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  administrador: Rol = {
    name: 'Administrador',
  };

  user = {
    email: '',
    fullName: '',
    address: '',
    cellPhone: '',
    password: '',
  };

  ngOnInit(): void {
    this.getAllClients();
  }

  registerForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    cellPhone: new FormControl(''),
  });

  onSubmit(): void {
    this.signUp();
    console.log(this.registerForm.value);
  }
  signUp() {
    this.signUpService.save(this.registerForm.value).subscribe(
      (resp: any) => {
        this.openSnackBar('Registro realizado correctamente', 2000);
        this.router.navigate(['/login']);
      },
      (error) => {
        this.openSnackBar('Error al realizar el registro', 20000);
      }
    );
  }
  getAllClients() {
    this.signUpService.getAll().subscribe((resp) => {
      console.log(resp);
    });
  }
  openSnackBar(message: string, duration: number) {
    this.snackBar.open(message, 'Ok', { duration: duration });
  }
  goLogin(): void {
    this.router.navigate(['/login']);
  }
}
