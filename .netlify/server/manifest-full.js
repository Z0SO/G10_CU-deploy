export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ygeokxyI.js","app":"_app/immutable/entry/app.BpIYnVxN.js","imports":["_app/immutable/entry/start.ygeokxyI.js","_app/immutable/chunks/entry.FC4DYeGq.js","_app/immutable/chunks/scheduler.CkRtTmwH.js","_app/immutable/chunks/index.Bc7iwneS.js","_app/immutable/entry/app.BpIYnVxN.js","_app/immutable/chunks/scheduler.CkRtTmwH.js","_app/immutable/chunks/index.BB8-Jmkb.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
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
})();
