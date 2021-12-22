import { Component, OnChanges, Input, OnInit, DoCheck } from '@angular/core';
import { SignInService } from '../services/sign-in.service';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export interface tablaItems {
  fecha: string;
  marca: string;
  modelo: string;
  estadoEquipo: string;
  estadoViaje: string;
  fechaEntregado: string;
}

@Component({
  selector: 'app-travel-record',
  templateUrl: './travel-record.component.html',
  styleUrls: ['./travel-record.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TravelRecordComponent implements OnInit, DoCheck {
  constructor(private signInService: SignInService) {}
  dataSource = new MatTableDataSource(this.getData());
  columnsToDisplay = ['fecha', 'marca', 'modelo'];
  expandedElement: tablaItems | null;
  // Tabla
  displayedColumns: string[] = [
    'Fecha',
    'Marca',
    'Modelo',
    'estadoEquipo',
    'estadoViaje',
    'fechaEntregado',
  ];

  // Filtro de Tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //Id del usuario para la consulta
  userId = localStorage.getItem('userId');

  //consulta para obetener la lista de los equipos

  ngOnInit(): void {}

  ngDoCheck() {}

  getData(): tablaItems[] {
    if (localStorage.getItem('arrEquipos')) {
      return JSON.parse(localStorage.getItem('arrEquipos') || '');
    } else {
      return [];
    }
  }

  estadoDeViaje(id: any): string {
    switch (id) {
      case 1: {
        return 'Pendiente a retirar';
      }
      case 2: {
        return 'Retiro asignado';
      }
      case 3: {
        return 'Retirado';
      }
      case 4: {
        return 'Pendiente de reparacion';
      }
      case 5: {
        return 'Reparado';
      }
      case 6: {
        return 'Entrega sin retirar';
      }
      case 7: {
        return 'Pendiente de entrega';
      }
      case 8: {
        return 'Entregado';
      }
      case 9: {
        return 'Recibido';
      }
      case 10: {
        return 'Renunciado';
      }
      default: {
        return '-';
      }
    }
  }
  estadoDeViajeFinal(id: number, fecha: string): string {
    switch (id) {
      case 9: {
        return fecha;
      }
      default: {
        return '-';
      }
    }
  }
  estadoDelEquipo(id: number): string {
    switch (id) {
      case 1:
      case 2:
      case 3:
      case 4: {
        return 'A reparar';
      }
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10: {
        return 'Reparado';
      }

      default: {
        return '-';
      }
    }
  }
}
