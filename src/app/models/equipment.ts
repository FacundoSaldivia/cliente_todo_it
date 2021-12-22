interface datos {
  id: string;
  statusTravel: string;
  operationDate: string;
}

export interface Equipment {
  equipmentId?: number;
  mark: string;
  model: string;
  failure: string;
  travelEquipmentDTOs: datos[];
}
