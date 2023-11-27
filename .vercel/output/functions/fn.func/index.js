globalThis.global = globalThis;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/ssr.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    for (const callback of callbacks) {
      callback(void 0);
    }
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}
function set_current_component(component5) {
  current_component = component5;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function ensure_array_like(array_like_or_iterator) {
  return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  items = ensure_array_like(items);
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component5, name) {
  if (!component5 || !component5.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(
      `<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
    );
  }
  return component5;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css3) => css3.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_ssr = __esm({
  ".svelte-kit/output/server/chunks/ssr.js"() {
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/index2.js
function error(status, body) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, body);
}
function json(data, init2) {
  const body = JSON.stringify(data);
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder.encode(body).byteLength.toString());
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
function text(body, init2) {
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    const encoded = encoder.encode(body);
    headers.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers
    });
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
var HttpError, Redirect, ActionFailure, encoder;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    HttpError = class {
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body) {
        this.status = status;
        if (typeof body === "string") {
          this.body = { message: body };
        } else if (body) {
          this.body = body;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    ActionFailure = class {
      /**
       * @param {number} status
       * @param {T} [data]
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
    encoder = new TextEncoder();
  }
});

// .svelte-kit/output/server/chunks/index.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set, update) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var subscriber_queue;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    init_ssr();
    subscriber_queue = [];
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index5 = 0;
      while (index5 < str.length) {
        var eqIdx = str.indexOf("=", index5);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index5);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index5 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index5, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index5 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/entries/pages/_layout.server.ts.js
var layout_server_ts_exports = {};
__export(layout_server_ts_exports, {
  config: () => config,
  load: () => load
});
var config, load;
var init_layout_server_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.server.ts.js"() {
    config = {
      runtime: "edge"
    };
    load = ({ url }) => {
      return {
        url: url.pathname
      };
    };
  }
});

// .svelte-kit/output/server/chunks/nav.js
var projects, navItems;
var init_nav = __esm({
  ".svelte-kit/output/server/chunks/nav.js"() {
    projects = [
      {
        id: 1,
        slug: "portfolio",
        date: "11/10/2021",
        title: "Portfolio",
        description: "Dive into my personal musings on life, technology, and continuous learning.",
        details: "This blog is a testament to my journey as a developer and thinker. Built with the sleek SvelteKit for a reactive experience and styled by TailwindCSS for visual appeal. SEO optimizations ensure my voice is heard far and wide.",
        concepts: ["User-friendly UI", "Intuitive Navigation", "Engaging Content"],
        stack: ["SvelteKit", "TailwindCSS", "SEO Auditing Tools"],
        libraries: ["DaisyUI", "Chart.js"],
        roadmap: [
          {
            version: "v2",
            description: "Interactive Features",
            status: "In Progress",
            releaseDate: "06/30/2023",
            progress: 60,
            isExpanded: false,
            developmentJourney: "The focus for Version 2.0 is on enhancing user engagement through interactive features. This phase involves integrating a real-time commenting system, introducing user polls, and improving the overall user experience based on feedback from Version 1.0.",
            featureFocus: ["Real-Time Commenting System", "User Polls", "Performance Optimization"],
            technicalChallenges: "Key challenges include implementing real-time features without compromising website performance and maintaining user privacy.",
            skillsLearned: "Currently enhancing skills in real-time web technologies and learning about user data protection and privacy laws."
          },
          {
            version: "v1",
            description: "Initial Launch",
            status: "Completed",
            releaseDate: "01/02/2022",
            progress: 100,
            isExpanded: false,
            developmentJourney: "Version 1.0 marked the official launch of the blog. The primary focus was on establishing a solid foundation with essential blogging functionalities. The journey involved extensive planning, UI/UX design iterations, and initial SEO setup.",
            featureFocus: ["Basic Blogging Functionality", "Responsive Design", "SEO Foundations"],
            technicalChallenges: "Challenges included ensuring cross-browser compatibility and implementing a responsive design that adapts to various screen sizes.",
            skillsLearned: "Gained proficiency in SvelteKit and TailwindCSS, along with a deeper understanding of SEO principles."
          }
        ],
        imgUrl: "https://source.unsplash.com/random/600x400/?website",
        repoUrl: "https://github.com/Paintersrp/portfolio",
        repoName: "portfolio",
        isExpanded: false,
        liveDemo: "https://portfolio.com"
      },
      {
        id: 2,
        slug: "blog",
        date: "11/10/2021",
        title: "Blog",
        description: "Dive into my personal musings on life, technology, and continuous learning.",
        details: "This blog is a testament to my journey as a developer and thinker. Built with the sleek SvelteKit for a reactive experience and styled by TailwindCSS for visual appeal. SEO optimizations ensure my voice is heard far and wide.",
        concepts: ["User-friendly UI", "Intuitive Navigation", "Engaging Content"],
        stack: ["SvelteKit", "TailwindCSS", "SEO Auditing Tools"],
        libraries: ["DaisyUI", "Chart.js"],
        roadmap: [
          {
            version: "v2",
            description: "Interactive Features",
            status: "In Progress",
            releaseDate: "06/30/2023",
            progress: 60,
            isExpanded: false,
            developmentJourney: "The focus for Version 2.0 is on enhancing user engagement through interactive features. This phase involves integrating a real-time commenting system, introducing user polls, and improving the overall user experience based on feedback from Version 1.0.",
            featureFocus: ["Real-Time Commenting System", "User Polls", "Performance Optimization"],
            technicalChallenges: "Key challenges include implementing real-time features without compromising website performance and maintaining user privacy.",
            skillsLearned: "Currently enhancing skills in real-time web technologies and learning about user data protection and privacy laws."
          },
          {
            version: "v1",
            description: "Initial Launch",
            status: "Completed",
            releaseDate: "01/02/2022",
            progress: 100,
            isExpanded: false,
            developmentJourney: "Version 1.0 marked the official launch of the blog. The primary focus was on establishing a solid foundation with essential blogging functionalities. The journey involved extensive planning, UI/UX design iterations, and initial SEO setup.",
            featureFocus: ["Basic Blogging Functionality", "Responsive Design", "SEO Foundations"],
            technicalChallenges: "Challenges included ensuring cross-browser compatibility and implementing a responsive design that adapts to various screen sizes.",
            skillsLearned: "Gained proficiency in SvelteKit and TailwindCSS, along with a deeper understanding of SEO principles."
          }
        ],
        imgUrl: "https://source.unsplash.com/random/600x400/?blog",
        repoUrl: "https://github.com/Paintersrp/portfolio",
        repoName: "portfolio",
        isExpanded: false,
        liveDemo: "https://blog.com"
      },
      {
        id: 3,
        slug: "predictor",
        date: "11/11/2021",
        title: "Predictor",
        description: "Harnessing the power of machine learning to forecast sports event results with enhanced accuracy.",
        details: "A sophisticated machine learning model trained on a rich dataset of historical sports statistics. It combines Scikit-learn\u2019s robust algorithms with Python\u2019s computing power to predict game outcomes, providing insights to sports enthusiasts and bettors.",
        concepts: ["Data Analysis", "Predictive Modeling", "Machine Learning Optimization"],
        stack: ["Python", "Scikit-learn", "Pandas"],
        libraries: ["NumPy", "Matplotlib", "Seaborn"],
        roadmap: [
          {
            version: "v1.0",
            description: "Initial Model Development",
            status: "Completed",
            releaseDate: "12/01/2021",
            progress: 100,
            isExpanded: false,
            developmentJourney: "The initial phase focused on developing a base predictive model...",
            featureFocus: ["Initial Model Training", "Data Gathering", "Baseline Accuracy"],
            technicalChallenges: "Challenges in data preprocessing and feature selection...",
            skillsLearned: "Advanced data analysis techniques and model optimization..."
          }
        ],
        imgUrl: "https://source.unsplash.com/random/600x400/?predictor",
        repoUrl: "https://github.com/yourusername/sports-predictor",
        repoName: "sports-predictor",
        isExpanded: false,
        liveDemo: "https://predictor.com"
      },
      {
        id: 4,
        slug: "forecaster",
        date: "11/12/2021",
        title: "Forecaster",
        description: "Optimize your inventory with our AI-powered sales forecasting tool.",
        details: "Designed to assist businesses in predicting future sales, managing inventory, and optimizing supply chain operations. It leverages state-of-the-art machine learning algorithms to analyze sales data and make precise demand forecasts.",
        concepts: ["Inventory Forecasting", "Sales Data Analysis", "Supply Chain Optimization"],
        stack: ["TensorFlow", "Keras", "NumPy", "Matplotlib"],
        libraries: ["Pandas", "Scikit-learn"],
        roadmap: [
          {
            version: "v1.0",
            description: "Initial Algorithm Development",
            status: "Completed",
            releaseDate: "01/15/2022",
            progress: 100,
            isExpanded: false,
            developmentJourney: "Initial phase focusing on developing the forecasting algorithm...",
            featureFocus: ["Algorithm Design", "Data Integration", "Initial Testing"],
            technicalChallenges: "Handling large datasets and integrating diverse data sources...",
            skillsLearned: "Deep learning techniques for time series forecasting..."
          }
        ],
        imgUrl: "https://source.unsplash.com/random/600x400/?forecast",
        repoUrl: "https://github.com/yourusername/sales-forecaster",
        repoName: "sales-forecaster",
        isExpanded: false,
        liveDemo: "https://forecaster.com"
      },
      {
        id: 5,
        slug: "gateway",
        date: "11/13/2021",
        title: "API Gateway",
        description: "A robust API gateway to streamline your services and data flow.",
        details: "Central hub for managing, routing, and scaling microservices. It includes advanced anomaly detection to safeguard against unexpected traffic spikes and potential threats, ensuring reliable and secure service operations.",
        concepts: ["Microservices Management", "Traffic Routing", "Security and Reliability"],
        stack: ["Node.js", "Express", "Elasticsearch"],
        libraries: ["Redis", "JWT", "Axios"],
        roadmap: [
          {
            version: "v1.0",
            description: "Core Gateway Functionality",
            status: "Completed",
            releaseDate: "02/20/2022",
            progress: 100,
            isExpanded: false,
            developmentJourney: "Focused on establishing core gateway functionalities...",
            featureFocus: ["Request Routing", "Load Balancing", "Security Implementation"],
            technicalChallenges: "Implementing efficient load balancing and secure data routing...",
            skillsLearned: "Node.js performance optimization and advanced security techniques..."
          }
        ],
        imgUrl: "https://source.unsplash.com/random/600x400/?api",
        repoUrl: "https://github.com/yourusername/api-gateway",
        repoName: "api-gateway",
        isExpanded: false,
        liveDemo: "https://apigateway.com"
      },
      {
        id: 6,
        slug: "reddit-clone",
        date: "11/26/2023",
        title: "Reddit Clone",
        description: "",
        details: "",
        concepts: [],
        stack: [],
        libraries: [],
        roadmap: [
          {
            version: "1",
            description: "",
            status: "",
            releaseDate: "11/26/2023",
            progress: 0,
            isExpanded: false,
            developmentJourney: "",
            featureFocus: [],
            technicalChallenges: "",
            skillsLearned: ""
          }
        ],
        imgUrl: "https://source.unsplash.com/random/600x400/?reddit",
        repoUrl: "https://github.com/Paintersrp/reddit-clone",
        repoName: "reddit-clone",
        isExpanded: false,
        liveDemo: "/"
      }
    ];
    navItems = [
      {
        title: "Home",
        route: "/"
      },
      {
        title: "Projects",
        route: void 0,
        children: projects.map((project) => ({
          title: project.title,
          route: `/${project.slug}`
        }))
      }
    ];
  }
});

// .svelte-kit/output/server/chunks/Icon.js
var AnalysisIcon, CodeIcon, CssIcon, DatabaseIcon, DjangoIcon, DownIcon, EmailIcon, GithubIcon, HtmlIcon, JavascriptIcon, LandscapeIcon, LinkedinIcon, NodeIcon, PythonIcon, ReactIcon, RightIcon, SvelteIcon, TwitterIcon, UpIcon, BabelIcon, DockerIcon, EngineerIcon, ExpressIcon, FlaskIcon, KoaIcon, SassIcon, VueIcon, WebpackIcon, TypescriptIcon, RustIcon, JavaIcon, WordpressIcon, DeepLearningIcon, RegressionIcon, ForecastingIcon, InstagramIcon, ExpandIcon, CollapseIcon, DeployedIcon, LinkIcon, Icon;
var init_Icon = __esm({
  ".svelte-kit/output/server/chunks/Icon.js"() {
    init_ssr();
    AnalysisIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"></path></svg>`;
    });
    CodeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 -960 960 960"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"></path></svg>`;
    });
    CssIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} fill="currentColor" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path></svg>`;
    });
    DatabaseIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"></path></svg>`;
    });
    DjangoIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.146 0h3.924v18.165c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.097c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39V.021z"></path></svg>`;
    });
    DownIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} fill="currentColor" viewBox="0 -960 960 960"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"></path></svg>`;
    });
    EmailIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>`;
    });
    GithubIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>`;
    });
    HtmlIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>`;
    });
    JavascriptIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg>`;
    });
    LandscapeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 -960 960 960"><path d="m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z"></path></svg>`;
    });
    LinkedinIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>`;
    });
    NodeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z"></path></svg>`;
    });
    PythonIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"></path></svg>`;
    });
    ReactIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>`;
    });
    RightIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 -960 960 960"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"></path></svg>`;
    });
    SvelteIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 98.1 118" style="enable-background:new 0 0 98.1 118;" xml:space="preserve"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} fill="currentColor"><style type="text/css">.st0 {
      fill: inherit;
    }
    .st1 {
      fill: #1d1d20;
    }
  </style><path class="st0" d="M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3
