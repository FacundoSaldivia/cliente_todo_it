import { Component, OnInit } from '@angular/core';
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
}

@Component({
  selector: 'app-travel-state',
  templateUrl: './travel-state.component.html',
  styleUrls: ['./travel-state.component.sass'],
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
export class TravelStateComponent implements OnInit {
  displayedColumns: string[] = [
    'Fecha',
    'Marca',
    'Modelo',
    'estadoEquipo',
    'estadoViaje',
  ];
  dataSource = new MatTableDataSource(this.getData());
  columnsToDisplay = ['fecha', 'marca', 'modelo'];
  expandedElement: tablaItems | null;

  constructor() {}

  ngOnInit(): void {}
  getData() {
    if (localStorage.getItem('arrEquiposEstado')) {
      return JSON.parse(localStorage.getItem('arrEquiposEstado') || '');
    } else {
      return [];
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  estadoDeViaje(id: any) {
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
        return 'Unkown';
      }
    }
  }
  estadoDelEquipo(id: any) {
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
