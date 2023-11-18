import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Syntax highlighting with mdsvex",
  "date": "2021-12-01",
  "updated": "2021-12-01",
  "categories": ["sveltekit", "web", "css", "markdown"],
  "coverImage": "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg",
  "coverWidth": 16,
  "coverHeight": 9,
  "excerpt": "This post shows you how syntax highlighting works here."
};
const _3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-vtcwwv">mdsvex has automatic, built-in syntax highlighting with <a href="https://prismjs.com/" rel="nofollow">Prism.js</a>; just include the language name after the triple backticks, like so:</p> <!-- HTML_TAG_START -->${`<pre class="shiki dark-plus" style="background-color: #1E1E1E" tabindex="0"><code><span class="line"><span style="color: #D4D4D4">&#96;&#96;&#96;css</span></span>
<span class="line"><span style="color: #D4D4D4">/* Your CSS here */</span></span>
<span class="line"><span style="color: #D4D4D4">&#96;&#96;&#96;</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1rcvqzl">And that will render just like so:</p> <!-- HTML_TAG_START -->${`<pre class="shiki dark-plus" style="background-color: #1E1E1E" tabindex="0"><code><span class="line"><span style="color: #D7BA7D">.my-css-class</span><span style="color: #D4D4D4"> &#123;</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">color</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">#ffd100</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">box-sizing</span><span style="color: #D4D4D4">: </span><span style="color: #CE9178">border-box</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #6A9955">/* etc... */</span></span>
<span class="line"><span style="color: #D4D4D4">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-12xene8">Here’s how you’d do JavaScript:</p> <!-- HTML_TAG_START -->${`<pre class="shiki dark-plus" style="background-color: #1E1E1E" tabindex="0"><code><span class="line"><span style="color: #D4D4D4">&#96;&#96;&#96;js</span></span>
<span class="line"><span style="color: #D4D4D4">// You can use js or javascript for the language</span></span>
<span class="line"><span style="color: #D4D4D4">&#96;&#96;&#96;</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-bt4b12">Highlighted code sample:</p> <!-- HTML_TAG_START -->${`<pre class="shiki dark-plus" style="background-color: #1E1E1E" tabindex="0"><code><span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">invertNumberInRange</span><span style="color: #D4D4D4"> = (</span><span style="color: #9CDCFE">num</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">range</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> &#123;</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #C586C0">return</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">range</span><span style="color: #D4D4D4"> - </span><span style="color: #9CDCFE">num</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #D4D4D4">&#125;;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #DCDCAA">invertNumberInRange</span><span style="color: #D4D4D4">(</span><span style="color: #B5CEA8">25</span><span style="color: #D4D4D4">, </span><span style="color: #B5CEA8">100</span><span style="color: #D4D4D4">); </span><span style="color: #6A9955">// 75</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-t0oiww">Of course, mdsvex supports Svelte highlighting, too:</p> <!-- HTML_TAG_START -->${`<pre class="shiki dark-plus" style="background-color: #1E1E1E" tabindex="0"><code><span class="line"><span style="color: #808080">&lt;</span><span style="color: #569CD6">script</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">	</span><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">myComponent</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;$lib/components/myComponent.svelte&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #D4D4D4">	</span><span style="color: #C586C0">export</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">let</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">myProp</span><span style="color: #D4D4D4"> = </span><span style="color: #569CD6">undefined</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #808080">&lt;/</span><span style="color: #569CD6">script</span><span style="color: #808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #808080">&lt;</span><span style="color: #569CD6">div</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">	</span><span style="color: #808080">&lt;</span><span style="color: #4EC9B0">MyComponent</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">prop</span><span style="color: #D4D4D4">=</span><span style="color: #569CD6">&#123;</span><span style="color: #9CDCFE">myProp</span><span style="color: #569CD6">&#125;</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #808080">&lt;/</span><span style="color: #569CD6">div</span><span style="color: #808080">&gt;</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-7oz8om">All these colors are in the <code>_prism.scss</code> file inside <code>src/lib/assets/scss</code>, if you’d like to change them.</p>`;
});
export {
  _3 as default,
  metadata
};
