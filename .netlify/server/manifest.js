export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/chakra.svg","assets/cinem8.webp","assets/contact.webp","assets/favicon.webp","assets/firebase.svg","assets/framer-motion.svg","assets/grid-pattern.png","assets/gsap.svg","assets/hero.webp","assets/hiddengems.webp","assets/N.png","assets/N.svg","assets/nextjs-icon-dark-background.webp","assets/nextjs.svg","assets/noise-texture.svg","assets/plantpal.webp","assets/prisma.svg","assets/prismic.svg","assets/ringw3rk.webp","assets/smartcart.webp","assets/smartcart1.webp","assets/supabase.webp","assets/svelte.svg","assets/tailwind.svg","assets/Threejs.svg","favicon.ico","fonts/DMSans-Bold.woff2","fonts/DMSans-Italic.woff2","fonts/DMSans-Medium.woff2","fonts/DMSans-Regular.woff2"]),
	mimeTypes: {".svg":"image/svg+xml",".webp":"image/webp",".png":"image/png",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.BH6glviQ.js","app":"_app/immutable/entry/app.BDhCWhg3.js","imports":["_app/immutable/entry/start.BH6glviQ.js","_app/immutable/chunks/entry.BOcpbEbK.js","_app/immutable/chunks/scheduler.C7NkljfN.js","_app/immutable/entry/app.BDhCWhg3.js","_app/immutable/chunks/scheduler.C7NkljfN.js","_app/immutable/chunks/index.D9yXyHGN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
