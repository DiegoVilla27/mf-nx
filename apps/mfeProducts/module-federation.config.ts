import type { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'mfeProducts',
  exposes: {
    './Routes': 'apps/mfeProducts/src/app/remote-entry/entry.routes.ts',
  },
};

/**
* Nx requires a default export of the config to allow correct resolution of the module federation graph.
**/
export default config;
