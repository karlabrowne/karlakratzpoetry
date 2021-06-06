const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../../../src/routes/__error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/about.svelte"),
	() => import("../../../src/routes/poems/__layout.svelte"),
	() => import("../../../src/routes/poems/index.svelte"),
	() => import("../../../src/routes/poems/[slug].svelte"),
	() => import("../../../src/routes/book.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/poems/index.svelte
	[/^\/poems\/?$/, [c[0], c[4], c[5]], [c[1]]],

	// src/routes/poems/[slug].svelte
	[/^\/poems\/([^/]+?)\/?$/, [c[0], c[4], c[6]], [c[1]], (m) => ({ slug: d(m[1])})],

	// src/routes/book.svelte
	[/^\/book\/?$/, [c[0], c[7]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];