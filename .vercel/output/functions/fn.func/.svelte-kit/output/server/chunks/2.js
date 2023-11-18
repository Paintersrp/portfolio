import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "A Markdown post with a Svelte component",
  "date": "2021-12-01",
  "updated": "2021-12-01",
  "categories": ["sveltekit", "markdown", "svelte"],
  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
  "coverWidth": 16,
  "coverHeight": 9,
  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post."
};
const _2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-ulhokh">You can inject any Svelte components you want into Markdown! Just import them in a <code>&lt;script&gt;</code> tag and then use them wherever you like.</p> <p data-svelte-h="svelte-r35kco">For that matter, you can inject any HTML anywhere! (Note that you cannot use Markdown <em>inside</em> Svelte components or HTML, however. Any opened tag must be closed before returning to Markdown.)</p>`;
});
export {
  _2 as default,
  metadata
};
