export interface ElectionResults {
  mapa: Mapa[];
  id: ID;
  census: number;
  pollingCensus: number;
  numStation: number;
  pollingNumStation: number;
  pollingPercCensus: number;
  pollingPercStation: number;
  electores: number;
  sobres: number;
  nulos: number;
  percNulos: number;
  recurridos: number;
  percRecurridos: number;
  blancos: number;
  percBlancos: number;
  comando: number;
  percComando: number;
  impugnados: number;
  percImpugnados: number;
  totalVotos: number;
  afirmativos: number;
  percAfirmativos: number;
  abstencion: number;
  percAbstencion: number;
  valid: number;
  percValid: number;
  recImpCom: number;
  percRecImpCom: number;
  participation: number;
  date: string;
  isCircus: number;
  umbral: number;
  calcPerc: CalcPerc;
  cargos: number;
  showCargos: number;
  hayEmpates: boolean;
  partidos: ElectionResultsPartido[];
}

export enum CalcPerc {
  V = 'V',
}

export interface ID {
  idAmbito: IDAmbito;
  eleccionId: number;
  envio: number;
}

export interface IDAmbito {
  level: number;
  codigo: string;
  name: string;
  scopeId: string;
}

export interface Mapa {
  level: number;
  scopes: Scope[];
}

export interface Scope {
  scopeId: string;
  name: string;
  codigo: string;
  envio: number;
  abstencion: number;
  afirmativos: number;
  blancos: number;
  census: number;
  comando: number;
  electores: number;
  impugnados: number;
  nulos: number;
  numStation: number;
  partidos: ScopePartido[];
  participation: number;
  percAbstencion: number;
  percAfirmativos: number;
  percBlancos: number;
  percComando: number;
  percImpugnados: number;
  percNulos: number;
  percRecImpCom: number;
  percRecurridos: number;
  percValid: number;
  pollingCensus: number;
  pollingNumStation: number;
  pollingPercStation: number;
  recImpCom: number;
  recurridos: number;
  sobres: number;
  totalVotos: number;
  valid: number;
  umbral: number;
  calcPerc: CalcPerc;
  isCircus: number;
  showCargos: number;
}

export interface ScopePartido {
  name: Name;
  code: string;
  codTel: string;
  codLogo: string;
  color: Color;
  votos: number;
  perc: number;
  percCarg: number;
  listas: Lista[];
}

export enum Color {
  Aabbaa = '#AABBAA',
}

export interface Lista {
  code: string;
  nombre: string;
  candidatos: string[];
  votos: number;
  perc: number;
  percAbs: number;
  orden?: number;
}

export enum Name {
  FrenteDeIzquierdaYDeTrabajadoresUnidad = 'FRENTE DE IZQUIERDA Y DE TRABAJADORES - UNIDAD',
  FrenteLiberAr = 'FRENTE LIBER.AR',
  FrentePatriotaFederal = 'FRENTE PATRIOTA FEDERAL',
  HacemosPorNuestroPais = 'HACEMOS POR NUESTRO PAIS',
  JuntosPorElCambio = 'JUNTOS POR EL CAMBIO',
  LaLibertadAvanza = 'LA LIBERTAD AVANZA',
  MovimientoAlSocialismo = 'MOVIMIENTO AL SOCIALISMO',
  MovimientoDeAccionVecinal = 'MOVIMIENTO DE ACCION VECINAL',
  MovimientoIzquierdaJuventudYDignidad = 'MOVIMIENTO IZQUIERDA JUVENTUD Y DIGNIDAD',
  MovimientoLibresDelSur = 'MOVIMIENTO LIBRES DEL SUR',
  PoliticaObrera = 'POLITICA OBRERA',
  PrincipiosYValores = 'PRINCIPIOS Y VALORES',
  ProyectoJoven = 'PROYECTO JOVEN',
  UnionDelCentroDemocratico = 'UNION DEL CENTRO DEMOCRATICO',
  UnionPorLaPatria = 'UNION POR LA PATRIA',
}

export interface ElectionResultsPartido {
  code: string;
  name: Name;
  codTel: string;
  codLogo: string;
  votos: number;
  perc: number;
  percCarg: number;
  cargos: number;
  listas: Lista[];
}
