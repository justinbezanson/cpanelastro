import { c as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_Du4UnhwU.mjs';
import 'clsx';

const $$ServerIsland = createComponent(async ($$result, $$props, $$slots) => {
  await new Promise((resolve) => setTimeout(resolve, 2e3));
  return renderTemplate`${maybeRenderHead()}<div>This is from the server</div>`;
}, "/home/justin/projects/cpanel-astro/src/components/ServerIsland.astro", void 0);

const $$file = "/home/justin/projects/cpanel-astro/src/components/ServerIsland.astro";
const $$url = undefined;

export { $$ServerIsland as default, $$file as file, $$url as url };
