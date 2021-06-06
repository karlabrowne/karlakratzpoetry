import { c as client, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, g as globals, v as validate_slots, u as urlFor, f as fade, e as element, t as text, a as claim_element, b as children, h as claim_text, j as detach_dev, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, E as noop, y as empty, w as space, P as query_selector_all, x as claim_space, q as add_render_callback, r as create_bidirectional_transition, B as transition_in, z as transition_out, H as HtmlTag, D as set_style } from './client.365c321c.js';
import { b as blocksToHtml_1 } from './blocksToHtml.3842d5d7.js';

/* src/routes/poems/index.svelte generated by Svelte v3.37.0 */

const { console: console_1 } = globals;
const file = "src/routes/poems/index.svelte";

// (38:2) {:else}
function create_else_block(ctx) {
	let div;
	let div_transition;
	let current;

	const block = {
		c: function create() {
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { style: true });
			children(div).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(div, "width", "400px");
			set_style(div, "height", "400px");
			set_style(div, "background-color", "var(--gray)");
			add_location(div, file, 38, 3, 1717);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, true);
				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(div, fade, {}, false);
			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching && div_transition) div_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(38:2) {:else}",
		ctx
	});

	return block;
}

// (36:2) {#if poemImage}
function create_if_block_2(ctx) {
	let img;
	let img_src_value;
	let img_transition;
	let current;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { alt: true, src: true, class: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "alt", /*poemImage*/ ctx[2].alt);
			if (img.src !== (img_src_value = urlFor(/*poemImage*/ ctx[2]).url())) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1gyztmg");
			add_location(img, file, 36, 3, 1626);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!img_transition) img_transition = create_bidirectional_transition(img, fade, {}, true);
				img_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!img_transition) img_transition = create_bidirectional_transition(img, fade, {}, false);
			img_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
			if (detaching && img_transition) img_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(36:2) {#if poemImage}",
		ctx
	});

	return block;
}

// (45:2) {#if backgroundTitle}
function create_if_block_1(ctx) {
	let h2;
	let t;

	const block = {
		c: function create() {
			h2 = element("h2");
			t = text(/*backgroundTitle*/ ctx[4]);
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t = claim_text(h2_nodes, /*backgroundTitle*/ ctx[4]);
			h2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "background-title");
			add_location(h2, file, 45, 3, 1907);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(45:2) {#if backgroundTitle}",
		ctx
	});

	return block;
}

// (48:2) {#if background}
function create_if_block(ctx) {
	let html_tag;
	let raw_value = blocksToHtml_1({ blocks: /*background*/ ctx[3] }) + "";
	let html_anchor;

	const block = {
		c: function create() {
			html_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			html_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			html_tag = new HtmlTag(html_anchor);
		},
		m: function mount(target, anchor) {
			html_tag.m(raw_value, target, anchor);
			insert_dev(target, html_anchor, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(html_anchor);
			if (detaching) html_tag.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(48:2) {#if background}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div2;
	let h1;
	let t1;
	let h1_transition;
	let t2;
	let div0;
	let current_block_type_index;
	let if_block0;
	let t3;
	let html_tag;
	let raw_value = blocksToHtml_1({ blocks: /*content*/ ctx[1] }) + "";
	let t4;
	let div1;
	let t5;
	let current;
	const if_block_creators = [create_if_block_2, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*poemImage*/ ctx[2]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	let if_block1 = /*backgroundTitle*/ ctx[4] && create_if_block_1(ctx);
	let if_block2 = /*background*/ ctx[3] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			div2 = element("div");
			h1 = element("h1");
			t1 = text(/*name*/ ctx[0]);
			t2 = space();
			div0 = element("div");
			if_block0.c();
			t3 = space();
			t4 = space();
			div1 = element("div");
			if (if_block1) if_block1.c();
			t5 = space();
			if (if_block2) if_block2.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1qupx5s\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { id: true, class: true });
			var div2_nodes = children(div2);
			h1 = claim_element(div2_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, /*name*/ ctx[0]);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div0 = claim_element(div2_nodes, "DIV", { id: true });
			var div0_nodes = children(div0);
			if_block0.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			t4 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", {});
			var div1_nodes = children(div1);
			if (if_block1) if_block1.l(div1_nodes);
			t5 = claim_space(div1_nodes);
			if (if_block2) if_block2.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Poems";
			attr_dev(h1, "class", "poem-title");
			add_location(h1, file, 33, 1, 1534);
			attr_dev(div0, "id", "image");
			add_location(div0, file, 34, 1, 1588);
			html_tag = new HtmlTag(t4);
			add_location(div1, file, 43, 1, 1874);
			attr_dev(div2, "id", "content");
			attr_dev(div2, "class", "svelte-1gyztmg");
			add_location(div2, file, 32, 0, 1514);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, h1);
			append_dev(h1, t1);
			append_dev(div2, t2);
			append_dev(div2, div0);
			if_blocks[current_block_type_index].m(div0, null);
			append_dev(div2, t3);
			html_tag.m(raw_value, div2);
			append_dev(div2, t4);
			append_dev(div2, div1);
			if (if_block1) if_block1.m(div1, null);
			append_dev(div1, t5);
			if (if_block2) if_block2.m(div1, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if_block0.p(ctx, dirty);
			if (/*backgroundTitle*/ ctx[4]) if_block1.p(ctx, dirty);
			if (/*background*/ ctx[3]) if_block2.p(ctx, dirty);
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!h1_transition) h1_transition = create_bidirectional_transition(h1, fade, {}, true);
				h1_transition.run(1);
			});

			transition_in(if_block0);
			current = true;
		},
		o: function outro(local) {
			if (!h1_transition) h1_transition = create_bidirectional_transition(h1, fade, {}, false);
			h1_transition.run(0);
			transition_out(if_block0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div2);
			if (detaching && h1_transition) h1_transition.end();
			if_blocks[current_block_type_index].d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
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
		const query = "*[_type == 'poem' && featured]{_id, slug, name, poemImage, content, backgroundTitle, background}";
		const featuredPoemArr = yield client.fetch(query);
		const featuredPoem = featuredPoemArr[Math.floor(Math.random() * featuredPoemArr.length)];
		return { featuredPoem };
	});
}



