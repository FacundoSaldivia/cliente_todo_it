import { Component, OnInit } from '@angular/core';
import { SignInService } from '../services/sign-in.service';

export interface tablaItems {
  fecha: string;
  marca: string;
  modelo: string;
  estadoEquipo: string;
  estadoViaje: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private signInService: SignInService) {}
  userId = localStorage.getItem('userId');

  consultarEquipment() {
    let tabla: tablaItems[] = [];
    let tabla2: tablaItems[] = [];
    this.signInService.consultarEquipos(this.userId).subscribe((resp) => {
      // TABLA 1 todos los items
      resp.forEach((e) => {
        let tablaHistorial = {
          fecha: e.travelEquipmentDTOs[0].operationDate.substring(2, 10),
          marca: e.mark,
          modelo: e.model,
          estadoViaje:
            e.travelEquipmentDTOs[e.travelEquipmentDTOs.length - 1]
              .statusTravel,
          estadoEquipo: e.failure,
        };
        tabla.push(tablaHistorial);
        localStorage.setItem('arrEquipos', JSON.stringify(tabla));
        // TABLA 2 todos los items menos los ya entregados
        let tablaEstado = {
          fecha: e.travelEquipmentDTOs[
            e.travelEquipmentDTOs.length - 1
          ].operationDate.substring(2, 10),
          marca: e.mark,
          modelo: e.model,
          estadoViaje:
            e.travelEquipmentDTOs[e.travelEquipmentDTOs.length - 1]
              .statusTravel,
          estadoEquipo: e.failure,
        };
        if (tablaEstado.estadoViaje != '9') {
          tabla2.push(tablaEstado);
        }
        localStorage.setItem('arrEquiposEstado', JSON.stringify(tabla2));
      });
    });
  }
  ngOnInit(): void {
    this.consultarEquipment();
  }
}
