import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignUpService } from '../services/sign-up.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-travel',
  templateUrl: './request-travel.component.html',
  styleUrls: ['./request-travel.component.sass'],
})
export class RequestTravelComponent implements OnInit {
  constructor(
    private signUp: SignUpService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  form: FormGroup = new FormGroup({
    mark: new FormControl(''),
    model: new FormControl(''),
    failure: new FormControl(''),
  });

  submit(): void {
    console.log('clicked submit request');
    this.iniciarPedido();
  }

  iniciarPedido() {
    console.log(this.form.value);
    this.signUp
      .ingresarEquipo(this.form.value, localStorage.getItem('userId'))
      .subscribe((resp) => {
        console.log(resp, 'se envio');
        this.openSnackBar('Solicitud realizada con exito', 2000);
        this.router.navigate(['/home']);
      });
  }

  openSnackBar(message: string, duration: number) {
    this.snackBar.open(message, 'Ok', { duration: duration });
  }
  ngOnInit(): void {}
}
