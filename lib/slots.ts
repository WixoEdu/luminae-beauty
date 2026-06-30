// Time slots per day of week (0 = Sunday … 6 = Saturday)
// Based on La Clinique's published hours; sessions are 1h30.
export const SLOTS_BY_DAY: Record<number, string[]> = {
  0: [],                                                             // Domingo – cerrado
  1: ['09:30', '11:00', '12:30', '14:00', '15:30'],                 // Lunes 09:30–17:00
  2: ['09:30', '11:00', '12:30', '14:00', '15:30', '17:00'],        // Martes 09:30–19:00
  3: ['09:30', '11:00', '12:30', '14:00', '15:30'],                 // Miércoles 09:30–18:00
  4: ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30'],        // Jueves 10:00–20:00
  5: ['09:30', '11:00', '12:30', '14:00', '15:30', '17:00'],        // Viernes 09:30–19:00
  6: ['09:00', '10:30', '12:00', '13:30'],                          // Sábado 09:00–16:00
}

export const SERVICES = [
  'Skin Expertise Individual ($249)',
  'Membresía Première ($209/mes)',
  'Toxina Botulínica',
  'Radiesse · Bioestimulación',
  'Fillers · Ácido Hialurónico',
  'Armonización Facial',
  'Primera Visita / Consulta',
]

export const MONTH_NAMES = [
  'Enero','Febrero','Marzo','Abril','Mayo','Junio',
  'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',
]
