/* eslint-disable @typescript-eslint/no-explicit-any */
import { flip, type FlipParams } from 'svelte/animate';
import { fly, slide, type FlyParams, type SlideParams } from 'svelte/transition';

export function betterFlip(
  node: Element & { style: any },
  fromTo: { from: DOMRect; to: DOMRect },
  params: FlipParams
) {
  if (node.style.animation) node.style = null;
  return flip(node, fromTo, params);
}

export function betterFly(node: Element & { style: any }, params: FlyParams) {
  if (node.style.animation) node.style = null;
  return fly(node, params);
}

export function betterSlide(node: Element & { style: any }, params: SlideParams) {
  if (node.style.animation) node.style = null;
  return slide(node, params);
}