function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Poems", slots, []);
	let { featuredPoem } = $$props;
	console.log(featuredPoem);
	const { name, content, poemImage, background, backgroundTitle } = featuredPoem;
	const writable_props = ["featuredPoem"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Poems> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("featuredPoem" in $$props) $$invalidate(5, featuredPoem = $$props.featuredPoem);
	};

	$$self.$capture_state = () => ({
		__awaiter,
		client,
		urlFor,
		preload,
		fade,
		blocksToHtml: blocksToHtml_1,
		featuredPoem,
		name,
		content,
		poemImage,
		background,
		backgroundTitle
	});

	$$self.$inject_state = $$props => {
		if ("featuredPoem" in $$props) $$invalidate(5, featuredPoem = $$props.featuredPoem);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [name, content, poemImage, background, backgroundTitle, featuredPoem];
}

class Poems extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { featuredPoem: 5 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Poems",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*featuredPoem*/ ctx[5] === undefined && !("featuredPoem" in props)) {
			console_1.warn("<Poems> was created without expected prop 'featuredPoem'");
		}
	}

	get featuredPoem() {
		throw new Error("<Poems>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set featuredPoem(value) {
		throw new Error("<Poems>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Poems;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjAwMzQ0YzAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcG9lbXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiIGxhbmc9XCJ0c1wiPlxuXHRpbXBvcnQgeyBjbGllbnQsIHVybEZvciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2FuaXR5Q2xpZW50J1xuXHRcblx0ZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoKSB7XG5cdFx0Y29uc3QgcXVlcnkgPSBcIipbX3R5cGUgPT0gJ3BvZW0nICYmIGZlYXR1cmVkXXtfaWQsIHNsdWcsIG5hbWUsIHBvZW1JbWFnZSwgY29udGVudCwgYmFja2dyb3VuZFRpdGxlLCBiYWNrZ3JvdW5kfVwiO1xuXHRcdGNvbnN0IGZlYXR1cmVkUG9lbUFyciA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XG5cdFx0Y29uc3QgZmVhdHVyZWRQb2VtID0gZmVhdHVyZWRQb2VtQXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZlYXR1cmVkUG9lbUFyci5sZW5ndGgpXVxuXHRcdHJldHVybiB7IGZlYXR1cmVkUG9lbSB9XG5cdH07XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cblx0aW1wb3J0IHsgZmFkZSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJ1xuXHRpbXBvcnQgYmxvY2tzVG9IdG1sIGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1odG1sJ1xuXG5cdHR5cGUgU2x1ZyA9IHtcblx0XHRfdHlwZTogc3RyaW5nLFxuXHRcdGN1cnJlbnQ6IHN0cmluZyxcblx0fTtcblxuXHR0eXBlIEltYWdlID0ge1xuXHRcdF90eXBlOiBzdHJpbmcsXG5cdFx0YWx0OiBzdHJpbmcsXG5cdFx0YXNzZXQ6IGFueSxcblx0XHRjYXB0aW9uOiBzdHJpbmcsXG5cdFx0Y3JvcDogYW55LFxuXHRcdGhvdHNwb3Q6IGFueVxuXHR9XG5cblx0ZXhwb3J0IGxldCBmZWF0dXJlZFBvZW06IHsgc2x1ZzogU2x1ZywgbmFtZTogc3RyaW5nLCBfaWQ6IHN0cmluZywgY29udGVudDogQXJyYXk8YW55PiwgYmFja2dyb3VuZDogQXJyYXk8YW55PiwgYmFja2dyb3VuZFRpdGxlOiBzdHJpbmcsIHBvZW1JbWFnZTogSW1hZ2UgfTtcblx0Y29uc29sZS5sb2coZmVhdHVyZWRQb2VtKVxuXG5cdGNvbnN0IHsgbmFtZSwgY29udGVudCwgcG9lbUltYWdlLCBiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kVGl0bGUgfSA9IGZlYXR1cmVkUG9lbVxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlBvZW1zPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgaWQ9XCJjb250ZW50XCI+XG5cdDxoMSBjbGFzcz1cInBvZW0tdGl0bGVcIiB0cmFuc2l0aW9uOmZhZGU+eyBuYW1lIH08L2gxPlxuXHQ8ZGl2IGlkPVwiaW1hZ2VcIj5cblx0XHR7I2lmIHBvZW1JbWFnZX1cblx0XHRcdDxpbWcgYWx0PVwie3BvZW1JbWFnZS5hbHR9XCIgc3JjPVwieyB1cmxGb3IocG9lbUltYWdlKS51cmwoKSB9XCIgdHJhbnNpdGlvbjpmYWRlPlxuXHRcdHs6ZWxzZX1cblx0XHRcdDxkaXYgc3R5bGU9XCJ3aWR0aDogNDAwcHg7IGhlaWdodDogNDAwcHg7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1wiIHRyYW5zaXRpb246ZmFkZT48L2Rpdj5cblx0XHR7L2lmfVxuXHQ8L2Rpdj5cblx0e0BodG1sIGJsb2Nrc1RvSHRtbCh7IGJsb2NrczogY29udGVudCB9KX1cblxuXHQ8ZGl2PlxuXHRcdHsjaWYgYmFja2dyb3VuZFRpdGxlfVxuXHRcdFx0PGgyIGNsYXNzPVwiYmFja2dyb3VuZC10aXRsZVwiPnsgYmFja2dyb3VuZFRpdGxlIH08L2gyPlxuXHRcdHsvaWZ9XG5cdFx0eyNpZiBiYWNrZ3JvdW5kfVxuXHRcdFx0e0BodG1sIGJsb2Nrc1RvSHRtbCh7IGJsb2NrczogYmFja2dyb3VuZCB9KX1cblx0XHR7L2lmfVxuXHQ8L2Rpdj5cbjwvZGl2PlxuXG48c3R5bGU+XG5cdGltZyB7XG5cdFx0bWF4LXdpZHRoOiA1MDBweDtcblx0fVxuXHQjY29udGVudCB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0XHRtYXgtd2lkdGg6IDQ4Y2g7XG5cdH1cblxuXHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCl7XG5cdFx0I2NvbnRlbnQge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuXG48IS0tIFRPRE86IGltcGxpbWVudCBwb3J0YWJsZSB0ZXh0IGNvbXBvbmVudCBodHRwczovL2dpdGh1Yi5jb20vbW92aW5nYnJhbmRzL3N2ZWx0ZS1wb3J0YWJsZS10ZXh0IC0tPiJdLCJuYW1lcyI6WyJibG9ja3NUb0h0bWwiLCJ0aGlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBMkNjLEdBQVMsSUFBQyxHQUFHO29DQUFVLE1BQU0sZUFBQyxHQUFTLEtBQUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FTeEIsR0FBZTs7Ozs7O2dEQUFmLEdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQUd2Q0EsY0FBWSxHQUFHLE1BQU0saUJBQUUsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkFQbkNBLGNBQVksR0FBRyxNQUFNLGNBQUUsR0FBTzs7Ozs7Ozs7O29CQU4vQixHQUFTOzs7Ozs7cUNBU1QsR0FBZTtnQ0FHZixHQUFVOzs7Ozs7O3NCQWR5QixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQVd2QyxHQUFlO3NCQUdmLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF0RGlCLFNBQUEsR0FBQUMsU0FBQSxJQUFBQSxTQUFBLENBQUEsU0FBQSxjQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBLFNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUdYLE9BQU87O1FBQ3RCLEtBQUssR0FBRyxrR0FBa0c7UUFDMUcsZUFBZSxTQUFTLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSztRQUMxQyxZQUFZLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxlQUFlLENBQUMsTUFBTTtXQUM3RSxZQUFZOzs7Ozs7Ozs7T0FzQlgsWUFBK0k7Q0FDMUosT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZO1NBRWhCLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxlQUFlLEtBQUssWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
