import { c as client, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, q as add_render_callback, K as validate_each_argument, v as validate_slots, L as create_slot, M as update_slot, B as transition_in, z as transition_out, e as element, t as text, a as claim_element, b as children, h as claim_text, j as detach_dev, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, N as listen_dev, p as set_data_dev, O as destroy_each, y as empty, w as space, P as query_selector_all, x as claim_space, Q as prevent_default, A as check_outros, R as run_all, C as group_outros } from './client.5a9e8125.js';

/* src/routes/poems/_layout.svelte generated by Svelte v3.37.0 */
const file = "src/routes/poems/_layout.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i].name;
	child_ctx[11] = list[i].slug;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i].title;
	return child_ctx;
}

// (44:1) {#if vw < 650}
function create_if_block_3(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	const block = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		l: function claim(nodes) {
			if (default_slot) default_slot.l(nodes);
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(44:1) {#if vw < 650}",
		ctx
	});

	return block;
}

// (51:3) {#each categoriesArr as { title }}
function create_each_block_1(ctx) {
	let button;
	let t_value = /*title*/ ctx[14] + "";
	let t;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[8](/*title*/ ctx[14]);
	}

	const block = {
		c: function create() {
			button = element("button");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t = claim_text(button_nodes, t_value);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "filter-button svelte-nralsn");
			add_location(button, file, 51, 4, 1824);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", prevent_default(click_handler), false, true, false);
				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*categoriesArr*/ 2 && t_value !== (t_value = /*title*/ ctx[14] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(51:3) {#each categoriesArr as { title }}",
		ctx
	});

	return block;
}

// (58:4) {#if poems}
function create_if_block_1(ctx) {
	let ul;
	let each_value = /*filteredPoems*/ ctx[2];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(ul, "class", "svelte-nralsn");
			add_location(ul, file, 58, 3, 2081);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*filteredPoems*/ 4) {
				each_value = /*filteredPoems*/ ctx[2];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(58:4) {#if poems}",
		ctx
	});

	return block;
}

