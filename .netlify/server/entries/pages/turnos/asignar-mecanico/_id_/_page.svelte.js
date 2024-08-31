import { c as create_ssr_component, a as subscribe, g as get_store_value, e as escape, b as each, d as add_attribute } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { l as listaTurnos, a as listaMecanicos } from "../../../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { id } = $page.params;
  let turno = null;
  const turnoId = parseInt(id);
  const turnos = get_store_value(listaTurnos);
  turno = turnos.find((t) => t.id === turnoId);
  if (!turno) {
    console.error("Turno no encontrado");
  }
  let mecanicosLibres = get_store_value(listaMecanicos).filter((m) => m.estado === "libre");
  $$unsubscribe_page();
  return `<h1>${turno ? `Asignar Mecánico al Turno ${escape(turno.fecha)} - ${escape(turno.hora)}` : `Turno no encontrado`}</h1> ${turno ? `<select><option value="" disabled data-svelte-h="svelte-1m45p04">Seleccione un mecánico</option>${each(mecanicosLibres, (mecanico) => {
    return `<option${add_attribute("value", mecanico.nombre, 0)}>${escape(mecanico.nombre)}</option>`;
  })}</select> <button data-svelte-h="svelte-vch1q0">Asignar Mecánico</button>` : ``}`;
});
export {
  Page as default
};
