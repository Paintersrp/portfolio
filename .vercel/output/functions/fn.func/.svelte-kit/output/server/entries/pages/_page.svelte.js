import { c as create_ssr_component, o as onDestroy, a as add_attribute, d as escape, e as each, n as null_to_empty, v as validate_component } from "../../chunks/ssr.js";
import { C as Content } from "../../chunks/Content.js";
/* empty css                                                   */import { I as Icon } from "../../chunks/Icon.js";
const AnimatedText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { messages } = $$props;
  let { textClass = "" } = $$props;
  let { duration = 2e3 } = $$props;
  let index = 0;
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
  return `<h1${add_attribute("class", textClass, 0)}>${escape(messages[index])}</h1>`;
});
const ChevronArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { point = "down" } = $$props;
  if ($$props.point === void 0 && $$bindings.point && point !== void 0)
    $$bindings.point(point);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("class", `w-10 h-10 accent-color-hover ${point === "up" ? "rotate-180" : ""}`, 0)}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>`;
});
Promise.resolve();
const projects = [
  {
    id: 1,
    date: "11/10/2021",
    title: "Personal Blog",
    description: "Dive into my personal musings on life, technology, and continuous learning.",
    details: "This blog is a testament to my journey as a developer and thinker. Built with the sleek SvelteKit for a reactive experience and styled by TailwindCSS for visual appeal. SEO optimizations ensure my voice is heard far and wide.",
    features: ["Responsive Design", "SEO-Friendly", "Light/Dark Mode"],
    technologies: ["SvelteKit", "TailwindCSS", "SEO Auditing Tools"],
    imgUrl: "https://source.unsplash.com/random/600x400/?website",
    repoUrl: "https://github.com/yourusername/personal-blog",
    liveDemo: "https://yourpersonalblog.com"
  },
  {
    id: 2,
    date: "11/11/2021",
    title: "Basketball Predictor",
    description: "Harnessing the power of machine learning to forecast sports event results with enhanced accuracy.",
    details: "A sophisticated machine learning model trained on a rich dataset of historical sports statistics. It combines Scikit-learn’s robust algorithms with Python’s computing power to predict game outcomes, providing insights to sports enthusiasts and bettors.",
    features: ["Data Visualization", "Statistical Analysis", "Predictive Modeling"],
    technologies: ["Python", "Scikit-learn", "Pandas"],
    imgUrl: "https://source.unsplash.com/random/600x400/?predictor",
    repoUrl: "https://github.com/yourusername/sports-predictor",
    liveDemo: "https://yoursportspredictor.com"
  },
  {
    id: 3,
    date: "11/12/2021",
    title: "Sales Forecaster",
    description: "Optimize your inventory with our AI-powered sales forecasting tool.",
    details: "Designed to assist businesses in predicting future sales, managing inventory, and optimizing supply chain operations. It leverages state-of-the-art machine learning algorithms to analyze sales data and make precise demand forecasts.",
    features: ["Inventory Management", "Trend Analysis", "Machine Learning Predictions"],
    technologies: ["TensorFlow", "Keras", "NumPy", "Matplotlib"],
    imgUrl: "https://source.unsplash.com/random/600x400/?forecast",
    repoUrl: "https://github.com/yourusername/sales-forecaster",
    liveDemo: "https://yoursalesforecaster.com"
  },
  {
    id: 4,
    date: "11/13/2021",
    title: "API Gateway",
    description: "A robust API gateway to streamline your services and data flow.",
    details: "Central hub for managing, routing, and scaling microservices. It includes advanced anomaly detection to safeguard against unexpected traffic spikes and potential threats, ensuring reliable and secure service operations.",
    features: ["Load Balancing", "Anomaly Detection", "Rate Limiting"],
    technologies: ["Node.js", "Express", "Elasticsearch"],
    imgUrl: "https://source.unsplash.com/random/600x400/?api",
    repoUrl: "https://github.com/yourusername/api-gateway",
    liveDemo: "https://yourapigateway.com"
  }
];
const generalSkills = [
  {
    text: "NodeJS",
    icon: "node",
    progress: "80%",
    isExpanded: true,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Machine Learning",
    icon: "database",
    progress: "65%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Git",
    icon: "github",
    progress: "65%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Babel",
    icon: "babel",
    progress: "65%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Webpack",
    icon: "webpack",
    progress: "65%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "JavaScript",
    icon: "javascript",
    progress: "75%",
    isExpanded: true,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Python",
    icon: "python",
    progress: "75%",
    isExpanded: true,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Data Analysis",
    icon: "analysis",
    progress: "60%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Data Engineering",
    icon: "engineer",
    progress: "60%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  }
];
const backendSkills = [
  {
    text: "Django",
    icon: "django",
    progress: "70%",
    isExpanded: true,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Koa",
    icon: "koa",
    progress: "70%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "DB Management",
    icon: "database",
    progress: "70%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Express",
    icon: "express",
    progress: "70%",
    isExpanded: true,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Flask",
    icon: "flask",
    progress: "70%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Docker",
    icon: "docker",
    progress: "70%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  }
];
const frontendSkills = [
  {
    text: "React",
    icon: "react",
    progress: "80%",
    isExpanded: true,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "HTML",
    icon: "html",
    progress: "75%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Vue",
    icon: "vue",
    progress: "75%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "CSS",
    icon: "css",
    progress: "70%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Sass",
    icon: "sass",
    progress: "70%",
    isExpanded: false,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  },
  {
    text: "Svelte",
    icon: "svelte",
    progress: "75%",
    isExpanded: true,
    description: "Dive into my personal musings on life, technology, and continuous learning."
  }
];
const Projects_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".timeline.svelte-9llim8{position:relative;padding:0}.timeline-item.svelte-9llim8{position:relative;margin-bottom:80px;width:calc(50% - 20px);transition:transform 0.3s ease, box-shadow 0.3s ease;&.left {\r\n      left: calc(0% - 35px);\r\n    };&.right {\r\n      left: calc(50% + 55px);\r\n    };&:last-child {\r\n      margin-bottom: 0;\r\n    }}.timeline-item.svelte-9llim8:hover{transform:translateY(-5px);box-shadow:0 6px 12px rgba(0, 0, 0, 0.2)}.content.svelte-9llim8{background-color:rgba(255, 255, 255, 0.15);color:#fff;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);border-radius:12px;padding:25px;transition:transform 0.3s ease, box-shadow 0.3s ease}@media(max-width: 768px){.timeline-item.svelte-9llim8{width:100%;left:0 !important}.timeline.svelte-9llim8:before{left:20px}}",
  map: null
};
function markerClass(index) {
  return index % 2 === 0 ? "right-[-30px] lg:right-[-40px]" : "left-[-30px] lg:left-[-40px]";
}
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projectsData = projects.map((project) => ({ ...project, isVisible: false }));
  $$result.css.add(css$1);
  return `<section id="projects" class="container mx-20 px-4 py-10"><div class="text-center mb-10" data-svelte-h="svelte-ldme5o"><h2 class="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2> <p class="text-lg text-white">Here&#39;s a selection of some recent work. For more details, click on each project.</p></div> <div class="relative"><div class="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-cyan-100 h-full hidden lg:block"></div> ${each(projectsData, (project, index) => {
    return `<div class="w-full"><div class="${[
      escape(null_to_empty(`timeline-item rounded-lg shadow-lg ${index % 2 === 0 ? "left" : "right"} `), true) + " svelte-9llim8",
      (project.isVisible && index % 2 === 0 ? "left-in" : "") + " " + (!project.isVisible && index % 2 === 0 ? "left-out" : "") + " " + (project.isVisible && index % 2 === 1 ? "right-in" : "") + " " + (!project.isVisible && index % 2 === 1 ? "right-out" : "")
    ].join(" ").trim()}"><div class="${escape(null_to_empty(`absolute top-0 w-20 h-10 bg-cyan-700 text-white flex items-center justify-center text-xs rounded-lg font-bold ${markerClass(index)}`), true) + " svelte-9llim8"}" style="transform: translateY(-50%);"><time>${escape(project.date)}</time></div> <div class="content bg-white bg-opacity-20 text-white shadow-lg rounded-lg p-4 transform transition duration-500 svelte-9llim8"><div class="flex justify-center mb-4"><img class="w-3/4 h-32 md:h-64 object-cover rounded shadow mx-auto"${add_attribute("src", project.imgUrl, 0)}${add_attribute("alt", project.title, 0)}></div> <h3 class="text-lg font-bold mb-3">${escape(project.title)}</h3> <p class="mb-4">${escape(project.description)}</p> <div class="flex justify-evenly w-full gap-4"><div class="tech-features mb-4"><h4 class="text-md font-semibold text-center mb-1" data-svelte-h="svelte-1tompzy">Features</h4> <ul class="list-disc list-inside">${each(project.features, (feature) => {
      return `<li>${escape(feature)}</li>`;
    })} </ul></div> <div class="tech-features mb-4"><h4 class="text-md font-semibold text-center mb-1" data-svelte-h="svelte-1mqtj3d">Technologies</h4> <ul class="list-disc list-inside">${each(project.technologies, (tech) => {
      return `<li>${escape(tech)}</li>`;
    })}</ul> </div></div> <div class="flex justify-between"><a${add_attribute("href", project.repoUrl, 0)} class="px-2 md:px-4 my-auto py-2 text-xs md:text-sm font-bold rounded-md bg-cyan-700 bg-opacity-75 hover:bg-cyan-900 hover:bg-opacity-75 shadow-md">GitHub</a> <a${add_attribute("href", project.liveDemo, 0)} class="px-2 md:px-4 my-auto py-2 text-xs md:text-sm font-bold rounded-md bg-cyan-700 bg-opacity-75 hover:bg-cyan-900 hover:bg-opacity-75 shadow-md">Live Demo</a></div> </div></div> </div>`;
  })}</div> </section>`;
});
const Skills_svelte_svelte_type_style_lang = "";
const css = {
  code: ".skills-grid.svelte-1yoevg.svelte-1yoevg{--_space:1rem;padding:0 var(--_space) var(--_space);display:grid;gap:var(--_space);grid-template-columns:repeat(auto-fill, minmax(14.28%, 1fr));grid-auto-rows:minmax(100px, auto)}.skill-card.svelte-1yoevg.svelte-1yoevg{position:relative}.expanded.svelte-1yoevg.svelte-1yoevg{grid-column:span 2;grid-row:span 2}.skill-details.svelte-1yoevg.svelte-1yoevg{display:none}.expanded.svelte-1yoevg .skill-details.svelte-1yoevg{display:block}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let combinedSkills = [...frontendSkills, ...backendSkills, ...generalSkills];
  $$result.css.add(css);
  return `<section id="skills" class="w-screen pt-16 px-16 text-white py-10"> <div class="text-center mb-12" data-svelte-h="svelte-mau96"><h2 class="text-4xl md:text-5xl font-bold mb-4">My Skills</h2> <p class="text-xl font-light accent-color">Click on a skill to see more details</p></div>  <div class="skills-grid svelte-1yoevg">${each(combinedSkills, (skill) => {
    return `<button class="${[
      "skill-card bg-white bg-opacity-20 p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer transition duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-30 relative svelte-1yoevg",
      skill.isExpanded ? "expanded" : ""
    ].join(" ").trim()}">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        size: skill.isExpanded ? "3xl" : "xl",
        type: skill.icon,
        iconClass: "accent-color mb-3"
      },
      {},
      {}
    )} <span class="${escape(null_to_empty(`font-semibold ${skill.isExpanded ? "text-xl" : " text-sm"}`), true) + " svelte-1yoevg"}">${escape(skill.text)}</span> ${skill.isExpanded ? `<div class="skill-details m-auto svelte-1yoevg"><p class="text-sm">${escape(skill.description)}</p> </div>` : ``} </button>`;
  })}</div> </section>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handleAboutInView } = $$props;
  if ($$props.handleAboutInView === void 0 && $$bindings.handleAboutInView && handleAboutInView !== void 0)
    $$bindings.handleAboutInView(handleAboutInView);
  return `<section id="about" class="text-white py-10"><div class="container mx-auto px-6"> <div class="text-center mb-12" data-svelte-h="svelte-sqgw19"><h2 class="text-4xl md:text-5xl font-bold mb-4">More About Me</h2> <p class="text-xl font-light accent-color mb-8">Discover my journey, interests, and achievements</p></div>  <div class="container flex flex-col md:flex-row justify-center mb-10 gap-8 mx-auto px-6"><div class="flex-1 flex-grow px-4 pt-2 rounded-lg shadow-lg bg-white bg-opacity-20">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      size: "xl",
      type: "code",
      iconClass: "accent-color mb-3"
    },
    {},
    {}
  )} <figure class="px-4" data-svelte-h="svelte-jlv4js"><img src="https://source.unsplash.com/random/600x400/?code" alt="Project" class="w-full h-32 md:h-64 object-cover rounded shadow mx-auto"></figure> <h3 class="text-2xl font-semibold mt-3 mb-3 accent-color" data-svelte-h="svelte-ysui0h">Professional Background</h3> <p class="text-base text-white mb-4" data-svelte-h="svelte-l7hex0">With a strong foundation in TypeScript, Python, and React, I&#39;ve contributed to numerous
          projects ranging from web applications to data-driven platforms.</p></div>  <div class="flex-1 flex-grow px-4 pt-2 rounded-lg shadow-lg bg-white bg-opacity-20">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      size: "xl",
      type: "landscape",
      iconClass: "accent-color mb-3"
    },
    {},
    {}
  )} <figure class="px-4" data-svelte-h="svelte-bay09l"><img src="https://source.unsplash.com/random/600x400/?hiking" alt="Project" class="w-full h-32 md:h-64 object-cover rounded shadow mx-auto"></figure> <h3 class="text-2xl font-semibold mt-3 mb-3 accent-color" data-svelte-h="svelte-x9njg7">Personal Interests</h3> <p class="text-base text-white mb-4" data-svelte-h="svelte-1wqx8l1">Outside of coding, I&#39;m passionate about hiking, open-source contribution, and exploring
          new technologies.</p></div></div></div></section>`;
});
const Landing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  if ($$props.messagesToAnimate === void 0 && $$bindings.messagesToAnimate && messagesToAnimate !== void 0)
    $$bindings.messagesToAnimate(messagesToAnimate);
  return `<section id="landing" class="min-h-screen flex flex-col justify-center items-center space-y-4 w-full"><header class="text-center space-y-2 md:space-y-4 accent-color mb-5"><h1 class="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-none shadow-text w-full text-center whitespace-nowrap text-in-expand mb-5" data-svelte-h="svelte-16hgfa6">Steven Painter</h1> <div class="flex flex-row justify-evenly space-x-2 md:space-x-8" data-svelte-h="svelte-1lvj98d"><p class="accent-color text-base md:text-xl lg:text-2xl w-1/3 mb-5 text-in-expand">Fullstack <br> Developer</p> <p class="accent-color text-base md:text-xl lg:text-2xl w-1/3 mb-5 text-in-expand">Data <br> Enthusiast</p> <p class="accent-color text-base md:text-xl lg:text-2xl w-1/3 mb-5 text-in-expand">Tech <br> Explorer</p></div> <div class="container text-in-blur min-h-[50px]">${validate_component(AnimatedText, "AnimatedText").$$render(
    $$result,
    {
      messages: messagesToAnimate,
      textClass: "text-2xl md:text-5xl font-bold"
    },
    {},
    {}
  )}</div></header></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let aboutInView = false;
  function handleAboutInView(event) {
    aboutInView = event.detail.inView;
  }
  return `${validate_component(Content, "Content").$$render($$result, { yIn: -750, yOut: -750 }, {}, {
    default: () => {
      return `${validate_component(Landing, "Landing").$$render($$result, {}, {}, {})}  <button class="${[
        "animate-bounce absolute bottom-5 transform -translate-x-1/2 text-white hover:accent-color",
        aboutInView ? "hidden" : ""
      ].join(" ").trim()}">${validate_component(ChevronArrow, "ChevronArrow").$$render($$result, {}, {}, {})}</button> ${validate_component(About, "About").$$render($$result, { handleAboutInView }, {}, {})} ${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}  <button class="animate-bounce transform text-white hover:accent-color">${validate_component(ChevronArrow, "ChevronArrow").$$render($$result, { point: "up" }, {}, {})}</button>`;
    }
  })}`;
});
export {
  Page as default
};