c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1
c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"></path><path class="st1" d="M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1
c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72
c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7
c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5
c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1
c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1
c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5
c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"></path></svg>`;
    });
    TwitterIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>`;
    });
    UpIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} fill="currentColor" viewBox="0 -960 960 960"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"></path></svg>`;
    });
    BabelIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 294.3 120 60" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M105.463 305.36c-.302 1.377-.792 2.396-1.453 3.075l-.472-.302c.5-1.302.755-2.056.736-2.245l-.132-.208c-.17.02-.396.472-.68 1.377l-.245.02c-.02-.17-.057-.302-.132-.434l-.113.02c-2.226 6.207-3.226 9.093-5.282 13.866-.377 1.226-.698 1.905-.98 2.037.02.132.094.208.245.2.057.604-.094 1.2-.415 1.773-.962 2.735-1.585 4.245-1.905 4.5l.208 1.302c.02.132-.057.226-.208.226l-.226.02c-.038-.358-.17-.528-.396-.5l-.113.02c-.283.453-.5.98-.66 1.585l.226-.02c.302-.2.434-.415.415-.698l.453-.038.245.094c-.208.32-.302.585-.283.773l.113.208-.283.68.02.113c.264-.02.547.057.85.245.208-.02.434-.113.68-.264.264-.02 1.207-.038 2.868-.038l.83-.283c1.02-.02 1.17.02 2.056-.057l.358-.038.2-.132.02.113c.906-.075.98-.02 1.698.075l.02.113-.5.038.02.208c.15-.02.283-.057.396-.15.132-.02.208.057.226.208a3.91 3.91 0 0 0-.698.151l-.226-.075c-.358.094-.283.113-.5.132l-.358-.075c0 .057-.02.094-.075.113.02.132.075.208.208.2l.434-.038-.2-.075c0 .057.038.094.113.094l1.868-.17.717-.15c0 .057.038.094.094.094l.34-.132.64-.057c.5-.038.5-.075 1.566-.245 0-.057.02-.094.075-.094v.094c2.056-.34 1.868-.32 2.302-.472l-.094-.226c-.585.132-.566.057-.868.094l-1.566.075-.02-.113.868-.113.32-.02.17-.132.02.113c1.226-.113 1.66.208 7.376-1 .302-.02.283-.283.472-.8-.113 0-.208-.02-.302-.075-.472.2-.717.094-1.622.245-.075 0-.132-.057-.17-.208v-.094l.868.038c.15-.02.5-.038.943-.302.094.057-.075.113.02.094l.15-.02c.094 0 .132-.075.132-.226l-.094-.208c-.585.057-.868.075-1.34.34l-.02-.113-.717.075c-.02-.226-.075-.32-.17-.32l-.377.038c-.434.038-.64.02-.85.2 0-.075-.038-.113-.075-.113l-.415.038-.245.132c0-.075-.038-.113-.075-.113l-.15.132-.02-.113-.566-.038-.132.02.02.208.302.075.264-.02a.62.62 0 0 0 .321.075l.245-.113v.094c-1.34.34-1.34.264-2.264.434-.113-.075-.2-.094-.226-.094-.094.094.113.02.057.02-.15.02-.226-.057-.245-.2l.472-.057c.038 0 .057.038.32.094.377-.2.396-.264.604-.283l-.02-.208c-1.32.264-.792.094-2.453.226h-.075l-.02-.208c2.132-.264 1.415-.113 2.132-.32 0 .075.038.113.075.113a.45.45 0 0 1 .302-.132l.15-.02c.736-.057 1 .094 2.47-.32v.094l.245-.113.226-.02c-.02-.226.32-.245.415-.264l-.02-.226c-2.585.528-3.264.377-3.98.585v-.094c-.68.132-.698.057-.868.075-.057 0-.132.057-.208.132 0-.075-.038-.113-.094-.113-.113 0-.057.038-.15.132l.15-.132-2.245.358c0-.057-.038-.094-.094-.094-1.132.245-.83.283-2.358.415-.075 0-.17.038-.283.113 0-.057-.038-.094-.113-.094l-.943.075-.623.15c0-.057-.038-.094-.113-.094-.358.094-.66.15-.906.17h-.02c-.15.02.075-.038-.038-.094l-.2.113c-.283.02-.132-.02-1.075 0-1.66.208-1.472.226-1.66.245l-.623-.038c0 .057-.02.094-.094.113-.698-.094-1.056-.208-1.075-.34.094-.66.245-1 .5-1.038l.113-.02-.113.226h.113c.226-.113.32-.226.32-.34l-.02-.226-.226.02-.02-.208a.8.8 0 0 1 .057-.434l.5-.8.02.208h.245l-.02-.208-.132-.208c.17-.15.32-.245.434-.245l-.02-.113-.32.02-.02-.32c.64-1.358.962-2.15.943-2.358l.226.094c.15-.02.226-.094.208-.245l-.226.02v-.094c-.02-.17.02-.32.075-.453.358-.358.5-.736.472-1.132.075 0 .113.038.113.113.302-.17.528-.623.698-1.377.528-.962 1.283-2.886 2.264-5.754 1.887-5.075 1.8-5.622 2.075-6.8h-.226a.7.7 0 0 1-.094.434c-.15-.057-.283-.094-.358-.094v-.094c-.038-.434.15-.962.566-1.585h.094l.2.736.226-.02c0-.057.057-.34.17-.887-.02-.113-.094-.17-.264-.2l-.208.132c-.02-.15 0-.547.02-1.207zm-2.717 3.264l.113-.02c-.17.302-.302.472-.434.5l-.02-.32a.89.89 0 0 0 .34-.15zm-.943 2.264c.226-.924.453-1.453.66-1.585l.02.113c-.113.868-.302 1.302-.566 1.34l.038.547c-.208.283-.302.5-.283.68l-.113.02-.057-.755c.113-.02.226-.132.302-.358zm-.358 1.226c.02.132-.075.434-.245.887l-.113.02-.02-.32c.132-.377.264-.566.377-.585zm-6.207 13.715l.113.208c.17-.02.245-.094.226-.226l-.02-.113-.113.02zm2.98 2.47v.094c.17-.02.34-.32.5-.906l-.226-.075c-.2.5-.264.792-.264.887zm19.092.66v.094l-.2.226.358-.132h.038l-.02-.208h-.075l-.132.113c0-.057.396-.17.094-.226-.057.094.094.113-.075.132zm.736.68l.5-.038c-.02-.132-.34-.17-.453-.17h-.075zm-9.018.2l.15.2c0-.057.02-.094.075-.094l.113.208-.472-.057c-.038-.15.02-.226.132-.245zm-1.547.17c.17-.02.283.094.283.245h-.528v-.094a.61.61 0 0 0 .245-.151zm1.207-.057l.02.113-.434.038-.02-.113zm-4.377.453c0 .057.038.094.113.094.698-.132.623-.15.962-.2.113-.02.17.057.2.2l-1.943.17.2.094-.02-.113-.736.057-.02-.113.66-.057zm2-.17v.094c-.057 0 .2.02.075.113-.415-.038-.434-.075-.736-.057v-.094zm.5-.057v.094l-.358.038v-.094zm-12.074 1.924l.02.32c-.113.02-.208-.057-.245-.208v-.094zm16.15-.283l.02.208.377-.038-.15-.094.02.113.377-.15c2.585-.283 2.886-.17 2.85-.472v-.094c-2.603.585-2.943.472-3.5.528zm4.037-.358l.377.075-.02-.208-.377-.075zm-11.168.736c.113.057-.132.113.02.094l1.32-.113.02.113c-.377.038-.623.094-.698.17 0-.075-.038-.113-.113-.113l-.566.057-.02-.113c.15-.02-.075-.02.038-.094zm6.112-.15l.113.208c.434-.094.2-.075.302-.17 0 .075.038.113.075.113l.302-.02-.02-.226-.792-.02zm-7.47.8h-.075l-.02-.208h.075zm-5.905.717l.02.113 3.47-.283-.02-.208-2.773.226-.585-.075zm3.867-.208h.038l-.02-.208h-.038zm-52.823-18.224c-2.453 2.924-3.716 4.528-3.8 4.848-1 1.038-1.5 1.66-1.434 1.868-.264.17-.377.34-.34.528-.075.02-.132-.02-.15-.094-.434.698-1.056 1.132-1.905 1.34l-.887.208c-.113.02-.17.113-.17.264l.02.113.34-.075.02.094-.755.283-1.34.302-.698.038c-.094.094.547-.02.302.057l-.868.208c-.528.132-.83.075-.868-.132l-.094.02c.057.208 0 .34-.15.377l.17-.038-.075-.32-1.585.377.17.075c-.02-.075-.094-.094-.245-.057l-.208.17-.245-.057c-.226.132-.377.208-.415.208l-.245-.057c-.66.377-.17.377-.208.377l.057.208.377-.094.585-.038-.057.245c-2.15.566-.585.245-1.17.377l-.113.02.057.208.34-.075.02.113c-.434.094-.68.2-.755.283l-.02-.113c-.566.132-1.132.566-1.698 1.283.094.415-1.132.924 4.64-.415.396-.02.623-.02.68-.038-.02-.075.02-.113.094-.132.64-.075.34.038.736-.057l1.245-.283-.264.15c-.02-.057.02-.094.075-.113.15.038.302.02.472-.02l.075.32-4.924 7.8-1.094 1.358-.528 1.792.094-.02.528-.226-.17.698.057.208.15.2c-.075.02-.094.057-.075.132l.02.113.226-.057c.32-.283.453-.547.415-.773.358.057.585.075.698.057l.02.113c-.208.057-.32.226-.34.5l.02.113.113-.02c1.792-1.943 6.15-8.603 9.66-13.13-.113-.5 1.717-1.17 5.5-2.037l.113-.02c.132.585-.15 2.02-.868 4.3-.472 1.377-.68 2.132-.66 2.245-.604 1.83-.887 2.8-.85 2.962l-1.34 4.377c-.868 2.245-1.528 4.603-1.98 7.093.075-.02.208 0 .358.038l.2-.17c.02.075.057.094.15.094l-.075-.32.585-.02c.17-.038.32-.264.434-.66-.02-.585.094-.906.358-.98.358-1.396.585-2.113.66-2.132.34-1.396.585-2.188.755-2.396.5-1.8.868-2.754 1.113-2.8l.057.226-.358.962c-.64 2.85-1.302 5.113-1.962 6.773l.2.83.113-.02c1.604-3.434 3.886-10.225 6.886-20.375a2.67 2.67 0 0 1 1.283-2.075l-.17-.17-.02-.094c.34-.075.585-.208.717-.396-.02-.075-.32-.2-.906-.34l1.773-7.584c.528-2.264.887-4.245 1.075-5.98l-.02-.113a4.09 4.09 0 0 1-1.038-.962v-.453l-.02-.094-.094.02c-1.094 1.66-3.283 4.547-6.5 8.66zm2.5 1.717c.094.396-.057 1.132-.434 2.207-.113 1.358-.604 2.132-1.453 2.34l-.02-.113-.755.283-.34.075c-.17.038-.32.038-.472-.02l-.075-.302c-.02-.113 1.056-1.622 3.283-4.5zm-1.736 4.716l.245-.057.057.208-1.98.585a.84.84 0 0 0-.32.19c-.02-.075-.17-.075-.472-.02-.057-.208.773-.5 2.47-.906zm-11.715 3.17l.264-.057-.057-.226-.264.057zm3.452-.906l.057.208-.566.038-.02-.113zM33.435 326l.02.113-.358.075-.02-.113zm-.66 1.377l.02.094-.434.094-.057-.208zm1.038-.226l.02.094-.792.2-.02-.094zm1.377-.226v.113l-2.075.472-.057-.208c1.207-.208 1.075-.132 2.113-.377zm10.395-2.415l.17.2c-.245.057-.434.132-.528.226l-.245-.038c-.377.15-.717.264-.98.32l-.226.057c-.132.038-.226-.02-.283-.15l1.566-.358zm1.113-.245L47.8 324l.02.113c-.604.132-1.075.283-1.415.453l-.02-.113c.094-.02.2-.094.302-.2zM35 327.432l.528-.113.057.208c-.226.057-.057.057-.34.2-.547.057-.434-.02-1.302.2l-.02-.113zm1.434-.245c.15-.038.245.02.264.17l-.32.075c-.132.038-.226-.02-.283-.17zM30.53 339.1l.02.113c.15-.038.208-.113.17-.264l-.02-.113c-.132.038-.2.113-.17.264zm.453 1.887c.038.132.113.2.264.15s.208-.113.17-.264l-.02-.113-.226.057zm12.036 3.245c.15-.038.226.02.264.15l.02.113-.434.094c.038-.15.038-.264.02-.34z"></path><path d="M60.488 309.34c-.98.698-2.094 1.415-3.34 2.113l.02.208c.075 0 .2-.057.34-.15.15-.02.226.057.245.2l.208-.113h.094v.094c.02.113-.773.717-2.32 1.8l.113.226h-.094l-.245-.094c0 .075-.094.132-.32.15v.094l.245.302a.85.85 0 0 1-.358-.094c-.5.038-1 .415-1.5 1.094l.113.208c.434-.396.68-.604.755-.604l.02.32c-.075 0-.2.057-.34.15l.283.396a8.57 8.57 0 0 1 1.679-1.434c.302.094.472.2.472.283l.226-.02c1.698-1.245 3.358-2.132 5-2.68l.02.208c-.302.453-.5.68-.623.698a1.07 1.07 0 0 0 .132.415c.02.283-.717 2.17-2.226 5.66-3.452 8.093-6.34 14.092-8.678 17.98 0 .075.057.2.15.32.585-.132.943-.283 1.094-.415h.094l.02.208.245-.02.208-.113c0 .057.075.094.226.075l.02.226c.02.208-.113.528-.358.98-.245.264-.5.83-.773 1.68l.02.113.226-.02c.943-1.056 1.64-2.075 2.132-3.094 2.735-.8 4.8-1.585 6.263-2.358 1.472-.132 2.566-.5 3.32-1.132l-.02-.113-.566.17-.113.02-.02-.113c1.075-.15 1.8-.396 2.207-.717 2.075-1.604 3.64-2.735 4.716-3.396 3.283-2.415 4.83-4.716 4.64-6.942-.02-.226-.736-1.132-2.17-2.717-.02-.302.472-.736 1.472-1.302l2.868-2.5c.64-.8 1.02-2.132 1.132-3.962l-.038-.415c-.113-1.264-1.038-2.283-2.773-3.075-1.038-.698-2.886-1.075-5.546-1.15-2.15.15-5.037.943-8.603 2.34zm15.356.15l-.113.226-3.17-1.34c2.132.094 3.226.453 3.283 1.113zm-12.866 8.83c.226-1.2.472-1.85.736-2l2.396-5.358c-.02-.32.472-.585 1.5-.773l.34-.038.02.32c1.02-.17 1.64-.264 1.905-.283 1.887-.17 2.868.226 2.943 1.132l.226-.02-.038-.5.226-.02c.547.302.83.66.868 1.094.02.302-.132.68-.453 1.132-.15.02-.226-.094-.245-.302l-.226.02-.075.64c-.962 1.453-1.64 2.188-2.075 2.226-.377.528-.623.792-.736.792-.302.358-1.113.98-2.453 1.83-.453.038-2.094.68-4.943 1.924a.92.92 0 0 0-.453-.057l-.02-.208c-.038-.396.15-.906.547-1.547zm13.168-6.603l.02.226c-.113 0-.32-.34-.66-1.02l-.02-.208c.208-.02.434.32.66 1zm-20.903 2.566l.02.113c-.075 0-.2.057-.34.132h-.094l-.02-.208zm6.924-.17l.02.32c-.113 0-.245.17-.415.453l-.02-.208c.2-.245.283-.434.283-.566zm-1.075 2.226l.038.415-.113.02-.038-.415zm-.264.773c-.02.358-.113.547-.283.566l-.113.02c.132-.245.2-.434.17-.566zm-.5 1.113l.02.113-.2.34-.226.02-.02-.113c.226-.02.34-.132.32-.358zm-.472 1l-.075.547h-.094l-.038-.547zm11.62.396l.472.283c.02.132-.057.226-.208.226-.208-.132-.358-.2-.472-.17v-.32zm-9.093 1.207l.02.208-.453.038-.02-.208zm7.34.773c.32.15.472.283.5.396v.094c-.302.02-.585-.132-.85-.472zm-9.452 2.32c1.283-.113 3.3-.717 6.075-1.8l.698-.057c1.396-.113 2.434.15 3.132.8l.038.415c-.5 1.472-1.075 2.34-1.698 2.603l-2.85 2.302c-2.132 1.396-3.283 2.094-3.47 2.113-3.396 1.868-5.5 2.83-6.34 2.905l-.113.02c.075-.396 1.585-3.5 4.528-9.3zm3.075-1.226l.02.113-.453.038-.02-.113zm10.282-.472l.075.868c-.113.208-.208.32-.32.34l-.132-1.472c.245.075.377.17.377.264zm-17.413 7.395c-.15.717-.302 1.094-.453 1.094v-.094c-.057-.34.094-.68.453-1zm2.85 4.037c.83-.15 3.113-1.34 6.848-3.584l.02.208c0 .094-.302.377-.962.83-1.887.943-3.018 1.566-3.358 1.887-2.056.717-3.075 1.17-3.056 1.34-1.83.717-3.018 1.245-3.603 1.585-.132.02-.34-.038-.585-.17-.038-.377.132-.66.5-.887a2.08 2.08 0 0 1 .906.132c.34-.17.924-.358 1.773-.585l-.02-.208-.698.057c.075-.132.736-.434 1.962-.924l.34-.038v.094c-.585.057-.906.226-.98.528.02.132.094.208.245.2.472-.226.68-.396.68-.453zm-3.528-2.585v.094c.02.15-.057.245-.208.245l-.02-.113c0-.094.075-.2.226-.226zm5.358 1.472c-.264.02-.773.245-1.528.66l-.113.02-.02-.208c.547-.057 1.038-.264 1.415-.64.15-.02.226.038.245.17zm-5.546 1.547l.34-.038.02.113c-.075 0-.2.057-.34.132l-.226.02c-.02-.113.057-.2.208-.226zm-2.283 1.264l.226.094c-.075.66-.283 1-.585 1.02-.264-.113-.5-.17-.698-.15l-.02-.32c-.02-.113.057-.2.208-.226.15-.02.226.094.245.302.377-.472.585-.717.623-.717zm-36.995-26.96c-1.283.943-2.754 1.868-4.396 2.773l.02.283c.113 0 .245-.075.434-.17.2-.02.302.057.302.245l.302-.17.15-.02.02.132c.02.132-1.02.943-3.075 2.396l.17.264-.15.02-.32-.113c0 .094-.132.15-.434.17l.02.15.34.377c-.113 0-.264-.02-.453-.094-.66.057-1.32.547-1.962 1.453l.17.264c.566-.5.887-.773.98-.773l.038.415c-.094 0-.245.075-.434.17l.358.528c.68-.736 1.415-1.358 2.245-1.868.415.113.623.226.623.377l.302-.02c2.207-1.64 4.396-2.8 6.565-3.547l.02.283c-.396.604-.68.906-.83.924.02.208.094.377.208.547.038.377-.943 2.85-2.943 7.452-4.565 10.678-8.376 18.564-11.45 23.695 0 .094.075.245.17.415.755-.2 1.245-.358 1.453-.547l.17-.02.02.283.283-.02.302-.17c0 .094.113.132.302.113l.02.283c.02.283-.132.717-.5 1.302-.32.358-.64 1.094-1 2.207l.02.132.283-.02c1.226-1.377 2.17-2.735 2.8-4.056 3.603-1.056 6.34-2.094 8.244-3.113 1.905-.17 3.377-.66 4.358-1.5l-.02-.15-.717.208-.17.02-.02-.15c1.396-.208 2.377-.528 2.905-.943 2.735-2.113 4.792-3.603 6.188-4.5 4.32-3.17 6.358-6.226 6.112-9.13-.02-.302-.98-1.5-2.85-3.566-.038-.396.623-.962 1.943-1.717l3.754-3.3c.83-1.075 1.34-2.8 1.5-5.207l-.057-.566c-.15-1.68-1.358-3.037-3.66-4.075-1.358-.924-3.792-1.415-7.3-1.472-2.886.264-6.697 1.283-11.376 3.094zm20.224.245l-.113.283L32 307.17c2.792.113 4.226.604 4.3 1.472zm-16.94 11.62c.283-1.547.604-2.434.962-2.64l3.132-7.037c-.038-.434.623-.773 2-1l.453-.038.038.396 2.5-.358c2.5-.208 3.773.283 3.886 1.5l.283-.02-.057-.717.302-.02c.736.396 1.132.887 1.17 1.472.038.396-.17.887-.64 1.472-.2.02-.302-.113-.32-.396l-.302.02-.075.85c-1.264 1.887-2.17 2.85-2.735 2.905-.5.698-.83 1.056-.962 1.075-.396.472-1.472 1.283-3.245 2.415-.585.057-2.754.887-6.5 2.528-.2-.094-.377-.113-.604-.094l-.02-.264c-.038-.547.2-1.226.736-2.056zm17.337-8.678l.02.264c-.15.02-.434-.434-.85-1.34l-.02-.264c.264-.038.547.415.85 1.34zM9.16 314.938l.02.132c-.094 0-.245.075-.434.17l-.15.02-.02-.264zm9.112-.226l.038.415c-.132.02-.32.208-.547.604l-.02-.283c.264-.32.396-.566.396-.736zm-1.396 2.943l.057.566-.15.02-.057-.566zm-.358 1.02c-.038.472-.15.717-.396.736l-.15.02c.17-.32.264-.547.245-.717zm-.623 1.472l.02.132-.264.453-.283.02-.02-.132c.283-.02.415-.17.396-.453zm-.64 1.32l-.075.698-.15.02-.057-.698zm15.3.5l.623.377a.26.26 0 0 1-.264.32c-.264-.17-.472-.245-.623-.245l-.038-.415zm-11.98 1.604l.02.264-.585.057v-.264zm9.66.98c.415.2.623.377.64.528l.02.132c-.396.038-.755-.17-1.094-.623zm-12.45 3.056c1.698-.15 4.377-.943 8.018-2.377l.887-.075c1.85-.15 3.226.2 4.132 1.056l.057.566c-.68 1.962-1.434 3.094-2.245 3.452l-3.773 3c-2.8 1.85-4.32 2.773-4.547 2.792-4.47 2.47-7.263 3.735-8.34 3.83l-.17.02c.15-.528 2.132-4.603 5.98-12.263zm4.075-1.604l.02.132-.604.057-.02-.132zm13.545-.604l.094 1.113c-.132.302-.264.453-.415.453l-.17-1.962c.32.132.472.264.5.396zm-22.96 9.735c-.2.962-.396 1.453-.604 1.472l-.02-.132c-.038-.5.17-.924.623-1.34zm3.773 5.32c1.094-.208 4.094-1.792 9.018-4.716l.02.264c.02.113-.415.472-1.264 1.094-2.5 1.226-3.98 2.075-4.415 2.5-2.717.943-4.056 1.528-4.037 1.754-2.415.962-4 1.66-4.754 2.094-.17.02-.434-.057-.773-.208-.038-.5.17-.887.66-1.207a2.4 2.4 0 0 1 1.207.189c.453-.226 1.226-.5 2.34-.755l-.02-.283-.887.075c.113-.15.962-.547 2.585-1.207l.453-.038.02.132c-.755.057-1.2.302-1.283.698.02.17.113.264.302.245.547-.377.83-.585.83-.64zm-4.64-3.415l.02.132a.26.26 0 0 1-.264.32l-.02-.132c-.02-.17.075-.283.264-.32zm7.056 1.924c-.358.038-1.02.32-2.02.887l-.15.02-.02-.283c.717-.057 1.34-.34 1.85-.85.208-.038.32.057.34.226zM9.313 341l.453-.038.02.15c-.113 0-.245.075-.434.17l-.283.02c-.02-.132.057-.245.245-.302zm-3 1.68l.32.132c-.113.85-.358 1.283-.792 1.32-.34-.15-.64-.208-.924-.2l-.038-.415c-.02-.17.075-.264.283-.32.2-.02.302.113.32.396.5-.623.792-.924.83-.924zM90 305.62l-.245-.094-4.018.623a1.02 1.02 0 0 0-.547-.094c-.226.02-.566.094-1.075.226l-1.943.8.15.245c.094 0 .226-.057.396-.15l.68.057-.094.64c-.623.283-1 .698-1.094 1.245-.943.415-1.415.717-1.415.906l.02.113.15-.02.264-.132.302.358.038.5c.02.15-1.585 3.528-4.792 10.112-2.773 6.34-4.226 9.8-4.377 10.433-.943.264-1.5.66-1.66 1.17.02.17.302.264.85.32v.245l-.245.415.038.5c.02.264.717.453 2.075.604 0-.094.038-.132.132-.15.02.302-.057.906-.264 1.8l.15-.02c.566-.773.83-1.302.8-1.604l.113-.02c.132-.02.283.15.453.5-.17.075-.773 1.434-1.792 4.094l.15.245.15-.02c1.264-3.188 2.056-4.962 2.377-5.3l8.584-.868.245-.15c0 .094.057.132.15.113l.264-.02.245-.15c0 .094.057.132.15.113l3.075-.264c.8-.075 1.207-.32 1.17-.736-.02-.113.472-.245 1.453-.377.094 0 .226.02.415.075 0-.075.472-.15 1.453-.245.02-.5.2-.792.5-.8l-.02-.245c-.264.02-.585.094-.943.208-.64-.038-1.056-.075-1.226-.15-.17.094-.302.15-.396.15l-2.15.075-.264.132c0-.075-.057-.113-.15-.094l-.113.02-.283.132c0-.075-.226-.132-.68-.2l-.264.15-.528.038-.02-.132c2.754-.302 4.132-.68 4.094-1.132.17-.02.264.075.283.245l.8-.208-.02-.245-6.603.2c0 .094-.038.132-.132.15l-.8-.075c-.208.02-.377.075-.5.2l-.302-.113c-.83.075-1.453.17-1.868.302a12.74 12.74 0 0 0-1.887.019l-1.5.132-.68-.075c-.038-.434.8-2.585 2.566-6.452.5-1.302.98-2.113 1.415-2.415.094 0 .226.02.415.094l1.056-.358.547.094c.906-.075 1.962-.34 3.17-.773.302-.02.528 0 .68.057l.8-.2 2.396-.208c1.02-.094 2.132-.32 3.32-.68l-.02-.245c-.453.038-.68-.038-.698-.208-.038-.34-.358-.472-.98-.415l-.02-.245.66-.2 1.736-.15-.02-.245c-.075 0-.415 0-1.075-.02l-.02-.264.68-.057c.17-.02.264-.113.245-.264-.906.02-1.358-.02-1.358-.132-6.282.302-9.414.358-9.433.17-.094 0-.226.057-.396.17l-.17-.264c1.66-3.528 2.64-5.32 2.924-5.34.02.132-.057.358-.208.66l.02.113.264-.02c.66-1.585 1.207-2.396 1.68-2.434 1.962-.17-.283-.302 3.943-.962.17.075.302.113.377.094 1.66-.34 3.962-.68 6.924-1.038l-.02-.245-1.585.15-.02-.245c.2-.02.34-.075.472-.2l.02.132c.094 0 .208-.057.358-.17.264-.02.472 0 .623.075a8.6 8.6 0 0 1 1.32-.264l.98-.094c.245-.15.358-.283.34-.415v-.113c-.245.02-.528 0-.868-.057-.02-.132.057-.226.226-.264l1.83-.17.85-.208c0 .094.057.132.113.132.094 0 .208-.057.358-.17.434.057.698.075.755.057.34-.32.736-.585 1.17-.755-.2-.2-.283-.34-.302-.472l-1.226.113c0-.094-.057-.208-.132-.377 0-.113.264-.226.83-.34l.245.094.226-.132c0 .075.057.113.132.094l.226-.132c0 .075.057.113.132.094l.113-.02-.02-.245c-.17.02-.623.02-1.34 0l-.226.15-.02-.132-9.8.8c-.094 0-.5 0-1.207-.02 0 .094-.075.15-.245.15l-.245-.113-.85.208c-.2.02-.528 0-1-.038a.96.96 0 0 1-.472.189c-.2.02 4.565-.264 4.415-.34l-.736.208-.113.02a5.82 5.82 0 0 1-1.132-.038c-.132.094-.32.17-.604.2a.82.82 0 0 1-.49-.094 22.69 22.69 0 0 1-1.83.396zm.302.755c0 .094.094.132.245.113l.02.245-.245.02a.82.82 0 0 1-.49-.094c-.132.113-.302.17-.472.2h.075l-.68-.075-.02-.113c.83-.057 1.094-.15 1.566-.283zm.623-.057l.132-.02.02.245-.377.038c0-.132.057-.226.226-.264zm1.453-.15l.02.132c-.283.02-.64.094-1.075.226l-.132.02.113-.264zm-10.716 1.226l.415-.038-.02-.245-.415.038zm2.962-.264l.15-.02.283.113c.02.17-.075.264-.245.264l-.415.038-.02-.132c-.02-.132.075-.208.245-.264zm9.5.547v.113l-.85.075v-.113zm-2.434.358v.132l-.5.038v-.132zm2.34.2l1.698-.283.868.038.02.132c-.415.038-.773.113-1.075.226 0-.094-.17-.17-.5-.208l-1.34.377c-.264-.15-.396-.264-.396-.34zm-1.68.377c.17-.02.245.057.264.226l-.717.075-.02-.245zm-1.5-.075l.02.132 4.415-.208-.02-.132zm.264.34V309l-.962.094v-.113zm-6.32 5l.02.132.283-.02c0-.094.02-.226.094-.396l-.02-.245c-.15.02-.283.2-.377.528zm-9.716 14.1l.02.113c.02.17-.075.264-.264.283l-.02-.113c-.02-.15.075-.226.264-.283zm-.245.528c.02.245-.15.85-.5 1.83l-.415.038c-.02-.17.208-.773.64-1.83zm4.547 3.943c.02.132-.208.283-.64.434l-.83-.057-.264.02-.02-.245zm.8.075l.02.113-.68.057-.02-.113z"></path></svg>`;
    });
    DockerIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"></path></svg>`;
    });
    EngineerIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M42-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H42Zm80-80h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320q-71 0-127.5 18T142-266q-9 5-14.5 14t-5.5 20v32Zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620q0-9 5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9 5.5 14.5T302-720q9 0 14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v54q0 9 5.5 14.5T422-720q9 0 14.5-5.5T442-740v-38q36 21 58 57t22 81h10q9 0 14.5 5.5T552-620q0 9-5.5 14.5T532-600h-10q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Zm300 160-6-30q-6-2-11.5-4.5T634-402l-28 10-20-36 22-20v-24l-22-20 20-36 28 10q4-4 10-7t12-5l6-30h40l6 30q6 2 12 5t10 7l28-10 20 36-22 20v24l22 20-20 36-28-10q-5 5-10.5 7.5T708-390l-6 30h-40Zm20-70q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm72-130-8-42q-9-3-16.5-7.5T716-620l-42 14-28-48 34-30q-2-5-2-8v-16q0-3 2-8l-34-30 28-48 42 14q6-6 13.5-10.5T746-798l8-42h56l8 42q9 3 16.5 7.5T848-780l42-14 28 48-34 30q2 5 2 8v16q0 3-2 8l34 30-28 48-42-14q-6 6-13.5 10.5T818-602l-8 42h-56Zm28-90q21 0 35.5-14.5T832-700q0-21-14.5-35.5T782-750q-21 0-35.5 14.5T732-700q0 21 14.5 35.5T782-650ZM362-200Z"></path></svg>`;
    });
    ExpressIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg fill="currentColor"${add_attribute("width", iconSize, 0)}${add_attribute("height", iconSize, 0)} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"></path></svg>`;
    });
    FlaskIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg fill="currentColor"${add_attribute("width", iconSize, 0)}${add_attribute("height", iconSize, 0)} viewBox="0 0 32 32" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg"><path d="M9.563 26.873c-1.22-.96-2.52-1.878-3.408-3.172-1.87-2.283-3.31-4.925-4.294-7.703-.595-1.806-.8-3.743-1.566-5.48-.802-1.26.138-2.64 1.52-3.04.615-.118 1.696-.7.39-.284-1.17.858-1.283-.78-.083-.884.82-.11 1.12-.78.84-1.382-.88-.574 2.132-1.203.616-2.06C2 1.168 5.786.84 4.852 2.774 4.63 4.26 7.498 2.5 6.832 4.218c.677.825 2.534.188 2.487 1.345.986.068 1.324.897 2.25.96.96.433 2.697.774 3.023 1.855-.95.753-3.153-1.555-3.26.53.288 3.08.214 6.252 1.34 9.185.533 1.775 1.825 3.173 2.99 4.556 1.117 1.354 2.63 2.308 4.17 3.11 1.352.638 2.81 1.06 4.283 1.326.597-.457 1.653-2.156 2.584-1.44.045.806-1.85 1.684-.09 1.595 1.035-.312 1.752.8 2.603-.204.785.93 3.26-.593 2.703 1.306-.755.487-1.856.193-2.612.863-1.247-.623-2.24.557-3.62.408-1.533.275-3.092.385-4.646.387-2.55-.2-5.153-.286-7.578-1.174-1.367-.397-2.7-1.175-3.9-1.954zm2.153.933c1.334.576 2.64 1.184 4.1 1.368 2.32.322 4.715.82 7.043.366-1.054-.476-2.143.185-3.193-.34-1.26.27-2.6-.07-3.9-.237-1.455-.648-3.026-1.094-4.388-1.936-1.703-.622.88.798 1.34.913 1.064.604-1.17-.3-1.486-.56-.892-.5-1.005-.396-.088.112l.56.314zm-2.54-1.794c1.293.48-.006-.91-.597-.83-.262-.455-1.003-.743-.48-.987-.94.326-.984-1.24-1.425-1.016-.994-.314-.387-1.426-1.57-2.11-.108-.72-1.176-1.343-1.516-2.428-.15-.556-1.207-2.15-.558-.666.552 1.43 1.524 2.653 2.334 3.875.628 1.164 1.37 2.38 2.514 3.107.386.37.758.937 1.302 1.053zm-3.724-4.09c.045-.195.236.422 0 0zm5.273 4.663c.286-.128-.412-.162 0 0zm.7.256c-.073-.353-.32.198 0 0zm.88.366c.418-.398-.645-.25 0 0zm1.506.84c.254-.375-.813-.14 0 0zm-2.89-2.015c.65-.42-.84-.006 0 0zm.66.33c-.02-.222-.235.1 0 0zm3.293 2.056c.53.334 3.092.732 1.488.137-.27.056-2.975-.766-1.488-.137zm-5.228-4.072c-.05-.222-.822-.246 0 0zm1.533.894c.4-.28-.828-.215 0 0zm1.3.8c.573-.216-.928-.217 0 0zM9.02 23.665c.62.476 2.506.06.95-.284-.707-.377-2.3-.635-1.214.227l.263.057zm4.32 2.637c.26-.44-1.086-.252 0 0zm-1.313-1.043c1.52.43-1.277-.96-.375-.16l.2.09.175.068zm2.632 1.52c1.44.014-1.3-.2 0 0zm-6.193-3.947c-.056-.268-.355.022 0 0zm8.627 5.312c.038-.484-.47.36 0 0zm-6.17-3.81c-.087-.255-.45-.01 0 0zm-2.32-1.67c.826-.05-1.13-.364 0 0zM5.856 20.89c-.103-.396-.898-.712 0 0zm7.212 4.577c-.15-.173-.07.037 0 0zm4.488 2.755c-.014-.264-.244.1 0 0zm-4.885-3.165c.08-.34-.705-.103 0 0zm-3.344-2.12c.615-.065-.985-.415 0 0zm5.656 3.515c.958-.38-.933-.185 0 0zm-2.942-1.997c1.103.142-1.313-.75-.243-.08l.243.08zm3.835 2.358c1.03-.615.69 1.443 1.748.174 1.043-.762-.9.942.384.136.93-.622 2.303.295 3.17.593.624-.03 1.23.54 1.87.193 1.23-.332-2.408-.492-1.454-1.08-1.126.328-1.958-.39-2.513-1.112-1.264-.292-2.724-.938-3.355-2.056-.257-.42.37.06-.222-.627-.76-.677-1.14-1.446-1.652-2.27-.61-.325-.683-1.284-.744-.032.005-.79-.737-1.323-.92-1.102-.003-.76.795-.38.236-.942-.12-.79-.516-1.61-.634-2.502-.185-.43-.026-1.35-.63-.377-.22 1.027-.073-1.262.27-.508.45-.77-.162-.68-.186-.573.293-.65.186-1.572-.077-1.22.156-.69.247-2.535-.233-2.208.29-.72.552-3.297-.712-2.315-.512.007-1.398.186-1.817.394 1.313.724-.132.262-.668.146-.07.67-.6.38-1.26.387 1.058.13-.515 1.08-1.12.712-.788.376.68 1.316.015 1.607.082.437-1.207-.158-1.106.854-.764-.322-.105 1.2.278.685 1.3.352.915 1.154.948 1.917-.212.444-1.046-1.044-.186-.975-.68-1.103-.75-.4-1.315.114-.13.037 1.44.73.454 1.07.867.134.892.893 1.068 1.372.52.543.413-.6 1.037.053-.395-.58-2.09-1.637-.725-1.3-.007-.584-.247-1.056.172-1.045.415-.75-.434 1.85.5.896.258-.113.323-.75.787.06.674.664.244 1.144-.708.536.17.578 1.273.784 1.065 1.687.22.795.527.502.795.456.2.772.33.204.34-.163.962.206.736.775 1.038 1.172.663.3-.95-2.028.19-.7 1.197 1.08.45 1.533-.625 1.36.68-.055.9.92 1.75.885.776.37 1.3 1.787-.036 1.196-.463-.418-2.106-.934-.764-.14 1.238.574 2.222.916 3.416 1.637.854.6 1.223 1.308 1.547 1.447-.718.343-2.164-.274-1.1-.463-.67-.122-1.424-.46-.782.374.546.456 1.933.408 2.182.46-.21.464-.573.5.008.537-.648.346.208.4.268.597zm-1.326-3.744c-.395-.413-.497-1.185-.07-.513.22.088.7 1.263.07.513zM18.87 25.8c.246-.016.007.187 0 0zm-4.94-3.755c-.016-.624.142.48 0 0zm-.43-.577c-.497-.96.625.27 0 0zm-5.202-3.6c.292-.078.144.498 0 0zm4.14 2.244c.18-.673.2.564 0 0zm-2.925-2.034c-.206-.37.43.348 0 0zm2.51.804c-.47-1.053.334-.575.105.172l-.105-.172zm-4.328-2.886c-.2-.346-.557-1.36-.445-1.67.1.504 1.072 2.17.476.7-.658-1.24.787.402.936.712.07.307-.406-.084-.084.638-.588-.822-.347.454-.882-.37zm-1.337-.922c.055-.804.306.55 0 0zm.602.208c.287-.606.486.845 0 0zM5.5 14.182c-.498-.495-.858-.95.024-.307.34.013-.755-1.037.082-.334.88.16.434 1.443-.105.64zm.76-.02c.29-.287.154.282 0 0zm.468.15c-.44-.822.532.345 0 0zm-.93-.888c-1.448-1.29 1.82.673.236.24l-.236-.24zm4.148 2.41c-.627-.375-.167-2.644.047-1.093.61-.197-.034.802.42.792-.07.63-.275.857-.467.3zm1.534.907c.06-.684.13.468 0 0zm-.266-.264c.07-.292.006.344 0 0zM6.092 13c-.93-1.283 2.703 1.298.596.325-.22-.058-.485-.078-.596-.325zm2.955 1.566c-.088-1.08.196.18 0 0zm2.243 1.44c.173-.615.013.407 0 0zM6.235 12.51c.553-.118 2.3.97.695.31-.177-.196-.556-.107-.695-.31zm4.746 2.366c.06-1.105.33-.66.002.16l-.002-.16zm-4.335-2.75c.226-.33-.598-1.493.118-.417.3.246.897.412.38.516.815.72-.2.195-.497-.1zm4.1 2.406c.155-1.26.137.737 0 0zm-4.57-3.568c.172-.074.09.23 0 0zm1.07.637c.275-.578.508.644 0 0zm3.017 1.678c-.002-.22.057.323 0 0zm-.175-.386c-.418-1.033.4.547 0 0zm-.257-.678c-.07-.427.24.536 0 0zm.418-.68c-.288-.506.363-2.23.436-1.16-.303.834-.087 1.3.123.18.39-.88-.084 1.737-.56.98zm.43-2.566c.125-.154.028.185 0 0zM9.96 23.12c-.17-.15.022.094 0 0zm1.48.748c.823.212.82-.128.075-.23-.4-.372-1.662-.767-.532-.046.074.2.31.185.457.275zm-2.92-1.94c.453.34 1.707.958.646.13.358-.416-.685-.638-.34-.916-.88-.54-.695-.5-.078-.473-1.058-.473.153-.437.096-.68-.408-.08-2.026-.72-1.074.052-.968-.493-.23.184-.523.113-1-.27.88.754-.157.5.567.45 1.528 1.153.24.476-.17.244.922.615 1.2.8zm1.547.89c1.88.606-.923-.74 0 0zm7.92 4.798c.024-.374-.257.32 0 0zm.814.343c.434-.42.018.67.72-.103.007-.553-.02-.88-.806-.208-.217.12-.313.63.087.31zM5.878 19.84c-.133-.524-.934-.522 0 0zm.87.57c-.323-.535-1.152-.485 0 0zm4.946 2.983c.483.43 2.218.315.586.053-.24-.357-1.533-.27-.586-.053zm6.798 4.2c.743-.624-.72.278 0 0zm1.546 1.062c.005-.2-.32.087 0 0zm.003-.28c.823-.87-.797.05 0 0zM3.74 18.05c-.7-1-.436-1.45-1.112-2.267-.128-.625-1.16-2.043-.534-.54.574.88.744 2.24 1.646 2.81zm16.04 10.046c1.515-.978-.62-.426 0 0zm1.156.453c.76-.65-.48-.136 0 0zM5.62 18.735c.217-.323-.56-.042 0 0zm15.075 9.505c.734-.473-.17-.4-.133.043l.133-.043zm-9.962-6.28c-.025-.32-.388.027 0 0zm.615.354c-.196-.396-.3.062 0 0zm10.525 6.245c.94-.68-.57-.13-.197.13l.197-.13zm-.36-.174c.767-.642-.81.284 0 0zm1.84 1.225c.514-.344-.625-.11 0 0zm-17.26-11.11c.69.154 2.755 1.698 1.537.107-.624-.185-.25-1.71-.887-1.44.427.714.35 1.018-.546.568-1.127-.55-.633.272-.413.5-.3.07.397.26.31.266zm-3.14-2.48c.123-.51-1.137-2.81-.595-1.152.195.347.175 1.005.595 1.152zm5.766 3.555c-.356-.297-.017-.042 0 0zm.874.204c0-.54-.966-.22 0 0zm7.577 4.776c-.145-.37-.57-.008 0 0zm.364.266c-.054-.207-.2.04 0 0zm3.003 1.892c.29-.213-.36-.028 0 0zM4.52 16.422c.826-.32-.885-.228 0 0zM16.5 23.97c-.01-.535-.527.133 0 0zM4.193 15.66c.53-.18-.49-.118 0 0zm1.54.746c-.01-.176-.163.067 0 0zm18.788 11.52c.682-.138 2.238.347 2.49-.18-.83-.02-2.867-.585-2.963.134l.18.03.293.018zM6.223 16.53c.012-.542-.422-.02 0 0zm-4.05-2.81c-.184-1.032-.7-.156 0 0zm.965.243c.012-.332-.884-.298 0 0zm.552.27c-.16-.13-.124.163 0 0zm3.473 2.227c.164-.15-.387-.11 0 0zm-3.84-2.84c-.094-.78-1.12-.117 0 0zm-1.98-1.285c-.028-.36-.193.136 0 0zm.295-.222c-.048-.427-.253.054 0 0zm1.627.97c.688-.27-1.253-.56-.14-.05l.14.05zM25.043 26.54c.44-.404-.56-.125 0 0zm2.63 1.363c.177-.52-.445.07 0 0zM3.43 12.235c.073-.505-.546.1 0 0zm-2.316-1.55C.992 9.97 1.01 8.72 2.198 9.142c-1.587.316 1.1 1.974.76.664.668.033 1.306-.395.955.253C5.23 9.916 6.14 8.774 7.412 8.935c1-.132 2.072-.23 3.14-.63.877-.063 1.72-1.007 1.24-1.567-1.196-.1-2.448.048-3.77.312-1.465.304-2.795.883-4.273 1.13-1.44.194.29.533-.123.61-.75.26.897.436-.097.712-.614-.117-1.253-.328-.99-.975-1.38.18-2.593.752-1.502 2.156l.08.001zM4.442 9c.323-1.192 1.733.98.53.16-.143-.108-.38-.195-.53-.16zm.063-.578c.467-.347.248.195 0 0zm.593.01c.043-.548 1.358.3.217.197l-.217-.197zm.81-.326c.297-.347.086.307 0 0zm.208-.14c.494-.593 2.793-.38 1.1-.058-.45-.34-.797.2-1.1.058zm3-.463c-.074-1.62 1.492.575 0 0zm.852-.005c.31-.816 1.21-.328.145-.164.023.087-.032.422-.145.164zm-6.873 4.327c.93-.57-.987-.494 0 0zm.688.2c.326-.347-.7-.14 0 0zM1.757 10.57c.53-.41-.63-.155 0 0zm27.47 17.185c.015-.474-.406.213 0 0zm-2.79-1.905c.08-.545-.36.047 0 0zm3.56 2.09c.743.003 2.252-.23.635-.23-.254.04-1.48.03-.635.23zM4.39 11.673c.602-.04.94-.663-.117-.628-1.64-.17 1.446.562-.2.352-.222.147.314.316.327.275zm.53.268c-.063-.386-.186.205 0 0zm.63-1.676c.26-.324-.36-.087 0 0zm-2-3.344c1.074-.365 2.542-.775 3.05.18-.516-.62-.208-1.232.28-.324.69.918 1.034-.418.586-.726.51.634 1.09.934.342.04.815-.98-1.63.128-2.186.117-.267.12-2.76.636-2.07.713zm.63-1.205c.612-.462 2.118.275 1.152-.46-.095-.083-2.115.557-1.152.46zm2.232.092c.716.018-.31-.963.544-.518-.14-.458-.994-.543-1.412-.727-.236.418.48 1.25.867 1.245zm-1.84-2.026c.248-.336-.435.17 0 0zM5.48 4c1.155-.153-.294-.497-.233-.012L5.48 4zM3.776 2.67c-.813-1.062 1.53.178.703-.933-.696-.553-1.363.624-.703.933zm10.434 5.62c.373-.66-1.54-.89-.25-.234.118.04.092.28.25.234z"></path></svg>`;
    });
    KoaIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 0 512 274.847" preserveAspectRatio="xMidYMid"><path d="M25.652 0v182.498l80.622-90.882h3.665l-59.734 67.429 78.79 115.802h-25.653l-67.795-99.678-9.895 11.36v88.318H0V0zM153.01 184.73c0-59.454 38.362-92.562 88.304-92.562 45.962 0 85.409 23.496 85.409 88.29 0 59.453-38.362 92.561-88.304 92.561-45.962 0-85.409-23.496-85.409-88.29zm23.796.011c0 62.635 27.497 85.899 61.594 85.899 35.93 0 64.527-32.928 64.527-90.194 0-62.634-27.498-85.899-61.594-85.899-35.93 0-64.527 32.928-64.527 90.194zm324.184 87.216c-43.328 0-41.197-25.276-41.197-25.276v-4.984c-7.103 12.816-20.599 31.684-55.758 31.684-41.553 0-48.656-26.344-50.787-40.585-3.551-23.852 4.972-41.653 68.189-45.925 15.982-1.424 34.094-.712 38.356-.356v-59.097s3.907-32.04-37.29-32.04c-22.02 0-49.366 9.256-58.245 14.24l-1.42-2.492c4.616-2.136 26.28-14.597 64.281-14.597 51.497 0 57.535 22.785 57.535 34.89V246.68c0 23.14 16.336 22.428 16.336 22.428H512v2.848zm-90.741-.955c26.626 0 48.348-24.238 49.4-38.708v-43.772c-4.205-.361-20.672-1.808-38.19.362-37.136 4.341-44.494 17.364-42.392 43.772 1.402 17.726 6.657 38.346 31.182 38.346z"></path></svg>`;
    });
    SassIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"></path></svg>`;
    });
    VueIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} fill="currentColor" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"></path></svg>`;
    });
    WebpackIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 0 32 32"><path d="M29.54 24.663L16.57 32v-5.713l8.08-4.446zm.888-.803V8.52l-4.744 2.742v9.862zm-27.966.803L15.43 32v-5.713L7.345 21.84zm-.888-.803V8.52l4.744 2.742v9.862zM2.13 7.524L15.43 0v5.522L6.84 10.25zm27.74 0L16.57 0v5.522l8.59 4.723z"></path><path d="M15.43 25.237L7.456 20.85v-8.684l7.974 4.604zm1.14 0l7.975-4.383v-8.69L16.57 16.77zm-.57-8.8zm-8.004-5.275L16 6.763l8.004 4.4L16 15.783z"></path></svg>`;
    });
    TypescriptIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z"></path></svg>`;
    });
    RustIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 0 512 512"><path d="M508.52,249.75,486.7,236.24c-.17-2-.34-3.93-.55-5.88l18.72-17.5a7.35,7.35,0,0,0-2.44-12.25l-24-9c-.54-1.88-1.08-3.78-1.67-5.64l15-20.83a7.35,7.35,0,0,0-4.79-11.54l-25.42-4.15c-.9-1.73-1.79-3.45-2.73-5.15l10.68-23.42a7.35,7.35,0,0,0-6.95-10.39l-25.82.91q-1.79-2.22-3.61-4.4L439,81.84A7.36,7.36,0,0,0,430.16,73L405,78.93q-2.17-1.83-4.4-3.61l.91-25.82a7.35,7.35,0,0,0-10.39-7L367.7,53.23c-1.7-.94-3.43-1.84-5.15-2.73L358.4,25.08a7.35,7.35,0,0,0-11.54-4.79L326,35.26c-1.86-.59-3.75-1.13-5.64-1.67l-9-24a7.35,7.35,0,0,0-12.25-2.44l-17.5,18.72c-1.95-.21-3.91-.38-5.88-.55L262.25,3.48a7.35,7.35,0,0,0-12.5,0L236.24,25.3c-2,.17-3.93.34-5.88.55L212.86,7.13a7.35,7.35,0,0,0-12.25,2.44l-9,24c-1.89.55-3.79,1.08-5.66,1.68l-20.82-15a7.35,7.35,0,0,0-11.54,4.79l-4.15,25.41c-1.73.9-3.45,1.79-5.16,2.73L120.88,42.55a7.35,7.35,0,0,0-10.39,7l.92,25.81c-1.49,1.19-3,2.39-4.42,3.61L81.84,73A7.36,7.36,0,0,0,73,81.84L78.93,107c-1.23,1.45-2.43,2.93-3.62,4.41l-25.81-.91a7.42,7.42,0,0,0-6.37,3.26,7.35,7.35,0,0,0-.57,7.13l10.66,23.41c-.94,1.7-1.83,3.43-2.73,5.16L25.08,153.6a7.35,7.35,0,0,0-4.79,11.54l15,20.82c-.59,1.87-1.13,3.77-1.68,5.66l-24,9a7.35,7.35,0,0,0-2.44,12.25l18.72,17.5c-.21,1.95-.38,3.91-.55,5.88L3.48,249.75a7.35,7.35,0,0,0,0,12.5L25.3,275.76c.17,2,.34,3.92.55,5.87L7.13,299.13a7.35,7.35,0,0,0,2.44,12.25l24,9c.55,1.89,1.08,3.78,1.68,5.65l-15,20.83a7.35,7.35,0,0,0,4.79,11.54l25.42,4.15c.9,1.72,1.79,3.45,2.73,5.14L42.56,391.12a7.35,7.35,0,0,0,.57,7.13,7.13,7.13,0,0,0,6.37,3.26l25.83-.91q1.77,2.22,3.6,4.4L73,430.16A7.36,7.36,0,0,0,81.84,439L107,433.07q2.18,1.83,4.41,3.61l-.92,25.82a7.35,7.35,0,0,0,10.39,6.95l23.43-10.68c1.69.94,3.42,1.83,5.14,2.73l4.15,25.42a7.34,7.34,0,0,0,11.54,4.78l20.83-15c1.86.6,3.76,1.13,5.65,1.68l9,24a7.36,7.36,0,0,0,12.25,2.44l17.5-18.72c1.95.21,3.92.38,5.88.55l13.51,21.82a7.35,7.35,0,0,0,12.5,0l13.51-21.82c2-.17,3.93-.34,5.88-.56l17.5,18.73a7.36,7.36,0,0,0,12.25-2.44l9-24c1.89-.55,3.78-1.08,5.65-1.68l20.82,15a7.34,7.34,0,0,0,11.54-4.78l4.15-25.42c1.72-.9,3.45-1.79,5.15-2.73l23.42,10.68a7.35,7.35,0,0,0,10.39-6.95l-.91-25.82q2.22-1.79,4.4-3.61L430.16,439a7.36,7.36,0,0,0,8.84-8.84L433.07,405q1.83-2.17,3.61-4.4l25.82.91a7.23,7.23,0,0,0,6.37-3.26,7.35,7.35,0,0,0,.58-7.13L458.77,367.7c.94-1.7,1.83-3.43,2.73-5.15l25.42-4.15a7.35,7.35,0,0,0,4.79-11.54l-15-20.83c.59-1.87,1.13-3.76,1.67-5.65l24-9a7.35,7.35,0,0,0,2.44-12.25l-18.72-17.5c.21-1.95.38-3.91.55-5.87l21.82-13.51a7.35,7.35,0,0,0,0-12.5Zm-151,129.08A13.91,13.91,0,0,0,341,389.51l-7.64,35.67A187.51,187.51,0,0,1,177,424.44l-7.64-35.66a13.87,13.87,0,0,0-16.46-10.68l-31.51,6.76a187.38,187.38,0,0,1-16.26-19.21H258.3c1.72,0,2.89-.29,2.89-1.91V309.55c0-1.57-1.17-1.91-2.89-1.91H213.47l.05-34.35H262c4.41,0,23.66,1.28,29.79,25.87,1.91,7.55,6.17,32.14,9.06,40,2.89,8.82,14.6,26.46,27.1,26.46H407a187.3,187.3,0,0,1-17.34,20.09Zm25.77,34.49A15.24,15.24,0,1,1,368,398.08h.44A15.23,15.23,0,0,1,383.24,413.32Zm-225.62-.68a15.24,15.24,0,1,1-15.25-15.25h.45A15.25,15.25,0,0,1,157.62,412.64ZM69.57,234.15l32.83-14.6a13.88,13.88,0,0,0,7.06-18.33L102.69,186h26.56V305.73H75.65A187.65,187.65,0,0,1,69.57,234.15ZM58.31,198.09a15.24,15.24,0,0,1,15.23-15.25H74a15.24,15.24,0,1,1-15.67,15.24Zm155.16,24.49.05-35.32h63.26c3.28,0,23.07,3.77,23.07,18.62,0,12.29-15.19,16.7-27.68,16.7ZM399,306.71c-9.8,1.13-20.63-4.12-22-10.09-5.78-32.49-15.39-39.4-30.57-51.4,18.86-11.95,38.46-29.64,38.46-53.26,0-25.52-17.49-41.59-29.4-49.48-16.76-11-35.28-13.23-40.27-13.23H116.32A187.49,187.49,0,0,1,221.21,70.06l23.47,24.6a13.82,13.82,0,0,0,19.6.44l26.26-25a187.51,187.51,0,0,1,128.37,91.43l-18,40.57A14,14,0,0,0,408,220.43l34.59,15.33a187.12,187.12,0,0,1,.4,32.54H423.71c-1.91,0-2.69,1.27-2.69,3.13v8.82C421,301,409.31,305.58,399,306.71ZM240,60.21A15.24,15.24,0,0,1,255.21,45h.45A15.24,15.24,0,1,1,240,60.21ZM436.84,214a15.24,15.24,0,1,1,0-30.48h.44a15.24,15.24,0,0,1-.44,30.48Z"></path></svg>`;
    });
    JavaIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 0 384 512"><path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"></path></svg>`;
    });
    WordpressIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 0 512 512"><path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"></path></svg>`;
    });
    DeepLearningIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 9a3.49 3.49 0 0 0-3.45 3h-1.1a2.49 2.49 0 0 0-4.396-1.052L8.878 9.731l3.143-4.225a2.458 2.458 0 0 0 2.98-.019L17.339 8H16v1h3V6h-1v1.243l-2.336-2.512A2.473 2.473 0 0 0 16 3.5a2.5 2.5 0 0 0-5 0 2.474 2.474 0 0 0 .343 1.243L7.947 9.308 4.955 7.947a2.404 2.404 0 0 0-.161-1.438l3.704-1.385-.44 1.371.942.333L10 4 7.172 3l-.334.943 1.01.357-3.659 1.368a2.498 2.498 0 1 0-.682 4.117l2.085 2.688-2.053 2.76a2.5 2.5 0 1 0 .87 3.864l3.484 1.587-1.055.373.334.943L10 21l-1-2.828-.943.333.435 1.354-3.608-1.645A2.471 2.471 0 0 0 5 17.5a2.5 2.5 0 0 0-.058-.527l3.053-1.405 3.476 4.48a2.498 2.498 0 1 0 4.113.075L18 17.707V19h1v-3h-3v1h1.293l-2.416 2.416a2.466 2.466 0 0 0-2.667-.047l-3.283-4.23 2.554-1.176A2.494 2.494 0 0 0 15.95 13h1.1a3.493 3.493 0 1 0 3.45-4zm-7-7A1.5 1.5 0 1 1 12 3.5 1.502 1.502 0 0 1 13.5 2zm0 18a1.5 1.5 0 1 1-1.5 1.5 1.502 1.502 0 0 1 1.5-1.5zM1 7.5a1.5 1.5 0 1 1 2.457 1.145l-.144.112A1.496 1.496 0 0 1 1 7.5zm3.32 1.703a2.507 2.507 0 0 0 .264-.326l2.752 1.251-1.124 1.512zM2.5 19A1.5 1.5 0 1 1 4 17.5 1.502 1.502 0 0 1 2.5 19zm2.037-2.941a2.518 2.518 0 0 0-.193-.234l1.885-2.532 1.136 1.464zm3.76-1.731L6.849 12.46l1.42-1.908L11.1 11.84a2.29 2.29 0 0 0-.033 1.213zM13.5 14a1.5 1.5 0 1 1 1.5-1.5 1.502 1.502 0 0 1-1.5 1.5zm7 1a2.5 2.5 0 1 1 2.5-2.5 2.502 2.502 0 0 1-2.5 2.5zm1.5-2.5a1.5 1.5 0 1 1-1.5-1.5 1.502 1.502 0 0 1 1.5 1.5z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>`;
    });
    RegressionIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1024 1024"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M229 815c-9.2 0-18.4-3.5-25.5-10.5-14.1-14.1-14.1-36.9 0-50.9l566-566c14.1-14.1 36.9-14.1 50.9 0 14.1 14.1 14.1 36.9 0 50.9l-566 566c-7 7-16.2 10.5-25.4 10.5z"></path><path d="M212 675m-31 0a31 31 0 1 0 62 0 31 31 0 1 0-62 0Z"></path><path d="M241 610m-31 0a31 31 0 1 0 62 0 31 31 0 1 0-62 0Z"></path><path d="M309 605m-31 0a31 31 0 1 0 62 0 31 31 0 1 0-62 0Z"></path><path d="M360 482m-31 0a31 31 0 1 0 62 0 31 31 0 1 0-62 0Z"></path><path d="M456 473m-31 0a31 31 0 1 0 62 0 31 31 0 1 0-62 0Z"></path><path d="M516 391m-31 0a31 31 0 1 0 62 0 31 31 0 1 0-62 0Z"></path><path d="M607 516m-31 0a31 31 0 1 0 62 0 31 31 0 1 0-62 0Z"></path><path d="M680 413m-31 0a31 31 0 1 0 62 0 31 31 0 1 0-62 0Z"></path><path d="M794 383m-31 0a31 31 0 1 0 62 0 31 31 0 1 0-62 0Z"></path><path d="M399 733m-31 0a31 31 0 1 0 62 0 31 31 0 1 0-62 0Z"></path><path d="M478 596m-31 0a31 31 0 1 0 62 0 31 31 0 1 0-62 0Z"></path><path d="M703 231m-31 0a31 31 0 1 0 62 0 31 31 0 1 0-62 0Z"></path></svg>`;
    });
    ForecastingIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M18,75.526c0.828,0,1.5-0.672,1.5-1.5v-0.1c0-0.828-0.672-1.45-1.5-1.45s-1.5,0.722-1.5,1.55S17.172,75.526,18,75.526z"></path><path d="M18,70.578c0.828,0,1.5-0.671,1.5-1.5v-0.1c0-0.828-0.672-1.45-1.5-1.45s-1.5,0.722-1.5,1.55  C16.5,69.907,17.172,70.578,18,70.578z"></path><path d="M23.418,70.56c0.791-0.041,1.42-0.695,1.42-1.497l-0.001-0.101c-0.011-0.79-0.633-1.397-1.415-1.436l-0.104-0.004  c-0.829,0-1.5,0.712-1.5,1.54s0.671,1.5,1.5,1.5L23.418,70.56z"></path><path d="M28.738,67.52l-0.104-0.002c-0.828,0-1.5,0.701-1.5,1.529s0.672,1.5,1.5,1.5l0.101-0.002  c0.801-0.031,1.439-0.689,1.439-1.498l-0.001-0.102C30.151,68.158,29.523,67.549,28.738,67.52z"></path><path d="M34.055,67.514l-0.102-0.002c-0.829,0-1.501,0.691-1.501,1.521c0,0.827,0.672,1.5,1.501,1.5l0.1-0.003  c0.81-0.02,1.46-0.684,1.46-1.497l-0.002-0.104C35.478,68.145,34.843,67.533,34.055,67.514z"></path><path d="M39.371,67.507l-0.102-0.001c-0.828,0-1.5,0.682-1.5,1.51s0.672,1.5,1.5,1.5l0.101-0.001  c0.819-0.011,1.479-0.678,1.479-1.499l-0.002-0.104C40.804,68.131,40.162,67.518,39.371,67.507z"></path><path d="M44.688,70.5c0.828,0,1.5-0.672,1.5-1.5s-0.672-1.5-1.5-1.5h-0.1c-0.829,0-1.5,0.672-1.5,1.5s0.671,1.5,1.5,1.5H44.688z"></path><path d="M82,75.526c0.828,0,1.5-0.672,1.5-1.5s-0.672-1.55-1.5-1.55s-1.5,0.622-1.5,1.45v0.1C80.5,74.854,81.172,75.526,82,75.526z"></path><path d="M82,70.578c0.828,0,1.5-0.671,1.5-1.5c0-0.828-0.672-1.55-1.5-1.55s-1.5,0.622-1.5,1.45v0.1  C80.5,69.907,81.172,70.578,82,70.578z"></path><path d="M76.683,67.522l-0.104,0.004c-0.782,0.038-1.404,0.646-1.415,1.436l-0.001,0.101c0,0.802,0.629,1.456,1.42,1.497  l0.101,0.003c0.829,0,1.5-0.672,1.5-1.5S77.512,67.522,76.683,67.522z"></path><path d="M71.365,67.518l-0.104,0.002c-0.785,0.029-1.413,0.639-1.436,1.426l-0.001,0.102c0,0.809,0.639,1.467,1.439,1.498  l0.101,0.002c0.828,0,1.5-0.672,1.5-1.5S72.193,67.518,71.365,67.518z"></path><path d="M66.047,67.512l-0.102,0.002c-0.788,0.02-1.423,0.631-1.456,1.415l-0.002,0.104c0,0.813,0.65,1.478,1.46,1.497l0.1,0.003  c0.829,0,1.501-0.673,1.501-1.5C67.548,68.203,66.876,67.512,66.047,67.512z"></path><path d="M60.73,67.506l-0.102,0.001c-0.791,0.011-1.433,0.624-1.477,1.405l-0.002,0.104c0,0.821,0.66,1.488,1.479,1.499l0.101,0.001  c0.828,0,1.5-0.672,1.5-1.5S61.559,67.506,60.73,67.506z"></path><path d="M55.412,70.5c0.829,0,1.5-0.672,1.5-1.5s-0.671-1.5-1.5-1.5h-0.1c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5H55.412z"></path><path d="M48.5,74c0,0.828,0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-0.05c0-0.828-0.672-1.5-1.5-1.5s-1.5,0.672-1.5,1.5V74z"></path><path d="M48.5,69.045c0,0.828,0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5v-0.089c0-0.829-0.672-1.5-1.5-1.5s-1.5,0.671-1.5,1.5V69.045z"></path><path d="M50,65.55c0.828,0,1.5-0.672,1.5-1.5V64c0-0.829-0.672-1.5-1.5-1.5s-1.5,0.671-1.5,1.5v0.05  C48.5,64.878,49.172,65.55,50,65.55z"></path><path d="M18,77c-4.971,0-9,4.029-9,9s4.029,9,9,9s9-4.029,9-9S22.971,77,18,77z M18,92c-3.309,0-6-2.691-6-6s2.691-6,6-6  s6,2.691,6,6S21.309,92,18,92z"></path><path d="M50,77c-4.971,0-9,4.029-9,9s4.029,9,9,9s9-4.029,9-9S54.971,77,50,77z M50,92c-3.309,0-6-2.691-6-6s2.691-6,6-6  s6,2.691,6,6S53.309,92,50,92z"></path><path d="M82,77c-4.971,0-9,4.029-9,9s4.029,9,9,9s9-4.029,9-9S86.971,77,82,77z M82,92c-3.309,0-6-2.691-6-6s2.691-6,6-6  s6,2.691,6,6S85.309,92,82,92z"></path><path d="M50,5C34.533,5,22,17.535,22,33s12.533,28,28,28c15.465,0,28-12.535,28-28S65.465,5,50,5z M50,58c-13.785,0-25-11.215-25-25  S36.215,8,50,8s25,11.215,25,25S63.785,58,50,58z"></path><path d="M65,44.442L65,44.442l-26.058-0.001c0.128-0.341,0.328-0.872,0.586-1.558c0.458-1.219,1.091-2.9,1.786-4.75  c0.541-1.462,1.857-2.996,3.551-4.133c1.688-1.144,3.726-1.883,5.563-1.953c2.398-0.104,4.7-0.711,6.58-1.652  c0.94-0.475,1.777-1.033,2.468-1.692c0.687-0.659,1.244-1.429,1.519-2.352c0.218-0.735,0.419-1.421,0.599-2.026l1.195,2.229  c0.393,0.73,1.301,1.004,2.031,0.613c0.73-0.393,1.004-1.301,0.613-2.031l-2.924-5.451c-0.189-0.354-0.506-0.611-0.89-0.727  s-0.79-0.074-1.144,0.115l-5.447,2.93c-0.729,0.393-1.003,1.302-0.61,2.031c0.393,0.73,1.302,1.004,2.032,0.611l2.282-1.229  c-0.183,0.621-0.392,1.326-0.615,2.086c-0.073,0.258-0.294,0.633-0.715,1.033c-0.624,0.602-1.663,1.227-2.916,1.686  c-1.251,0.461-2.713,0.768-4.184,0.828c-2.521,0.11-5.014,1.051-7.116,2.465c-2.097,1.422-3.829,3.324-4.68,5.563  c-0.817,2.17-1.545,4.104-2.008,5.335V20.788c0-0.828-0.672-1.5-1.5-1.5s-1.5,0.672-1.5,1.5v25.153c0,0.4,0.156,0.777,0.439,1.061  S34.6,47.44,35,47.44h30c0.828,0,1.5-0.671,1.5-1.499C66.5,45.112,65.828,44.442,65,44.442z"></path><path d="M49,40.611c0,1.382,1.119,2.5,2.5,2.5s2.5-1.118,2.5-2.5c0-1.378-1.119-2.5-2.5-2.5S49,39.233,49,40.611z"></path><path d="M43.499,26.11c1.38,0,2.501-1.118,2.501-2.499c0-1.384-1.121-2.5-2.501-2.5c-1.381,0-2.499,1.116-2.499,2.5  C41,24.992,42.118,26.11,43.499,26.11z"></path></svg>`;
    });
    InstagramIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>`;
    });
    ExpandIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"></path></svg>`;
    });
    CollapseIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="m356-160-56-56 180-180 180 180-56 56-124-124-124 124Zm124-404L300-744l56-56 124 124 124-124 56 56-180 180Z"></path></svg>`;
    });
    DeployedIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)} viewBox="0 -960 960 960"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"></path></svg>`;
    });
    LinkIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { iconSize } = $$props;
      if ($$props.iconSize === void 0 && $$bindings.iconSize && iconSize !== void 0)
        $$bindings.iconSize(iconSize);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"${add_attribute("height", iconSize, 0)}${add_attribute("width", iconSize, 0)}><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"></path></svg>`;
    });
    Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let iconSize;
      let icon;
      let { iconClass = "" } = $$props;
      let { size = "md" } = $$props;
      let { type } = $$props;
      const sizeMap = {
        xxs: "1rem",
        xs: "1.25rem",
        sm: "1.5rem",
        md: "1.75rem",
        lg: "2rem",
        xl: "2.25rem",
        xxl: "2.5rem",
        "3xl": "2.75rem",
        "4xl": "3rem"
      };
      const iconMap = {
        analysis: AnalysisIcon,
        babel: BabelIcon,
        code: CodeIcon,
        css: CssIcon,
        database: DatabaseIcon,
        django: DjangoIcon,
        docker: DockerIcon,
        engineer: EngineerIcon,
        express: ExpressIcon,
        flask: FlaskIcon,
        github: GithubIcon,
        html: HtmlIcon,
        twitter: TwitterIcon,
        javascript: JavascriptIcon,
        koa: KoaIcon,
        landscape: LandscapeIcon,
        linkedin: LinkedinIcon,
        node: NodeIcon,
        python: PythonIcon,
        react: ReactIcon,
        right: RightIcon,
        sass: SassIcon,
        svelte: SvelteIcon,
        email: EmailIcon,
        down: DownIcon,
        up: UpIcon,
        vue: VueIcon,
        webpack: WebpackIcon,
        typescript: TypescriptIcon,
        rust: RustIcon,
        java: JavaIcon,
        wordpress: WordpressIcon,
        deeplearning: DeepLearningIcon,
        regression: RegressionIcon,
        forecasting: ForecastingIcon,
        instagram: InstagramIcon,
        expand: ExpandIcon,
        collapse: CollapseIcon,
        deployed: DeployedIcon,
        link: LinkIcon
      };
      if ($$props.iconClass === void 0 && $$bindings.iconClass && iconClass !== void 0)
        $$bindings.iconClass(iconClass);
      if ($$props.size === void 0 && $$bindings.size && size !== void 0)
        $$bindings.size(size);
      if ($$props.type === void 0 && $$bindings.type && type !== void 0)
        $$bindings.type(type);
      iconSize = sizeMap[size];
      icon = iconMap[type];
      return `<figure${add_attribute("class", `${iconClass}`, 0)}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, { iconSize }, {}, {})}</figure>`;
    });
  }
});

// .svelte-kit/output/server/chunks/stores.js
var getStores, page;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_ssr();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
function client_method(key2) {
  {
    if (key2 === "before_navigate" || key2 === "after_navigate" || key2 === "on_navigate") {
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
        throw new Error(`Cannot call ${name_lookup[key2] ?? key2}(...) on the server`);
      };
    }
  }
}
function mediaQueryStore(query) {
  const store = writable(false);
  return { subscribe: store.subscribe };
}
var disableScrollHandling, beforeNavigate, afterNavigate, css$1, MenuIcon, css, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_ssr();
    init_chunks();
    init_nav();
    init_Icon();
    init_stores();
    disableScrollHandling = /* @__PURE__ */ client_method("disable_scroll_handling");
    beforeNavigate = /* @__PURE__ */ client_method("before_navigate");
    afterNavigate = /* @__PURE__ */ client_method("after_navigate");
    css$1 = {
      code: ":root{--transition-duration:600ms}button.svelte-rv88i1.svelte-rv88i1{cursor:pointer;display:flex;align-items:center;overflow:hidden}svg.svelte-rv88i1.svelte-rv88i1{transition:transform var(--transition-duration)}.top.svelte-rv88i1.svelte-rv88i1{stroke-dasharray:40 160;transition:stroke-dashoffset var(--transition-duration)}.middle.svelte-rv88i1.svelte-rv88i1{transform-origin:50%;transition:transform var(--transition-duration)}.bottom.svelte-rv88i1.svelte-rv88i1{stroke-dasharray:40 85;transition:stroke-dashoffset var(--transition-duration)}.open.svelte-rv88i1.svelte-rv88i1{transform:rotate(45deg)}.open.svelte-rv88i1 .top.svelte-rv88i1,.open.svelte-rv88i1 .bottom.svelte-rv88i1{stroke-dashoffset:-64px}.open.svelte-rv88i1 .middle.svelte-rv88i1{transform:rotate(90deg)}",
      map: null
    };
    MenuIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      $$result.css.add(css$1);
      return `<button${add_attribute("aria-expanded", open, 0)}${add_attribute("aria-label", ariaLabel, 0)} class="accent-color md:hidden svelte-rv88i1"><svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5"${add_attribute("width", width, 0)} class="${["svelte-rv88i1", open ? "open" : ""].join(" ").trim()}"><path class="top svelte-rv88i1" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path class="middle svelte-rv88i1" d="m 30,50 h 40"></path><path class="bottom svelte-rv88i1" d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg> </button>`;
    });
    css = {
      code: ".nav-indicator.svelte-11qbq60.svelte-11qbq60{display:inline-block;height:2px;width:2rem;transition:all 0.3s ease}.route.svelte-11qbq60:hover .nav-indicator.svelte-11qbq60{width:4rem;--tw-bg-opacity:1;background-color:rgb(252 211 77 / 1)}.route.svelte-11qbq60.svelte-11qbq60{position:relative;overflow:hidden}.nav-text.svelte-11qbq60.svelte-11qbq60{position:relative;display:inline-block}.active.svelte-11qbq60 .nav-indicator.svelte-11qbq60{width:4rem;--tw-bg-opacity:1;background-color:rgb(252 211 77 / 1)}.active.svelte-11qbq60 .nav-text.svelte-11qbq60{--tw-text-opacity:1;color:rgb(252 211 77 / 1)}",
      map: null
    };
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $currentPage, $$unsubscribe_currentPage;
      let $$unsubscribe_small;
      let $$unsubscribe_page;
      let $isMenuOpen, $$unsubscribe_isMenuOpen;
      $$unsubscribe_page = subscribe(page, (value) => value);
      let { data } = $$props;
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
      $$unsubscribe_small = subscribe(small, (value) => value);
      const currentPage = writable("/");
      $$unsubscribe_currentPage = subscribe(currentPage, (value) => $currentPage = value);
      const toggleMenu = () => {
        isMenuOpen.update((n) => !n);
      };
      beforeNavigate(({ to }) => {
        if (to?.params?.slug) {
          set_store_value(currentPage, $currentPage = "/" + to.params.slug, $currentPage);
        } else {
          if (to?.route) {
            set_store_value(currentPage, $currentPage = to?.route?.id, $currentPage);
          }
        }
      });
      afterNavigate(({ to }) => {
        disableScrollHandling();
        setTimeout(
          () => {
            scrollTo({ top: 0, behavior: "instant" });
          },
          400
        );
      });
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      $$result.css.add(css);
      data.url;
      {
        console.log($currentPage);
      }
      $$unsubscribe_currentPage();
      $$unsubscribe_small();
      $$unsubscribe_page();
      $$unsubscribe_isMenuOpen();
      return `<main class="flex flex-col bg-[#1d1d20] min-h-screen w-full overflow-x-hidden"> <header class="p-1 fixed top-0 right-0 justify-end z-50">${validate_component(MenuIcon, "MenuIcon").$$render($$result, { open: $isMenuOpen, onClick: toggleMenu }, {}, {})}</header>   ${$isMenuOpen ? `<div class="fixed inset-0 flex items-center bg-[#1d1d20] justify-center p-4 z-40"><div class="flex flex-col justify-start items-start w-[300px]">${each(navItems, (item, index5) => {
        return `${item.route ? `<a${add_attribute("href", item.route, 0)} class="${[
          "route group flex items-center text-4xl md:text-5xl font-bold accent-color text-center leading-tight mb-4 svelte-11qbq60",
          $currentPage === item.route ? "active" : ""
        ].join(" ").trim()}"><span class="nav-indicator mr-4 h-px w-8 bg-amber-100 transition-all group-hover:w-16 group-hover:bg-amber-300 group-focus-visible:w-16 group-focus-visible:bg-amber-300 motion-reduce:transition-none svelte-11qbq60"></span> <span class="nav-text text-2xl font-bold uppercase tracking-widest text-gray-100 group-hover:text-white group-focus-visible:text-slate-200 svelte-11qbq60">${escape(item.title)}</span> </a>` : ``} ${item.children ? `${each(item.children, (child) => {
          return `<a${add_attribute("href", child.route, 0)} class="${[
            "route group flex items-center text-4xl md:text-5xl font-bold accent-color text-center leading-tight mb-4 svelte-11qbq60",
            $currentPage === child.route ? "active" : ""
          ].join(" ").trim()}"><span class="nav-indicator mr-4 h-px w-8 bg-amber-100 transition-all group-hover:w-16 group-hover:bg-amber-300 group-focus-visible:w-16 group-focus-visible:bg-amber-300 motion-reduce:transition-none svelte-11qbq60"></span> <span class="nav-text text-2xl font-bold uppercase tracking-widest text-gray-100 group-hover:text-white group-focus-visible:text-slate-200 svelte-11qbq60">${escape(child.title)}</span> </a>`;
        })}` : ``}`;
      })}</div></div>` : ``}  <div>${slots.default ? slots.default({}) : ``}</div>  <footer class="block md:flex md:justify-between md:items-center py-12 px-7 md:px-20 bg-opacity-[1.5%] bg-white"><div class="font-bold w-auto text-center mb-6 md:w-[200px] md:text-left md:mb-0 text-gray-200" data-svelte-h="svelte-1h9ai9t"><div class="text-sm"><span class="accent-color">\xA9</span>
        Copyright
        <span class="">2023</span></div> <div class="text-sm"><span>Made by
          <a href="/" class="underline-link accent-color !font-extrabold">Ryan Painter</a></span></div></div> <div class="flex justify-center">${each(socials, (social, index5) => {
        return `<a${add_attribute("href", social.url, 0)} class="uppercase font-bold mx-3 lg:mx-4" target="_blank" rel="noopener noreferrer"${add_attribute("title", social.name, 0)}>${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            type: social.name,
            size: "md",
            iconClass: "accent-color hover:text-amber-400 transition-all duration-300 ease-in-out"
          },
          {},
          {}
        )} </a>`;
      })}</div></footer> </main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  server: () => layout_server_ts_exports,
  server_id: () => server_id,
  stylesheets: () => stylesheets
});
var index, component_cache, component, server_id, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout_server_ts();
    index = 0;
    component = async () => component_cache ?? (component_cache = (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default);
    server_id = "src/routes/+layout.server.ts";
    imports = ["_app/immutable/nodes/0.109b87e6.js", "_app/immutable/chunks/scheduler.f5d82c9d.js", "_app/immutable/chunks/index.e0aa46a0.js", "_app/immutable/chunks/Icon.ee66a5d8.js", "_app/immutable/chunks/singletons.0bc841c0.js", "_app/immutable/chunks/stores.ebae017b.js"];
    stylesheets = ["_app/immutable/assets/0.d7953dd5.css", "_app/immutable/assets/MenuIcon.0056b528.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/chunks/SubSection.js
var FullSection, SubSection;
var init_SubSection = __esm({
  ".svelte-kit/output/server/chunks/SubSection.js"() {
    init_ssr();
    FullSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { id } = $$props;
      if ($$props.id === void 0 && $$bindings.id && id !== void 0)
        $$bindings.id(id);
      return `<section${add_attribute("id", id, 0)} class="text-gray-50 h-screen flex flex-col justify-around max-w-[1400px] mx-auto py-[70px] px-12 sm:py-[120px] md:px-[70px] lg:px-24">${slots.default ? slots.default({}) : ``}</section>`;
    });
    SubSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { id } = $$props;
      let { heading } = $$props;
      if ($$props.id === void 0 && $$bindings.id && id !== void 0)
        $$bindings.id(id);
      if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
        $$bindings.heading(heading);
      return `<section${add_attribute("id", id, 0)} class="w-full block justify-center text-white px-9 py-12 2xl:px-44 xl:px-24 xl:py-24 lg:py-12 lg:px-12 md:flex"><div class="flex-shrink-0 uppercase text-left md:text-right w-auto md:w-[150px] lg:w-[200px] xl:w-[200px] xl:mr-[70px] mr-[50px] font-bold tracking-widest accent-color">${escape(heading)}</div> <div class="font-light text-base max-w-[650px] w-full pt-7 sm:pt-7 md:pt-0 pl-7 sm:pl-7 md:pl-12 lg:pl-0">${slots.default ? slots.default({}) : ``}</div></section>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_error.svelte.js"() {
    init_ssr();
    init_stores();
    init_SubSection();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `${validate_component(FullSection, "FullSection").$$render($$result, { id: "error" }, {}, {
        default: () => {
          return `${validate_component(SubSection, "SubSection").$$render($$result, { id: "error-msg", heading: "Error" }, {}, {
            default: () => {
              return `<pre class="whitespace-pre-wrap accent-color tracking-wide">        ${escape(JSON.stringify($page, void 0, 2))}
    </pre>`;
            }
          })}`;
        }
      })}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ?? (component_cache2 = (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default);
    imports2 = ["_app/immutable/nodes/1.cdd7b9a9.js", "_app/immutable/chunks/scheduler.f5d82c9d.js", "_app/immutable/chunks/index.e0aa46a0.js", "_app/immutable/chunks/stores.ebae017b.js", "_app/immutable/chunks/singletons.0bc841c0.js", "_app/immutable/chunks/SubSection.eb8cd66b.js"];
    stylesheets2 = ["_app/immutable/assets/MenuIcon.0056b528.css"];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.ts.js
var page_ts_exports = {};
var init_page_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_page.ts.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var skills, AnimatedText, css2, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_ssr();
    init_nav();
    init_SubSection();
    init_Icon();
    skills = [
      {
        id: 1,
        title: "Languages",
        items: [
          { text: "JavaScript", icon: "javascript" },
          { text: "TypeScript", icon: "typescript" },
          { text: "Python", icon: "python" },
          { text: "Rust", icon: "rust" },
          { text: "Java", icon: "java" }
        ]
      },
      {
        id: 2,
        title: "Frameworks",
        items: [
          { text: "React", icon: "react" },
          { text: "Svelte", icon: "svelte" },
          { text: "Vue", icon: "vue" },
          { text: "Express", icon: "express" },
          { text: "Koa", icon: "koa" },
          { text: "Django", icon: "django" },
          { text: "Flask", icon: "flask" },
          { text: "Wordpress", icon: "wordpress" }
        ]
      },
      {
        id: 3,
        title: "Machine Learning",
        items: [
          { text: "Regression", icon: "regression" },
          { text: "Forecasting", icon: "forecasting" },
          { text: "Deep Learning", icon: "deeplearning" }
        ]
      }
    ];
    AnimatedText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { messages } = $$props;
      let { textClass = "" } = $$props;
      let { duration = 2e3 } = $$props;
      let index5 = 0;
      let roller;
      onDestroy(() => {
        clearInterval(roller);
      });
      if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
        $$bindings.messages(messages);
      if ($$props.textClass === void 0 && $$bindings.textClass && textClass !== void 0)
        $$bindings.textClass(textClass);
      if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
        $$bindings.duration(duration);
      return `<h1${add_attribute("class", textClass, 0)}>${escape(messages[index5])}</h1>`;
    });
    css2 = {
      code: "main{background:#1d1d20 !important}.skills-grid.svelte-e8q5cv.svelte-e8q5cv{--_space:1rem;padding:0;display:grid;gap:var(--_space);grid-template-columns:repeat(auto-fill, minmax(25%, 1fr));grid-auto-rows:minmax(100px, auto)}@media(max-width: 1200px){.skills-grid.svelte-e8q5cv.svelte-e8q5cv{grid-template-columns:repeat(auto-fill, minmax(25%, 1fr))}}@media(max-width: 980px){.skills-grid.svelte-e8q5cv.svelte-e8q5cv{grid-template-columns:repeat(auto-fill, minmax(20%, 1fr))}}@media(max-width: 768px){.skills-grid.svelte-e8q5cv.svelte-e8q5cv{grid-template-columns:repeat(auto-fill, minmax(20%, 1fr))}}@media(max-width: 600px){.skills-grid.svelte-e8q5cv.svelte-e8q5cv{grid-template-columns:repeat(auto-fill, minmax(33%, 1fr))}}.skill-card.svelte-e8q5cv.svelte-e8q5cv{position:relative}.skill-card.svelte-e8q5cv.svelte-e8q5cv:hover{transform:scale(1.05)}.expanded.svelte-e8q5cv.svelte-e8q5cv{grid-column:span 2;grid-row:span 2}@media(max-width: 600px){.expanded.svelte-e8q5cv.svelte-e8q5cv{grid-column:span 2;grid-row:span 2}}.skill-details.svelte-e8q5cv.svelte-e8q5cv{display:none}.expanded.svelte-e8q5cv .skill-details.svelte-e8q5cv{display:block}",
      map: null
    };
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      const messagesToAnimate = [
        "TypeScript",
        "Python",
        "React",
        "Svelte",
        "Backend Systems",
        "Cloud Services",
        "Database Management",
        "RESTful & GraphQL APIs",
        "Progressive Web Apps",
        "Machine Learning",
        "Data Engineering",
        "Data Visualization"
      ];
      let projects$1 = projects;
      $$result.css.add(css2);
      return `<div class="w-full">${validate_component(FullSection, "FullSection").$$render($$result, { id: "landing" }, {}, {
        default: () => {
          return `<h2 class="intro__tagline" data-svelte-h="svelte-1plky9q">I&#39;m <span class="font-black accent-color">Ryan Painter</span>, Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Necessitatibus eos dolores modi quisquam voluptatum eum magni
      quod nostrum obcaecati blanditiis.</h2> <div class="container min-h-[70px]">${validate_component(AnimatedText, "AnimatedText").$$render(
            $$result,
            {
              messages: messagesToAnimate,
              textClass: "intro__tagline !font-bold accent-color"
            },
            {},
            {}
          )}</div> <h3 class="intro__contact" data-svelte-h="svelte-1374xtp">Contact me at:
      <a href="mailto:paintersrp@gmail.com" class="highlight-link">paintersrp@gmail.com</a></h3>`;
        }
      })} ${validate_component(SubSection, "SubSection").$$render($$result, { id: "background", heading: "Background" }, {}, {
        default: () => {
          return `<p class="mt-0 mb-6 text-gray-300" data-svelte-h="svelte-1vligaq">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, sint ex, similique facere
      sequi accusamus assumenda tempore nulla dignissimos a facilis excepturi magni consequatur
      necessitatibus deleniti vero odio earum praesentium. Natus repellendus deserunt laborum
      dolores a unde ipsum neque nostrum voluptates sapiente, facilis in cum, provident veniam enim
      corporis similique!</p> <p class="mt-0 mb-6 text-gray-300" data-svelte-h="svelte-l4tfaa">Lorem ipsum dolor sit amet <a href="/" class="underline-link text-white">consectetur</a>,
      adipisicing elit. Repellendus veritatis optio odio eveniet vel, quia quod. Consectetur,
      maiores cumque? Animi provident officiis veniam in minus natus assumenda veritatis incidunt
      aliquid.</p> <p class="mt-0 mb-6 text-gray-300" data-svelte-h="svelte-kitch9">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ratione et consectetur rem
      temporibus nulla?</p>`;
        }
      })}  ${validate_component(SubSection, "SubSection").$$render($$result, { id: "projects", heading: "Projects" }, {}, {
        default: () => {
          return `<div class="skills-grid svelte-e8q5cv">${each(projects$1, (project) => {
            return `<button class="${[
              escape(null_to_empty(`skill-card text-amber-50 bg-white bg-opacity-[5%] rounded-lg shadow-md flex flex-col items-center cursor-pointer transition duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-[10%] relative ${project.isExpanded ? "justify-center p-4" : "p-2.5"}`), true) + " svelte-e8q5cv",
              project.isExpanded ? "expanded" : ""
            ].join(" ").trim()}"><figure class="flex justify-center mb-4"><img class="${escape(null_to_empty(`object-cover rounded shadow mx-auto  ${project.isExpanded ? "w-full" : "w-full"}`), true) + " svelte-e8q5cv"}"${add_attribute("src", project.imgUrl, 0)}${add_attribute("alt", project.title, 0)}></figure> <span class="${escape(null_to_empty(`font-semibold ${project.isExpanded ? "text-xl" : " text-sm"}`), true) + " svelte-e8q5cv"}">${escape(project.title)}</span> ${project.isExpanded ? `<div class="faster-in-blur mt-3 !flex"><a${add_attribute("href", `/${project.slug}`, 0)} class="min-w-[75px] px-2 md:px-4 my-auto py-2 text-sm bg-amber-300 bg-opacity-90 hover:bg-opacity-80 shadow-md text-white font-extrabold">Details</a> <a${add_attribute("href", project.repoUrl, 0)} class="min-w-[75px] px-2 md:px-4 my-auto py-2 text-sm bg-amber-300 bg-opacity-90 hover:bg-opacity-80 shadow-md text-white font-extrabold">GitHub</a> <a${add_attribute("href", project.liveDemo, 0)} class="min-w-[75px] px-2 md:px-4 my-auto py-2 text-sm bg-amber-300 bg-opacity-90 hover:bg-opacity-80 shadow-md text-white font-extrabold">Demo</a> </div>` : ``} </button>`;
          })}</div>   `;
        }
      })} ${validate_component(SubSection, "SubSection").$$render($$result, { id: "skills", heading: "Skills" }, {}, {
        default: () => {
          return `<div class="flex justify-between flex-wrap md:flex-nowrap">${each(skills, (skillset, index5) => {
            return `<div class="mb-6 md:w-[47%]"><div class="text-gray-50 font-bold uppercase">${escape(skillset.title)}</div> <ul>${each(skillset.items, (item, index22) => {
              return `<li class="my-[6px] text-sm text-gray-300"><div class="flex gap-3 items-center">${item.icon ? `${validate_component(Icon, "Icon").$$render(
                $$result,
                {
                  type: item.icon,
                  size: "sm",
                  iconClass: "accent-color"
                },
                {},
                {}
              )}` : ``} ${escape(item.text)}</div> </li>`;
            })}</ul> </div>`;
          })}</div>`;
        }
      })} </div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3,
  universal: () => page_ts_exports,
  universal_id: () => universal_id
});
var index3, component_cache3, component3, universal_id, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_page_ts();
    index3 = 2;
    component3 = async () => component_cache3 ?? (component_cache3 = (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default);
    universal_id = "src/routes/+page.ts";
    imports3 = ["_app/immutable/nodes/2.aed120e0.js", "_app/immutable/chunks/scheduler.f5d82c9d.js", "_app/immutable/chunks/index.e0aa46a0.js", "_app/immutable/chunks/Icon.ee66a5d8.js", "_app/immutable/chunks/SubSection.eb8cd66b.js"];
    stylesheets3 = ["_app/immutable/assets/2.f950248b.css", "_app/immutable/assets/MenuIcon.0056b528.css"];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_slug_/_page.ts.js
var page_ts_exports2 = {};
__export(page_ts_exports2, {
  load: () => load2
});
async function load2({ params }) {
  const projectSlug = params.slug;
  const project = projects.find((p) => p.slug === projectSlug);
  if (!project) {
    throw error(404, { message: "Project not found" });
  }
  return { project };
}
var init_page_ts2 = __esm({
  ".svelte-kit/output/server/entries/pages/_slug_/_page.ts.js"() {
    init_nav();
    init_index2();
  }
});

// .svelte-kit/output/server/entries/pages/_slug_/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
function normalizeDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.toLocaleString("default", { month: "long" })} ${date.getDate()}, ${date.getFullYear()}`;
}
var Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/_slug_/_page.svelte.js"() {
    init_ssr();
    init_SubSection();
    init_Icon();
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      let project = data.project;
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      return ` ${validate_component(FullSection, "FullSection").$$render($$result, { id: "project-start" }, {}, {
        default: () => {
          return `<div class="w-full mx-auto flex flex-col md:flex-row p-4 items-center"><figure class="flex-grow-0 flex-shrink-0 md:flex-grow md:flex-shrink w-full md:w-3/5"><img${add_attribute("src", project.imgUrl, 0)}${add_attribute("alt", project.title, 0)} class="rounded-lg shadow-md w-full h-auto object-cover mb-4 md:mb-0"></figure> <div class="flex-grow md:w-[37.5%] text-center md:text-left md:ml-6"><div class="text-sm text-gray-300 mb-2"><time${add_attribute("datetime", project.date, 0)}>${escape(`${normalizeDate(project.date)} - ${normalizeDate(project.roadmap[0]?.releaseDate) ?? ""}`)}</time></div> <h1 class="text-4xl font-bold mb-4 accent-color transition duration-300">${escape(project.title)}</h1> <p class="text-base mb-4 leading-relaxed">${escape(project.description)}</p> <div class="text-sm text-gray-300 mb-6"><p>${escape(project.details)}</p></div> <div class="flex justify-center md:justify-start gap-4"><a${add_attribute("href", project.repoUrl, 0)} class="">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              type: "github",
              size: "lg",
              iconClass: "accent-color hover:text-amber-500 transition duration-300 "
            },
            {},
            {}
          )}</a> <a${add_attribute("href", project.liveDemo, 0)} class="">${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              type: "deployed",
              size: "lg",
              iconClass: "accent-color hover:text-amber-500 transition duration-300"
            },
            {},
            {}
          )}</a></div></div></div>`;
        }
      })} ${validate_component(SubSection, "SubSection").$$render(
        $$result,
        {
          id: "project-roadmap",
          heading: "Roadmap"
        },
        {},
        {
          default: () => {
            return `<div class="container mx-auto">${each(project.roadmap, (roadmapItem, index5) => {
              return `<div class="mb-8"><div class="flex justify-between items-center"><h4 class="text-xl font-bold text-white">${escape(roadmapItem.version)}</h4> <span class="text-sm text-gray-300">${escape(roadmapItem.status)}</span></div> <div class="mt-2"><div class="h-2 bg-gray-500 rounded-full"><div class="bg-amber-300 h-2 rounded-full" style="${"width: " + escape(roadmapItem.progress, true) + "%"}"></div></div> <p class="text-gray-200 mt-2">${escape(roadmapItem.description)}</p> <button class="accent-color text-sm mt-2">${escape(roadmapItem.isExpanded ? "Hide Details" : "View Details")}</button>  ${roadmapItem.isExpanded ? `<div class="mt-2 bg-gray-800 p-4 rounded-lg shadow-lg"><div class="space-y-4"><div><h5 class="font-semibold text-amber-300" data-svelte-h="svelte-1hvh0xc">Development Journey</h5> <p class="text-gray-300">${escape(roadmapItem.developmentJourney)}</p></div> <div><h5 class="font-semibold text-amber-300" data-svelte-h="svelte-rj8u5b">Feature Focus</h5> <ul class="list-disc pl-5 text-gray-300">${each(roadmapItem.featureFocus, (feature) => {
                return `<li>${escape(feature)}</li>`;
              })} </ul></div> <div><h5 class="font-semibold text-amber-300" data-svelte-h="svelte-1noniny">Technical Challenges</h5> <p class="text-gray-300">${escape(roadmapItem.technicalChallenges)}</p></div> <div><h5 class="font-semibold text-amber-300" data-svelte-h="svelte-1gx0by4">Learning and Skills Acquired</h5> <p class="text-gray-300">${escape(roadmapItem.skillsLearned)}</p> </div></div> </div>` : ``}</div> </div>`;
            })}</div>`;
          }
        }
      )} ${validate_component(SubSection, "SubSection").$$render(
        $$result,
        {
          id: "project-tech",
          heading: "Technology"
        },
        {},
        {
          default: () => {
            return `<div class="flex justify-between flex-wrap md:flex-nowrap"> <div class="mb-6 md:w-[47%]"><h3 class="text-gray-50 font-bold uppercase" data-svelte-h="svelte-dfwifl">Stack</h3> <ul class="text-gray-300">${each(project.stack, (stack) => {
              return `<li class="my-[6px] text-sm">${escape(stack)}</li>`;
            })}</ul></div>  <div class="mb-6 md:w-[47%]"><h3 class="text-gray-50 font-bold uppercase" data-svelte-h="svelte-16qwmeo">Concepts</h3> <ul class="text-gray-300">${each(project.concepts, (concept) => {
              return `<li class="my-[6px] text-sm">${escape(concept)}</li>`;
            })}</ul></div>  <div class="mb-6 md:w-[47%]"><h3 class="text-gray-50 font-bold uppercase" data-svelte-h="svelte-1mfv98u">Libraries</h3> <ul class="text-gray-300">${each(project.libraries, (library) => {
              return `<li class="my-[6px] text-sm">${escape(library)}</li>`;
            })}</ul></div></div>`;
          }
        }
      )} ${validate_component(SubSection, "SubSection").$$render(
        $$result,
        {
          id: "project-highlights",
          heading: "Highlights"
        },
        {},
        {
          default: () => {
            return `<div data-svelte-h="svelte-gg4230">Screenshots (expandable)</div> <div data-svelte-h="svelte-r00vzs">REPLs</div>`;
          }
        }
      )}`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4,
  universal: () => page_ts_exports2,
  universal_id: () => universal_id2
});
var index4, component_cache4, component4, universal_id2, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_page_ts2();
    index4 = 3;
    component4 = async () => component_cache4 ?? (component_cache4 = (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default);
    universal_id2 = "src/routes/[slug]/+page.ts";
    imports4 = ["_app/immutable/nodes/3.d0b2357b.js", "_app/immutable/chunks/Icon.ee66a5d8.js", "_app/immutable/chunks/index.e0aa46a0.js", "_app/immutable/chunks/scheduler.f5d82c9d.js", "_app/immutable/chunks/control.f5b05b5f.js", "_app/immutable/chunks/SubSection.eb8cd66b.js"];
    stylesheets4 = ["_app/immutable/assets/MenuIcon.0056b528.css"];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/chunks/internal.js
init_ssr();
var base = "";
var assets = base;
var initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
var public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page2);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
var options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="' + assets2 + '/favicon.png" />\n    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    ' + head + '\n  </head>\n  <body data-sveltekit-preload-data="tap">\n    <div style="display: contents">' + body + "</div>\n  </body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "cu8nzo"
};
function get_hooks() {
  return {};
}

