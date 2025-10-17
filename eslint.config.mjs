import withNuxt from "./.nuxt/eslint.config.mjs";
// eslint.config.mjs
import antfu from "@antfu/eslint-config";

export default withNuxt(
  antfu()
  // your custom flat configs go here, for example:
  // {
  //   files: ['**/*.ts', '**/*.tsx'],
  //   rules: {
  //     'no-console': 'off' // allow console.log in TypeScript files
  //   }
  // },
  // {
  //   ...
  // }
);
