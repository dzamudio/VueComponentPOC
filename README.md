# vue-projectName

This template should help get you started developing with Vue 3 in Vite.

## PHPStorm Setup
[Refer to this document for how to setup phpStorm](https://neoncrm.atlassian.net/wiki/spaces/PROD/pages/3233612415/VueJS+3+research+document#%F0%9F%9F%A2IntelliJ-PHPStorm-Setup)

## If setting up a whole new project, refer to [this documentation](https://neoncrm.atlassian.net/wiki/spaces/PROD/pages/3233612415/VueJS+3+research+document#%F0%9F%9F%A2Setup).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit # or `npm run test:unit:ci` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Vue Custom Component [Tutorial](https://www.youtube.com/watch?v=1w24B1f1Rmo)
This 10min tutorial will walk you through how to create and register a component:
```js
import { defineCustomElement } from 'vue'
import TestComponent from './components/my-test-component.ce.vue'

const element = defineCustomElement(TestComponent);

customElements.define("test-component", element);
```
How to bundle css into one js file. (naming component files with extension ce.vue

Once your work is complete you run
```sh
npm run build
```
And this will generate one js file in the /dist directory (along with an html file for previewing)

