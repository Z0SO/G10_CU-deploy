import { c as create_ssr_component, a as subscribe, b as each, g as get_store_value, d as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { l as listaTurnos } from "../../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $listaTurnos, $$unsubscribe_listaTurnos;
  $$unsubscribe_listaTurnos = subscribe(listaTurnos, (value) => $listaTurnos = value);
  function filtrarTurnosSinMecanico() {
    return get_store_value(listaTurnos).filter((turno) => turno.mecanico === null);
  }
  const turnosFiltrados = filtrarTurnosSinMecanico();
  $$unsubscribe_listaTurnos();
  return ` <h1 data-svelte-h="svelte-9y8y3j">Turnos disponibles</h1> <p data-svelte-h="svelte-ekz1by">Selecciona un turno para asignar un mecánico</p> <ul>${each(turnosFiltrados, (turno) => {
    return `<li><a${add_attribute("href", `/turnos/asignar-mecanico/${turno.id}`, 0)}>${escape(turno.fecha)} - ${escape(turno.hora)} - ${escape(turno.vehiculo)}</a> </li>`;
  })}</ul> <h2 data-svelte-h="svelte-1yuz6lu">Lista de turnos con mecánico asignado</h2> <ul> ${each($listaTurnos, (turno) => {
    return `${turno.mecanico !== null ? `<li>${escape(turno.fecha)} - ${escape(turno.hora)} - ${escape(turno.vehiculo)} - ${escape(turno.mecanico)} </li>` : ``}`;
  })}</ul>`;
});
export {
  Page as default
};
