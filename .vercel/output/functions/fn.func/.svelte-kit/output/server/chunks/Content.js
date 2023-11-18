import { c as create_ssr_component } from "./ssr.js";
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { yIn } = $$props;
  let { yOut } = $$props;
  if ($$props.yIn === void 0 && $$bindings.yIn && yIn !== void 0)
    $$bindings.yIn(yIn);
  if ($$props.yOut === void 0 && $$bindings.yOut && yOut !== void 0)
    $$bindings.yOut(yOut);
  return `<div class="flex-grow flex flex-col items-center justify-center py-3 md:py-12 space-y-3 md:space-y-6 max-w-full lg:p-4 mx-auto overflow-x-hidden overflow-y-hidden w-full">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Content as C
};
