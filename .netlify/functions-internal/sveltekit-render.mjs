import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app.css","favicon.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.C5TS7Y9M.js","app":"_app/immutable/entry/app.ZDHgMHha.js","imports":["_app/immutable/entry/start.C5TS7Y9M.js","_app/immutable/chunks/entry.9WWqwAAC.js","_app/immutable/chunks/scheduler.D_9yqOoj.js","_app/immutable/chunks/index.DT4emJkJ.js","_app/immutable/entry/app.ZDHgMHha.js","_app/immutable/chunks/scheduler.D_9yqOoj.js","_app/immutable/chunks/index.BzFiGQGH.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/turnos",
				pattern: /^\/turnos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/turnos/asignar-mecanico/[id]",
				pattern: /^\/turnos\/asignar-mecanico\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/turnos/list",
				pattern: /^\/turnos\/list\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
