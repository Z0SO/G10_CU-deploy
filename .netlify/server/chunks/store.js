import { w as writable } from "./index.js";
const listaMecanicos = writable([
  { nombre: "Marcelo Lopez", estado: "ocupado", experiencia: 10 },
  { nombre: "Juan Rodriguez", estado: "ocupado", experiencia: 5 },
  { nombre: "Nicolas Ledesma", estado: "ocupado", experiencia: 8 },
  { nombre: "Carlos Gimenez", estado: "libre", experiencia: 3 },
  { nombre: "Santiago Fernandez", estado: "ocupado", experiencia: 12 },
  { nombre: "Laura Morales", estado: "ocupado", experiencia: 7 },
  { nombre: "Pedro Alvarez", estado: "libre", experiencia: 6 },
  { nombre: "Ana Gutierrez", estado: "libre", experiencia: 4 },
  { nombre: "Luis Hernandez", estado: "libre", experiencia: 9 },
  { nombre: "Marta Silva", estado: "ocupado", experiencia: 11 }
]);
const listaTurnos = writable([
  { id: 1, fecha: "2024-10-01", hora: "08:00", vehiculo: "Fiat 147", mecanico: "Marcelo Lopez" },
  { id: 2, fecha: "2024-10-01", hora: "09:00", vehiculo: "Ford Focus", mecanico: "Juan Rodriguez" },
  { id: 3, fecha: "2024-10-01", hora: "10:00", vehiculo: "Renault Clio", mecanico: "Nicolas Ledesma" },
  { id: 4, fecha: "2024-10-01", hora: "11:00", vehiculo: "Chevrolet Corsa", mecanico: "Marta Silva" },
  { id: 5, fecha: "2024-10-01", hora: "12:00", vehiculo: "Peugeot 207", mecanico: null },
  { id: 6, fecha: "2024-10-01", hora: "13:00", vehiculo: "Honda Civic", mecanico: null },
  { id: 7, fecha: "2024-10-01", hora: "14:00", vehiculo: "Toyota Corolla", mecanico: null },
  { id: 8, fecha: "2024-10-01", hora: "15:00", vehiculo: "Volkswagen Golf", mecanico: null },
  { id: 9, fecha: "2024-10-01", hora: "16:00", vehiculo: "Nissan Sentra", mecanico: "Laura Morales" },
  { id: 10, fecha: "2024-10-01", hora: "17:00", vehiculo: "BMW Serie 3", mecanico: null },
  { id: 11, fecha: "2024-10-01", hora: "18:00", vehiculo: "Mercedes-Benz Clase C", mecanico: null },
  { id: 12, fecha: "2024-10-01", hora: "19:00", vehiculo: "Audi A4", mecanico: null },
  { id: 13, fecha: "2024-10-01", hora: "20:00", vehiculo: "Fiat Uno", mecanico: "Santiago Fernandez" },
  { id: 14, fecha: "2024-10-01", hora: "21:00", vehiculo: "Ford Fiesta", mecanico: null },
  { id: 15, fecha: "2024-10-01", hora: "22:00", vehiculo: "Chevrolet Onix", mecanico: null },
  { id: 16, fecha: "2024-10-01", hora: "23:00", vehiculo: "Renault Sandero", mecanico: null }
]);
export {
  listaMecanicos as a,
  listaTurnos as l
};
