import { c as create_ssr_component, a as add_attribute, b as subscribe, v as validate_component, e as each, d as escape } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
import { I as Icon } from "../../chunks/Icon.js";
/* empty css                                                   */const app = "";
const keyframes = "";
const prose = "";
function mediaQueryStore(query) {
  const store = writable(false);
  return { subscribe: store.subscribe };
}
const css = {
  code: ":root{--transition-duration:600ms}button.svelte-rv88i1.svelte-rv88i1{cursor:pointer;display:flex;align-items:center;overflow:hidden}svg.svelte-rv88i1.svelte-rv88i1{transition:transform var(--transition-duration)}.top.svelte-rv88i1.svelte-rv88i1{stroke-dasharray:40 160;transition:stroke-dashoffset var(--transition-duration)}.middle.svelte-rv88i1.svelte-rv88i1{transform-origin:50%;transition:transform var(--transition-duration)}.bottom.svelte-rv88i1.svelte-rv88i1{stroke-dasharray:40 85;transition:stroke-dashoffset var(--transition-duration)}.open.svelte-rv88i1.svelte-rv88i1{transform:rotate(45deg)}.open.svelte-rv88i1 .top.svelte-rv88i1,.open.svelte-rv88i1 .bottom.svelte-rv88i1{stroke-dashoffset:-64px}.open.svelte-rv88i1 .middle.svelte-rv88i1{transform:rotate(90deg)}",
  map: null
};
const MenuIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { onClick = () => {
    open = !open;
  } } = $$props;
  let { ariaLabel = "toggle menu" } = $$props;
  let { width = 64 } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  $$result.css.add(css);
  return `<button${add_attribute("aria-expanded", open, 0)}${add_attribute("aria-label", ariaLabel, 0)} class="accent-color md:hidden svelte-rv88i1"><svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5"${add_attribute("width", width, 0)} class="${["svelte-rv88i1", open ? "open" : ""].join(" ").trim()}"><path class="top svelte-rv88i1" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path class="middle svelte-rv88i1" d="m 30,50 h 40"></path><path class="bottom svelte-rv88i1" d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg> </button>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $small, $$unsubscribe_small;
  let $isMenuOpen, $$unsubscribe_isMenuOpen;
  let { data } = $$props;
  const navItems = [
    { title: "Landing", route: "landing" },
    { title: "About", route: "about" },
    { title: "Projects", route: "projects" },
    { title: "Blog", route: "/blog" }
  ];
  const socials = [
    {
      name: "github",
      url: "https://github.com/"
    },
    {
      name: "linkedin",
      url: "https://linkedin.com/"
    },
    {
      name: "twitter",
      url: "https://twitter.com/"
    },
    {
      name: "email",
      url: "paintersrp@gmail.com"
    }
  ];
  const isMenuOpen = writable(false);
  $$unsubscribe_isMenuOpen = subscribe(isMenuOpen, (value) => $isMenuOpen = value);
  const small = mediaQueryStore();
  $$unsubscribe_small = subscribe(small, (value) => $small = value);
  let iconSize;
  const toggleMenu = () => {
    isMenuOpen.update((n) => !n);
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  iconSize = $small ? "sm" : "lg";
  data.url;
  $$unsubscribe_small();
  $$unsubscribe_isMenuOpen();
  return `<main class="flex flex-col bg-gradient-to-l from-cyan-500 to-blue-600 min-h-screen overflow-x-hidden overflow-y-hidden w-full"> <header class="p-1 fixed top-0 right-0 justify-end z-50">${validate_component(MenuIcon, "MenuIcon").$$render($$result, { open: $isMenuOpen, onClick: toggleMenu }, {}, {})}</header>   <aside class="fixed top-1/2 right-0 transform -translate-y-1/2 md:flex flex-col items-center space-y-3 md:space-y-4 p-2 md:p-4 bg-opacity-20 bg-white rounded-l-lg z-50 hidden">${each(socials, (social) => {
    return `<a${add_attribute("href", social.url, 0)} class="" target="_blank" rel="noopener noreferrer"${add_attribute("title", social.name, 0)}>${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        size: iconSize,
        type: social.name,
        iconClass: "accent-color hover:text-amber-400 transition-all duration-300 ease-in-out"
      },
      {},
      {}
    )} </a>`;
  })}</aside>  ${$isMenuOpen ? `<div class="fixed inset-0 bg-gradient-to-l to-cyan-500 from-blue-600 flex items-center justify-center p-4 z-40"><div class="flex flex-col">${each(navItems, (item) => {
    return `<button class="text-5xl md:text-6xl font-bold accent-color hover:text-amber-300 text-center leading-tight mb-4 hover:underline">${escape(item.title)} </button>`;
  })}</div></div>` : ``}  ${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
