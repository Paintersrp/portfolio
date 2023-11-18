import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const load = async ({ params }) => {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/assets/posts/1.md": () => import("../../../../chunks/1.js"), "../../../lib/assets/posts/2.md": () => import("../../../../chunks/2.js"), "../../../lib/assets/posts/3.md": () => import("../../../../chunks/3.js") }), `../../../lib/assets/posts/${params.slug}.md`);
    console.log(post.metadata);
    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.slug }
    };
  } catch (err) {
    throw error(404, err);
  }
};
export {
  load
};
