import { c as create_ssr_component, b as subscribe, v as validate_component, e as each, a as add_attribute, d as escape } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index2.js";
import { C as Content } from "../../../chunks/Content.js";
/* empty css                                                      */function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const beforeNavigate = /* @__PURE__ */ client_method("before_navigate");
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const adjustTransition = (to, directionStore, routesAbove, routesBelow, defaultDirection = 750) => {
  if (to) {
    const route = to.route.id;
    if (route) {
      if (routesAbove.includes(route)) {
        directionStore.set(750);
      } else if (routesBelow.includes(route)) {
        directionStore.set(-750);
      } else {
        directionStore.set(defaultDirection);
      }
    }
  }
};
const latestDirIn = writable(750);
const latestDirOut = writable(750);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $latestDirIn, $$unsubscribe_latestDirIn;
  let $latestDirOut, $$unsubscribe_latestDirOut;
  $$unsubscribe_latestDirIn = subscribe(latestDirIn, (value) => $latestDirIn = value);
  $$unsubscribe_latestDirOut = subscribe(latestDirOut, (value) => $latestDirOut = value);
  let { data } = $$props;
  const routesAbove = ["/", "/projects"];
  const routesBelow = [""];
  beforeNavigate(({ to }) => {
    adjustTransition(to, latestDirOut, routesAbove, routesBelow, -750);
  });
  afterNavigate(({ to }) => {
    adjustTransition(to, latestDirIn, routesAbove, routesBelow, -750);
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_latestDirIn();
  $$unsubscribe_latestDirOut();
  return `${validate_component(Content, "Content").$$render($$result, { yIn: $latestDirIn, yOut: $latestDirOut }, {}, {
    default: () => {
      return `<main class="flex-grow p-4 md:p-12 space-y-6 max-w-5xl mx-auto mt-8"><h1 class="text-5xl font-bold text-center text-white mb-12" data-svelte-h="svelte-168wkul">Latest</h1> <div class="flex gap-4"> <aside class="w-1/4" data-svelte-h="svelte-1yp1lsq">   </aside>  <section class="w-3/4"><div class="divide-y divide-gray-200">${each(data.posts, (post) => {
        return `<article class="py-5 group"><a${add_attribute("href", `/blog/${post.slug}`, 0)} class="flex flex-col md:flex-row items-center gap-4"><img${add_attribute("src", post.coverImage, 0)}${add_attribute("alt", post.title, 0)} class="object-cover w-full md:w-48 h-32 rounded-lg shadow-md transform group-hover:scale-105 transition-transform"> <div class="flex flex-col justify-between"><h2 class="text-xl font-semibold text-white group-hover:underline">${escape(post.title)}</h2> <p class="text-gray-300">${escape(post.excerpt)}</p> <time class="block mt-2 text-sm font-medium text-gray-400">${escape(new Date(post.date).toLocaleDateString(void 0, {
          year: "numeric",
          month: "long",
          day: "numeric"
        }))}</time> </div></a> </article>`;
      })}</div></section></div></main>`;
    }
  })}`;
});
export {
  Page as default
};
