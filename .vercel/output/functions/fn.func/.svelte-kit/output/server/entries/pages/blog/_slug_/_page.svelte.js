import { c as create_ssr_component, d as escape, a as add_attribute, v as validate_component, e as each, m as missing_component } from "../../../../chunks/ssr.js";
import { C as Content } from "../../../../chunks/Content.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = data.meta;
  const { PostContent } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return ` ${$$result.head += `<!-- HEAD_svelte-1qvsyfy_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta data-key="description" name="description"${add_attribute("content", excerpt, 0)}><meta name="twitter:title"${add_attribute("content", title, 0)}><meta name="twitter:description"${add_attribute("content", excerpt, 0)}><meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:description"${add_attribute("content", excerpt, 0)}><meta property="og:image:width"${add_attribute("content", coverWidth, 0)}><meta property="og:image:height"${add_attribute("content", coverHeight, 0)}><!-- HEAD_svelte-1qvsyfy_END -->`, ""} ${validate_component(Content, "Content").$$render($$result, { yIn: 750, yOut: 750 }, {}, {
    default: () => {
      return `<article class="flex-grow flex flex-col p-4 md:p-12 space-y-6 max-w-3xl mx-auto mt-16"><figure class="flex justify-center"><img${add_attribute("src", coverImage, 0)}${add_attribute("alt", title, 0)} class="w-4/5 object-cover rounded"${add_attribute("style", `aspect-ratio: ${coverWidth} / ${coverHeight};`, 0)}></figure> <div class="text-white"><h1 class="text-4xl font-bold text-center my-8">${escape(title)}</h1> <div class="meta space-y-2 text-sm text-gray-200"><p><strong data-svelte-h="svelte-1ktaovg">Published:</strong> ${escape(date)}</p> <p><strong data-svelte-h="svelte-1ocbmfb">Updated:</strong> ${escape(updated)}</p></div></div>  <div class="prose">${validate_component(PostContent || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div> ${categories ? `<aside class="post-footer mt-12"><h2 class="text-2xl font-semibold mb-4 text-white" data-svelte-h="svelte-lwd96p">Posted in:</h2> <ul class="flex flex-wrap gap-2">${each(categories, (category) => {
        return `<li><a href="${"/blog/category/" + escape(category, true) + "/"}" class="text-blue-200 hover:text-blue-100 hover:underline">${escape(category)}</a> </li>`;
      })}</ul></aside>` : ``}</article>`;
    }
  })}`;
});
export {
  Page as default
};
