import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, c as client, u as urlFor, f as fade, g as globals, e as element, t as text, a as claim_element, b as children, h as claim_text, j as detach_dev, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, p as set_data_dev, q as add_render_callback, r as create_bidirectional_transition, w as space, x as claim_space, y as empty, z as transition_out, A as check_outros, B as transition_in, H as HtmlTag, C as group_outros, D as set_style, E as noop } from './client.c79bacb6.js';
import { b as blocksToHtml_1 } from './blocksToHtml.00e050ea.js';

/* src/routes/index.svelte generated by Svelte v3.37.0 */

const { console: console_1 } = globals;
const file = "src/routes/index.svelte";

// (28:1) {:else}
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
			div = claim_element(nodes, "DIV", { style: true, class: true });
			children(div).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(div, "width", "400px");
			set_style(div, "height", "400px");
			set_style(div, "background-color", "var(--gray)");
			attr_dev(div, "class", "svelte-1vhs4na");
			add_location(div, file, 28, 2, 1318);
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
		source: "(28:1) {:else}",
		ctx
	});

	return block;
}

// (26:1) {#if mainImage}
function create_if_block_2(ctx) {
	let img;
	let img_alt_value;
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
			attr_dev(img, "alt", img_alt_value = /*mainImage*/ ctx[0].alt);
			if (img.src !== (img_src_value = urlFor(/*mainImage*/ ctx[0]).url())) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1vhs4na");
			add_location(img, file, 26, 2, 1229);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (!current || dirty & /*mainImage*/ 1 && img_alt_value !== (img_alt_value = /*mainImage*/ ctx[0].alt)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (!current || dirty & /*mainImage*/ 1 && img.src !== (img_src_value = urlFor(/*mainImage*/ ctx[0]).url())) {
				attr_dev(img, "src", img_src_value);
			}
		},
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
		source: "(26:1) {#if mainImage}",
		ctx
	});

	return block;
}