// (61:5) {#if slug}
function create_if_block_2(ctx) {
	let li;
	let a;
	let t_value = /*name*/ ctx[10] + "";
	let t;
	let a_href_value;

	const block = {
		c: function create() {
			li = element("li");
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			a = claim_element(li_nodes, "A", { rel: true, href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach_dev);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", a_href_value = "poems/" + /*slug*/ ctx[11].current);
			add_location(a, file, 61, 10, 2156);
			add_location(li, file, 61, 6, 2152);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, a);
			append_dev(a, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*filteredPoems*/ 4 && t_value !== (t_value = /*name*/ ctx[10] + "")) set_data_dev(t, t_value);

			if (dirty & /*filteredPoems*/ 4 && a_href_value !== (a_href_value = "poems/" + /*slug*/ ctx[11].current)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(61:5) {#if slug}",
		ctx
	});

	return block;
}

// (60:4) {#each filteredPoems as { name, slug }}
function create_each_block(ctx) {
	let if_block_anchor;
	let if_block = /*slug*/ ctx[11] && create_if_block_2(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*slug*/ ctx[11]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(60:4) {#each filteredPoems as { name, slug }}",
		ctx
	});

	return block;
}

// (70:1) {#if vw >= 650}
function create_if_block(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	const block = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		l: function claim(nodes) {
			if (default_slot) default_slot.l(nodes);
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(70:1) {#if vw >= 650}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div2;
	let t1;
	let div1;
	let h2;
	let t2;
	let t3;
	let div0;
	let t4;
	let button;
	let t5;
	let t6;
	let t7;
	let current;
	let mounted;
	let dispose;
	add_render_callback(/*onwindowresize*/ ctx[7]);
	let if_block0 = /*vw*/ ctx[3] < 650 && create_if_block_3(ctx);
	let each_value_1 = /*categoriesArr*/ ctx[1];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let if_block1 = /*poems*/ ctx[0] && create_if_block_1(ctx);
	let if_block2 = /*vw*/ ctx[3] >= 650 && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			div2 = element("div");
			if (if_block0) if_block0.c();
			t1 = space();
			div1 = element("div");
			h2 = element("h2");
			t2 = text("Poems by category");
			t3 = space();
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = space();
			button = element("button");
			t5 = text("All");
			t6 = space();
			if (if_block1) if_block1.c();
			t7 = space();
			if (if_block2) if_block2.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1qupx5s\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			if (if_block0) if_block0.l(div2_nodes);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h2 = claim_element(div1_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t2 = claim_text(h2_nodes, "Poems by category");
			h2_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			t4 = claim_space(div0_nodes);
			button = claim_element(div0_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t5 = claim_text(button_nodes, "All");
			button_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			if (if_block1) if_block1.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div2_nodes);
			if (if_block2) if_block2.l(div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Poems";
			attr_dev(h2, "class", "svelte-nralsn");
			add_location(h2, file, 48, 2, 1727);
			attr_dev(button, "class", "filter-button svelte-nralsn");
			add_location(button, file, 55, 3, 1956);
			attr_dev(div0, "class", "filter-cont svelte-nralsn");
			add_location(div0, file, 49, 2, 1756);
			attr_dev(div1, "class", "side-bar svelte-nralsn");
			add_location(div1, file, 47, 2, 1702);
			attr_dev(div2, "class", "page-wrapper svelte-nralsn");
			add_location(div2, file, 40, 0, 1593);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			if (if_block0) if_block0.m(div2, null);
			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, h2);
			append_dev(h2, t2);
			append_dev(div1, t3);
			append_dev(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append_dev(div0, t4);
			append_dev(div0, button);
			append_dev(button, t5);
			append_dev(div1, t6);
			if (if_block1) if_block1.m(div1, null);
			append_dev(div2, t7);
			if (if_block2) if_block2.m(div2, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(window, "resize", /*onwindowresize*/ ctx[7]),
					listen_dev(button, "click", prevent_default(/*click_handler_1*/ ctx[9]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*vw*/ ctx[3] < 650) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*vw*/ 8) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div2, t1);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (dirty & /*filterPoems, poems, categoriesArr*/ 19) {
				each_value_1 = /*categoriesArr*/ ctx[1];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, t4);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}

			if (/*poems*/ ctx[0]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(div1, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (/*vw*/ ctx[3] >= 650) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*vw*/ 8) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(div2, null);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block2);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			transition_out(if_block2);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div2);
			if (if_block0) if_block0.d();
			destroy_each(each_blocks, detaching);
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P
		? value
		: new P(function (resolve) {
					resolve(value);
				});
	}

	return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch(e) {
					reject(e);
				}
			}

			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch(e) {
					reject(e);
				}
			}

			function step(result) {
				result.done
				? resolve(result.value)
				: adopt(result.value).then(fulfilled, rejected);
			}

			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
};

function preload() {
	return __awaiter(this, void 0, void 0, function* () {
		const poemQuery = "*[_type == 'poem']{_id, slug, name, categories[]->{title}}";
		const catQuery = "*[_type == 'category']{_id, title}";
		const poems = yield client.fetch(poemQuery);
		const categoriesArr = yield client.fetch(catQuery);
		return { poems, categoriesArr };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Layout", slots, ['default']);

	const filterPoems = (arr, i) => {
		$$invalidate(2, filteredPoems = arr.filter(({ categories }) => {
			for (const { title } of categories) {
				return title == i ? true : false;
			}
		}));
	};

	let { poems = [] } = $$props;
	let { categoriesArr = [] } = $$props;
	let filteredPoems = poems;
	let vw;
	const writable_props = ["poems", "categoriesArr"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Layout> was created with unknown prop '${key}'`);
	});

	function onwindowresize() {
		$$invalidate(3, vw = window.innerWidth);
	}

	const click_handler = title => filterPoems(poems, title);
	const click_handler_1 = () => $$invalidate(2, filteredPoems = poems);

	$$self.$$set = $$props => {
		if ("poems" in $$props) $$invalidate(0, poems = $$props.poems);
		if ("categoriesArr" in $$props) $$invalidate(1, categoriesArr = $$props.categoriesArr);
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		__awaiter,
		client,
		preload,
		filterPoems,
		poems,
		categoriesArr,
		filteredPoems,
		vw
	});

	$$self.$inject_state = $$props => {
		if ("poems" in $$props) $$invalidate(0, poems = $$props.poems);
		if ("categoriesArr" in $$props) $$invalidate(1, categoriesArr = $$props.categoriesArr);
		if ("filteredPoems" in $$props) $$invalidate(2, filteredPoems = $$props.filteredPoems);
		if ("vw" in $$props) $$invalidate(3, vw = $$props.vw);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		poems,
		categoriesArr,
		filteredPoems,
		vw,
		filterPoems,
		$$scope,
		slots,
		onwindowresize,
		click_handler,
		click_handler_1
	];
}

class Layout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { poems: 0, categoriesArr: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Layout",
			options,
			id: create_fragment.name
		});
	}

	get poems() {
		throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set poems(value) {
		throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get categoriesArr() {
		throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set categoriesArr(value) {
		throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Layout;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2xheW91dC5jNTJjMjE4Zi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9wb2Vtcy9fbGF5b3V0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIiBsYW5nPVwidHNcIj5cblx0aW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TYW5pdHlDbGllbnQnXG5cdFxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCgpIHtcblx0XHRjb25zdCBwb2VtUXVlcnkgPSBcIipbX3R5cGUgPT0gJ3BvZW0nXXtfaWQsIHNsdWcsIG5hbWUsIGNhdGVnb3JpZXNbXS0+e3RpdGxlfX1cIlxuXHRcdGNvbnN0IGNhdFF1ZXJ5ID0gXCIqW190eXBlID09ICdjYXRlZ29yeSdde19pZCwgdGl0bGV9XCJcblx0XHRjb25zdCBwb2VtcyA9IGF3YWl0IGNsaWVudC5mZXRjaChwb2VtUXVlcnkpXG5cdFx0Y29uc3QgY2F0ZWdvcmllc0FyciA9IGF3YWl0IGNsaWVudC5mZXRjaChjYXRRdWVyeSlcblx0XHRyZXR1cm4geyBwb2VtcywgY2F0ZWdvcmllc0FyciB9XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuXHR0eXBlIFNsdWcgPSB7XG5cdFx0X3R5cGU6IHN0cmluZyxcblx0XHRjdXJyZW50OiBzdHJpbmcsXG5cdH1cblxuXHRjb25zdCBmaWx0ZXJQb2VtcyA9IChhcnI6IEFycmF5PGFueT4sIGk6c3RyaW5nKSA9PiB7XG5cdFx0ZmlsdGVyZWRQb2VtcyA9IGFyci5maWx0ZXIoKHsgY2F0ZWdvcmllcyB9KSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IHsgdGl0bGUgfSBvZiBjYXRlZ29yaWVzKXtcblx0XHRcdFx0cmV0dXJuIHRpdGxlID09IGkgPyB0cnVlIDogZmFsc2Vcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0ZXhwb3J0IGxldCBwb2VtczogeyBzbHVnOiBTbHVnLCBuYW1lOiBzdHJpbmcsIF9pZDogc3RyaW5nLCBjYXRlZ29yaWVzOiBBcnJheTxhbnk+fVtdID0gW11cblx0ZXhwb3J0IGxldCBjYXRlZ29yaWVzQXJyOiB7IHRpdGxlOiBzdHJpbmcsIF9pZDogc3RyaW5nfVtdID0gW11cblxuXHRsZXQgZmlsdGVyZWRQb2VtcyA9IHBvZW1zXG5cdGxldCB2d1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlBvZW1zPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzdmVsdGU6d2luZG93IGJpbmQ6aW5uZXJXaWR0aD17dnd9Lz5cblxuPGRpdiBjbGFzcz1cInBhZ2Utd3JhcHBlclwiPlxuXG5cdDwhLS0gcG9lbXMgcmVuZGVyZWQgaGVyZSBvbiBtb2JpbGUtLT5cblx0eyNpZiB2dyA8IDY1MH1cblx0XHQ8c2xvdD48L3Nsb3Q+XG5cdHsvaWZ9XG5cbiAgPGRpdiBjbGFzcz1cInNpZGUtYmFyXCI+XG5cdFx0PGgyPlBvZW1zIGJ5IGNhdGVnb3J5PC9oMj5cblx0XHQ8ZGl2IGNsYXNzPVwiZmlsdGVyLWNvbnRcIj5cblx0XHRcdHsjZWFjaCBjYXRlZ29yaWVzQXJyIGFzIHsgdGl0bGUgfX1cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImZpbHRlci1idXR0b25cIiBvbjpjbGlja3xwcmV2ZW50RGVmYXVsdD17KCkgPT4gZmlsdGVyUG9lbXMocG9lbXMsIHRpdGxlKX0+XG5cdFx0XHRcdFx0eyB0aXRsZSB9XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0ey9lYWNofVxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImZpbHRlci1idXR0b25cIiBvbjpjbGlja3xwcmV2ZW50RGVmYXVsdD17KCkgPT4gZmlsdGVyZWRQb2VtcyA9IHBvZW1zfT5BbGw8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cbiAgICB7I2lmIHBvZW1zfVxuXHRcdFx0PHVsPlxuXHRcdFx0XHR7I2VhY2ggZmlsdGVyZWRQb2VtcyBhcyB7IG5hbWUsIHNsdWcgfX1cblx0XHRcdFx0XHR7I2lmIHNsdWd9XG5cdFx0XHRcdFx0XHQ8bGk+PGEgcmVsPXByZWZldGNoIGhyZWY9XCJwb2Vtcy97c2x1Zy5jdXJyZW50fVwiPnsgbmFtZSB9PC9hPjwvbGk+XG5cdFx0XHRcdFx0ey9pZn1cblx0XHRcdFx0ey9lYWNofVxuXHRcdFx0PC91bD5cblx0XHR7L2lmfVxuXHQ8L2Rpdj4gIFxuXG5cdDwhLS0gcG9lbXMgcmVuZGVyZWQgaGVyZSBvbiBkZXNrdG9wLS0+XG5cdHsjaWYgdncgPj0gNjUwfVxuXHRcdDxzbG90Pjwvc2xvdD5cblx0ey9pZn1cblxuPC9kaXY+XG5cbjxzdHlsZT5cblx0LnBhZ2Utd3JhcHBlciB7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0XHRncmlkLWNvbHVtbi1nYXA6IDFlbTtcblx0fVxuXG5cdC5maWx0ZXItY29udCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcblx0fVxuXG5cdC5maWx0ZXItY29udCA+IGJ1dHRvbiB7XG5cdFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tZ2FyZGVuLTYwMCk7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTVweDtcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRjb2xvcjogdmFyKC0tZ2FyZGVuLTYwMCk7XG5cdFx0bWFyZ2luOiAwIC4ycmVtIC40cmVtIDA7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdHBhZGRpbmc6IC4yZW0gLjZlbTtcblx0fVxuXG5cdC5maWx0ZXItY29udCA+IGJ1dHRvbjpob3ZlciB7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdGJhY2tncm91bmQ6IHZhcigtLWdhcmRlbi03MDApO1xuXHRcdGNvbG9yOiB2YXIoLS1nYXJkZW4tNTApO1xuXHRcdGJvcmRlci1jb2xvcjogdmFyKC0tZ2FyZGVuLTcwMCk7XG5cdH1cblxuXHQuc2lkZS1iYXIgaDIge1xuXHRcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXHRcdGNvbG9yOiB2YXIoLS1nYXJkZW4tNjAwKTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0Zm9udC1zaXplOiAxLjJyZW07XG5cdFx0bGluZS1oZWlnaHQ6IDI7XG5cdH1cblxuXHR1bCB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdFx0bGluZS1oZWlnaHQ6IDEuODtcblx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0Zm9udC1zaXplOiAxLjRyZW07XG5cdH1cblxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCl7XG5cdFx0LnBhZ2Utd3JhcHBlciB7XG5cdFx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG5cdFx0XHRncmlkLWNvbHVtbi1nYXA6IDZlbTtcblx0XHR9XG5cdH1cblxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuXHRcdC5wYWdlLXdyYXBwZXIge1xuXHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuXHRcdFx0Z3JpZC1jb2x1bW4tZ2FwOiAzZW07XG5cdFx0fVxuXHR9XG48L3N0eWxlPiJdLCJuYW1lcyI6WyJ0aGlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQW1ETyxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VFQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQU9ELEdBQWE7Ozs7Z0NBQWxCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUFDLEdBQWE7Ozs7K0JBQWxCLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUU4QyxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswREFBckIsR0FBSSxLQUFDLE9BQU87Ozs7Ozs7Ozs7c0VBQUssR0FBSTs7MkZBQXJCLEdBQUksS0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFEekMsR0FBSTs7Ozs7Ozs7Ozs7Ozs7OztnQkFBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQWpCUixHQUFFLE1BQUcsR0FBRztzQ0FPSixHQUFhOzs7O2tDQUFsQixNQUFJOzs7OzJCQU9BLEdBQUs7d0JBWVIsR0FBRSxPQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NBMUJULEdBQUUsTUFBRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBT0osR0FBYTs7OztpQ0FBbEIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FBSixNQUFJOzs7aUJBT0EsR0FBSzs7Ozs7Ozs7Ozs7OztjQVlSLEdBQUUsT0FBSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFwRW1CLFNBQUEsR0FBQUEsU0FBQSxJQUFBQSxTQUFBLENBQUEsU0FBQSxjQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUdYLE9BQU87O1FBQ3RCLFNBQVMsR0FBRyw0REFBNEQ7UUFDeEUsUUFBUSxHQUFHLG9DQUFvQztRQUMvQyxLQUFLLFNBQVMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTO1FBQ3BDLGFBQWEsU0FBUyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7V0FDeEMsS0FBSyxFQUFFLGFBQWE7Ozs7Ozs7O09BVXhCLFdBQVcsSUFBSSxHQUFlLEVBQUUsQ0FBUTtrQkFDN0MsYUFBYSxHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksVUFBVTtnQkFDMUIsS0FBSyxNQUFNLFVBQVU7V0FDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSzs7Ozs7T0FLeEIsS0FBSztPQUNMLGFBQWE7S0FFcEIsYUFBYSxHQUFHLEtBQUs7S0FDckIsRUFBRTs7Ozs7Ozs7Ozs7Z0NBb0IwRCxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUs7K0NBSXpCLGFBQWEsR0FBRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