// .svelte-kit/output/server/index.js
init_index2();

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    const char = str[i];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i) + replacement;
      last_pos = i + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify2(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index6 = p++;
    indexes.set(thing, index6);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index6] = `["${key2}",${flatten(value2)}]`;
        return index6;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0)
              str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index6] = str;
    return index6;
  }
  const index5 = flatten(value);
  if (index5 < 0)
    return `${index5}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
init_chunks();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var DEV = false;
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "OPTIONS",
  "HEAD"
]);
var PAGE_METHODS = /* @__PURE__ */ new Set(["GET", "POST", "HEAD"]);
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s2) => s2).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered)
    return;
  return result;
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {import('../runtime/control.js').Redirect | import('../runtime/control.js').HttpError | Error} */
    error2
  );
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = Array.from(ENDPOINT_METHODS).filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod)
    allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  let page2 = options2.templates.error({ status, message });
  return text(page2, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body, {
      status
    });
  }
  return static_error_page(options2, status, body.message);
}
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return await options2.hooks.handleError({ error: error2, event }) ?? {
      message: event.route.id != null ? "Internal Error" : "Not Found"
    };
  }
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent)
    uses.push('"parent":1');
  if (node.uses?.route)
    uses.push('"route":1');
  if (node.uses?.url)
    uses.push('"url":1');
  return `"uses":{${uses.join(",")}}`;
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && mod.GET && !mod.HEAD) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    let response = await handler(
      /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      return new Response(void 0, {
        status: e.status,
        headers: { location: e.location }
      });
    }
    throw e;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (ENDPOINT_METHODS.has(method) && !PAGE_METHODS.has(method)) {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = (
  /** @type {const} */
  [
    "href",
    "pathname",
    "search",
    "searchParams",
    "toString",
    "toJSON"
  ]
);
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: err instanceof HttpError ? err.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error2;
}
function action_json_redirect(redirect) {
  return action_json({
    type: "redirect",
    status: redirect.status,
    location: redirect.location
  });
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions"
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")})`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e) {
    const error2 = (
      /** @type {any} */
      e
    );
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
async function unwrap_promises(object) {
  for (const key2 in object) {
    if (typeof object[key2]?.then === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
async function load_server_data({
  event,
  state,
  node,
  parent,
  // TODO 2.0: Remove this
  track_server_fetches
}) {
  if (!node?.server)
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init2) => {
      const url2 = new URL(info instanceof Request ? info.url : info, event.url);
      if (track_server_fetches) {
        uses.dependencies.add(url2.href);
      }
      return event.fetch(info, init2);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        uses.route = true;
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url
  });
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  });
  const data = result ? await unwrap_promises(result) : null;
  return data;
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  return async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text2() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
              method: event.request.method,
              request_body: (
                /** @type {string | ArrayBufferView | undefined} */
                input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
              ),
              request_headers: cloned_headers,
              response_body: body,
              response: response2
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i)
        hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    else if (key2 === "age")
      age = value;
    else if (key2 === "vary" && value.trim() === "*")
      varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    /** @type {boolean} */
    __privateAdd(this, _use_hashes, void 0);
    /** @type {boolean} */
    __privateAdd(this, _script_needs_csp, void 0);
    /** @type {boolean} */
    __privateAdd(this, _style_needs_csp, void 0);
    /** @type {import('types').CspDirectives} */
    __privateAdd(this, _directives, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src, void 0);
    /** @type {string} */
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, directives);
    const d = __privateGet(this, _directives);
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  /** @param {string} content */
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content=${escape_html_attr(content)}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    /** @readonly */
    __publicField(this, "nonce", generate_nonce());
    /** @type {CspProvider} */
    __publicField(this, "csp_provider");
    /** @type {CspReportOnlyProvider} */
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r) => {
    fulfil = f;
    reject = r;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done)
              deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets5 = new Set(client.stylesheets);
  const fonts5 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  if (!state.prerendering?.fallback) {
    const segments = event.url.pathname.slice(base.length).split("/").slice(2);
    base$1 = segments.map(() => "..").join("/") || ".";
    base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
    if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
      assets$1 = base$1;
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch.length; i += 1) {
      data2 = { ...data2, ...branch[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value
    };
    {
      try {
        rendered = options2.root.render(props);
      } finally {
        reset();
      }
    }
    for (const { node } of branch) {
      for (const url of node.imports)
        modulepreloads.add(url);
      for (const url of node.stylesheets)
        stylesheets5.add(url);
      for (const url of node.fonts)
        fonts5.add(url);
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets5) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts5) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch.map((b) => b.server_data),
    global
  );
  if (page_config.ssr && page_config.csr) {
    body += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
      (path) => resolve_opts.preload({ type: "js", path })
    );
    for (const path of included_modulepreloads) {
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (options2.preload_strategy !== "modulepreload") {
        head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
      } else if (state.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const blocks = [];
    const properties = [
      assets && `assets: ${s(assets)}`,
      `base: ${base_expression}`,
      `env: ${s(public_env)}`
    ].filter(Boolean);
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["app", "element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      blocks.push(`const data = ${data};`);
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        "data",
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      args.push(`{
							${hydrate.join(",\n							")}
						}`);
    }
    blocks.push(`Promise.all([
						import(${s(prefixed(client.start))}),
						import(${s(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(${args.join(", ")});
					});`);
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: {
        "content-type": "text/html"
      }
    }
  );
}
function get_data(event, options2, nodes, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options2, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error: error2 }, replacer);
          } catch (e) {
            error2 = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error: error2 }, replacer);
          }
          push(`<script>${global}.resolve(${str})<\/script>
`);
          if (count === 0)
            done();
        }
      );
      return `${global}.defer(${id})`;
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {Value} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error: error2,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error2.message
    );
  }
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.error = true;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({}),
        track_server_fetches: options2.track_server_fetches
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e) {
    if (e instanceof Redirect) {
      return redirect_response(e.status, e.location);
    }
    return static_error_page(
      options2,
      e instanceof HttpError ? e.status : 500,
      (await handle_error_and_jsonify(event, options2, e)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var encoder2 = new TextEncoder();
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n == void 0 ? n : await manifest2._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            },
            track_server_fetches: options2.track_server_fetches
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder2.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder2.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error2), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response({
    type: "redirect",
    location: redirect.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  const reducers = {
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify(value, reducers);
            } catch (e) {
              const error2 = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify(error2, reducers);
            }
            count -= 1;
            push(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0)
              done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
var MAX_DEPTH = 10;
async function render_page(event, page2, options2, manifest2, state, resolve_opts) {
  if (state.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await Promise.all([
      // we use == here rather than === because [undefined] serializes as "[null]"
      ...page2.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
      manifest2._.nodes[page2.leaf]()
    ]);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false && !state.prerendering) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    const branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            },
            track_server_fetches: options2.track_server_fetches
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page2.errors[i]) {
              const index5 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await manifest2._.nodes[index5]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: get_option(nodes, "ssr") ?? true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (e) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e,
      resolve_opts
    });
  }
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decoder = opts?.decode || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode: decoder });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const decoder = opts?.decode || decodeURIComponent;
      const cookies2 = (0, import_cookie.parse)(header, { decode: decoder });
      for (const c of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
          cookies2[c.name] = c.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    set(name, value, opts = {}) {
      set_internal(name, value, { ...defaults, ...opts });
    },
    /**
     * @param {string} name
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    delete(name, opts = {}) {
      cookies.set(name, "", {
        ...opts,
        maxAge: 0
      });
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    serialize(name, value, opts) {
      return (0, import_cookie.serialize)(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder22 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder22(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  function set_internal(name, value, opts) {
    const path = opts.path ?? default_path;
    new_cookies[name] = {
      name,
      value,
      options: {
        ...opts,
        path
      }
    };
  }
  return { cookies, new_cookies, get_cookie_header, set_internal };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header, set_internal }) {
  return async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return await options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await respond(request, options2, manifest2, {
          ...state,
          depth: state.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str);
            set_internal(
              name,
              value,
              /** @type {import('cookie').CookieSerializeOptions} */
              options3
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function validator(expected) {
  function validate(module, file) {
    if (!module)
      return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2))
        continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var valid_layout_exports = /* @__PURE__ */ new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config"
]);
var valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
var valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
var valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
var valid_server_exports = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "OPTIONS",
  "HEAD",
  "fallback",
  "prerender",
  "trailingSlash",
  "config",
  "entries"
]);
var validate_layout_exports = validator(valid_layout_exports);
var validate_page_exports = validator(valid_page_exports);
var validate_layout_server_exports = validator(valid_layout_server_exports);
var validate_page_server_exports = validator(valid_page_server_exports);
var validate_server_exports = validator(valid_server_exports);
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options2, manifest2, state) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state.prerendering?.fallback) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-vercel"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state.depth > 0
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (route.page) {
        const nodes = await Promise.all([
          // we use == here rather than === because [undefined] serializes as "[null]"
          ...route.page.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
          manifest2._.nodes[route.page.leaf]()
        ]);
        if (DEV)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV)
          ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
        if (normalized !== url.pathname && !state.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
    }
    const { cookies, new_cookies, get_cookie_header, set_internal } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({
      event,
      options: options2,
      manifest: manifest2,
      state,
      get_cookie_header,
      set_internal
    });
    if (state.prerendering && !state.prerendering.fallback)
      disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e) : route?.page && is_action_json_request(event) ? action_json_redirect(e) : redirect_response(e.status, e.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e);
  }
  async function resolve(event2, opts) {
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          if (page_methods.has(method)) {
            response = await render_page(event2, route.page, options2, manifest2, state, resolve_opts);
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v) => v.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state.error && event2.isSubRequest) {
        return await fetch(request, {
          headers: {
            "x-sveltekit-error": "true"
          }
        });
      }
      if (state.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      return await handle_fatal_error(event2, options2, e);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(private_prefix) && (public_prefix === "" || !k.startsWith(public_prefix))
    )
  );
}
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(public_prefix) && (private_prefix === "" || !k.startsWith(private_prefix))
    )
  );
}
var _options, _manifest;
var Server = class {
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    /** @type {import('types').SSROptions} */
    __privateAdd(this, _options, void 0);
    /** @type {import('@sveltejs/kit').SSRManifest} */
    __privateAdd(this, _manifest, void 0);
    __privateSet(this, _options, options);
    __privateSet(this, _manifest, manifest2);
  }
  /**
   * @param {{
   *   env: Record<string, string>
   * }} opts
   */
  async init({ env }) {
    set_private_env(
      filter_private_env(env, {
        public_prefix: __privateGet(this, _options).env_public_prefix,
        private_prefix: __privateGet(this, _options).env_private_prefix
      })
    );
    set_public_env(
      filter_public_env(env, {
        public_prefix: __privateGet(this, _options).env_public_prefix,
        private_prefix: __privateGet(this, _options).env_private_prefix
      })
    );
    if (!__privateGet(this, _options).hooks) {
      try {
        const module = await get_hooks();
        __privateGet(this, _options).hooks = {
          handle: module.handle || (({ event, resolve }) => resolve(event)),
          handleError: module.handleError || (({ error: error2 }) => console.error(error2)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
        };
      } catch (error2) {
        {
          throw error2;
        }
      }
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    if (!(request instanceof Request)) {
      throw new Error(
        "The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details"
      );
    }
    return respond(request, __privateGet(this, _options), __privateGet(this, _manifest), {
      ...options2,
      error: false,
      depth: 0
    });
  }
};
_options = new WeakMap();
_manifest = new WeakMap();

// .svelte-kit/vercel-tmp/fn/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ?? (value = value = fn());
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set(["favicon.png", "images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg", "images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg", "images/linus-nylund-Q5QspluNZmM-unsplash.jpg"]),
    mimeTypes: { ".png": "image/png", ".jpg": "image/jpeg" },
    _: {
      client: { "start": "_app/immutable/entry/start.14f1b7a8.js", "app": "_app/immutable/entry/app.511fae23.js", "imports": ["_app/immutable/entry/start.14f1b7a8.js", "_app/immutable/chunks/scheduler.f5d82c9d.js", "_app/immutable/chunks/singletons.0bc841c0.js", "_app/immutable/chunks/control.f5b05b5f.js", "_app/immutable/entry/app.511fae23.js", "_app/immutable/chunks/scheduler.f5d82c9d.js", "_app/immutable/chunks/index.e0aa46a0.js"], "stylesheets": [], "fonts": [] },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4)))
      ],
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/[slug]",
          pattern: /^\/([^/]+?)\/?$/,
          params: [{ "name": "slug", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        }
      ],
      matchers: async () => {
        return {};
      }
    }
  };
})();

// .svelte-kit/vercel-tmp/fn/edge.js
var server = new Server(manifest);
var initialized = server.init({
  env: (
    /** @type {Record<string, string>} */
    process.env
  )
});
var edge_default = async (request, context) => {
  await initialized;
  return server.respond(request, {
    getClientAddress() {
      return (
        /** @type {string} */
        request.headers.get("x-forwarded-for")
      );
    },
    platform: {
      context
    }
  });
};
export {
  edge_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=index.js.map