// (33:0) {#if heroTitle}
function create_if_block_1(ctx) {
	let h1;
	let t;
	let h1_transition;
	let current;

	const block = {
		c: function create() {
			h1 = element("h1");
			t = text(/*heroTitle*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, /*heroTitle*/ ctx[1]);
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-1vhs4na");
			add_location(h1, file, 33, 1, 1446);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (!current || dirty & /*heroTitle*/ 2) set_data_dev(t, /*heroTitle*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!h1_transition) h1_transition = create_bidirectional_transition(h1, fade, {}, true);
				h1_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!h1_transition) h1_transition = create_bidirectional_transition(h1, fade, {}, false);
			h1_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching && h1_transition) h1_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(33:0) {#if heroTitle}",
		ctx
	});

	return block;
}

// (37:0) {#if heroDescription}
function create_if_block(ctx) {
	let div;
	let html_tag;
	let raw_value = blocksToHtml_1({ blocks: /*heroDescription*/ ctx[2] }) + "";
	let t;
	let br;

	const block = {
		c: function create() {
			div = element("div");
			t = space();
			br = element("br");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { id: true, class: true });
			var div_nodes = children(div);
			t = claim_space(div_nodes);
			br = claim_element(div_nodes, "BR", { class: true });
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			html_tag = new HtmlTag(t);
			attr_dev(br, "class", "svelte-1vhs4na");
			add_location(br, file, 39, 2, 1589);
			attr_dev(div, "id", "hero-text");
			attr_dev(div, "class", "svelte-1vhs4na");
			add_location(div, file, 37, 1, 1515);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			html_tag.m(raw_value, div);
			append_dev(div, t);
			append_dev(div, br);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*heroDescription*/ 4 && raw_value !== (raw_value = blocksToHtml_1({ blocks: /*heroDescription*/ ctx[2] }) + "")) html_tag.p(raw_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(37:0) {#if heroDescription}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let current_block_type_index;
	let if_block0;
	let t0;
	let t1;
	let if_block2_anchor;
	let current;
	const if_block_creators = [create_if_block_2, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*mainImage*/ ctx[0]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	let if_block1 = /*heroTitle*/ ctx[1] && create_if_block_1(ctx);
	let if_block2 = /*heroDescription*/ ctx[2] && create_if_block(ctx);

	const block = {
		c: function create() {
			div = element("div");
			if_block0.c();
			t0 = space();
			if (if_block1) if_block1.c();
			t1 = space();
			if (if_block2) if_block2.c();
			if_block2_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { id: true, class: true });
			var div_nodes = children(div);
			if_block0.l(div_nodes);
			div_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			t1 = claim_space(nodes);
			if (if_block2) if_block2.l(nodes);
			if_block2_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "id", "image");
			attr_dev(div, "class", "svelte-1vhs4na");
			add_location(div, file, 24, 0, 1193);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
			insert_dev(target, t0, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_dev(target, t1, anchor);
			if (if_block2) if_block2.m(target, anchor);
			insert_dev(target, if_block2_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block0 = if_blocks[current_block_type_index];

				if (!if_block0) {
					if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block0.c();
				} else {
					if_block0.p(ctx, dirty);
				}

				transition_in(if_block0, 1);
				if_block0.m(div, null);
			}

			if (/*heroTitle*/ ctx[1]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*heroTitle*/ 2) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(t1.parentNode, t1);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (/*heroDescription*/ ctx[2]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if_blocks[current_block_type_index].d();
			if (detaching) detach_dev(t0);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(t1);
			if (if_block2) if_block2.d(detaching);
			if (detaching) detach_dev(if_block2_anchor);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);

	var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
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

	let mainImage;
	let heroTitle;
	let heroDescription;
	const query = `*[_id == "homePage"][0]`;

	onMount(() => __awaiter(void 0, void 0, void 0, function* () {
		let res = yield client.fetch(query);
		return $$invalidate(0, { mainImage, heroTitle, heroDescription } = res, mainImage, $$invalidate(1, heroTitle), $$invalidate(2, heroDescription));
	}));

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		__awaiter,
		client,
		urlFor,
		onMount,
		fade,
		blocksToHtml: blocksToHtml_1,
		mainImage,
		heroTitle,
		heroDescription,
		query
	});

	$$self.$inject_state = $$props => {
		if ("__awaiter" in $$props) __awaiter = $$props.__awaiter;
		if ("mainImage" in $$props) $$invalidate(0, mainImage = $$props.mainImage);
		if ("heroTitle" in $$props) $$invalidate(1, heroTitle = $$props.heroTitle);
		if ("heroDescription" in $$props) $$invalidate(2, heroDescription = $$props.heroDescription);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*mainImage*/ 1) {
			console.log(mainImage);
		}
	};

	return [mainImage, heroTitle, heroDescription];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYWE1MTQxNTguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgbGFuZz1cInRzXCI+XG5cdGltcG9ydCB7IGNsaWVudCwgdXJsRm9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TYW5pdHlDbGllbnQnXG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnXG5cdGltcG9ydCB7IGZhZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbidcblx0aW1wb3J0IGJsb2Nrc1RvSHRtbCBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8taHRtbCdcblxuXHRsZXQgbWFpbkltYWdlXG5cdGxldCBoZXJvVGl0bGVcblx0bGV0IGhlcm9EZXNjcmlwdGlvblxuXG5cdGNvbnN0IHF1ZXJ5ID0gYCpbX2lkID09IFwiaG9tZVBhZ2VcIl1bMF1gXG5cblx0b25Nb3VudChhc3luYyAoKSA9PiB7XG5cdFx0bGV0IHJlcyA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSlcblx0XHRyZXR1cm4geyBtYWluSW1hZ2UsIGhlcm9UaXRsZSwgaGVyb0Rlc2NyaXB0aW9uIH0gPSByZXNcblx0fSk7XG5cblx0JDogY29uc29sZS5sb2cobWFpbkltYWdlKVxuPC9zY3JpcHQ+XG5cbjxkaXYgaWQ9XCJpbWFnZVwiPlxuXHR7I2lmIG1haW5JbWFnZX1cblx0XHQ8aW1nIGFsdD1cInttYWluSW1hZ2UuYWx0fVwiIHNyYz1cInsgdXJsRm9yKG1haW5JbWFnZSkudXJsKCkgfVwiIHRyYW5zaXRpb246ZmFkZT5cblx0ezplbHNlfVxuXHRcdDxkaXYgc3R5bGU9XCJ3aWR0aDogNDAwcHg7IGhlaWdodDogNDAwcHg7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1wiIHRyYW5zaXRpb246ZmFkZT48L2Rpdj5cblx0ey9pZn1cbjwvZGl2PlxuXG57I2lmIGhlcm9UaXRsZX1cblx0PGgxIHRyYW5zaXRpb246ZmFkZT57IGhlcm9UaXRsZSB9PC9oMT5cbnsvaWZ9XG5cbnsjaWYgaGVyb0Rlc2NyaXB0aW9ufVxuXHQ8ZGl2IGlkPVwiaGVyby10ZXh0XCI+XG5cdFx0e0BodG1sIGJsb2Nrc1RvSHRtbCh7YmxvY2tzOiBoZXJvRGVzY3JpcHRpb24gfSl9XG5cdFx0PGJyPlxuXHQ8L2Rpdj5cbnsvaWZ9XG5cbjxzdHlsZT5cblx0aDEge1xuXHRcdG1hcmdpbi10b3A6IC44cmVtO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdH1cblxuXHQjaGVyby10ZXh0IHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQjaGVyby10ZXh0ID4gKiB7XG5cdFx0bWFyZ2luOiAxZW0gYXV0bztcblx0fVxuXG5cdCNpbWFnZSA+ICoge1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdG1hcmdpbi1ib3R0b206IDJyZW07XG5cdH1cblxuXHRpbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFxuXHR9XG48L3N0eWxlPlxuXG4iXSwibmFtZXMiOlsiYmxvY2tzVG9IdG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFzQmEsR0FBUyxJQUFDLEdBQUc7b0NBQVUsTUFBTSxlQUFDLEdBQVMsS0FBRSxHQUFHOzs7Ozs7Ozs7K0ZBQTVDLEdBQVMsSUFBQyxHQUFHOzs7OzJFQUFVLE1BQU0sZUFBQyxHQUFTLEtBQUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPbEMsR0FBUzs7Ozs7OzBDQUFULEdBQVM7Ozs7Ozs7Ozs7Ozs7OzBFQUFULEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQUt2QkEsY0FBWSxHQUFFLE1BQU0sc0JBQUUsR0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttRUFBckNBLGNBQVksR0FBRSxNQUFNLHNCQUFFLEdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFieEMsR0FBUzs7Ozs7OytCQU9WLEdBQVM7cUNBSVQsR0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFKZixHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFJVCxHQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWhDSCxTQUFBLEdBQUEsSUFBQSxJQUFBLElBQUEsQ0FBQSxTQUFBLGNBQUEsT0FBQSxFQUFBLFVBQUEsRUFBQSxDQUFBLEVBQUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBTVosU0FBUztLQUNULFNBQVM7S0FDVCxlQUFlO09BRWIsS0FBSzs7Q0FFWCxPQUFPLE9BQVksU0FBQSxNQUFBLENBQUEsT0FBQSxDQUFBLE9BQUEsQ0FBQTtNQUNkLEdBQUcsU0FBUyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUs7MkJBQ3pCLFNBQVMsRUFBRSxTQUFTLEVBQUUsZUFBZSxLQUFLLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBR3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
